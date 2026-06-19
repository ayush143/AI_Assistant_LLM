const app = require("./server/server");
const axios = require("axios");
const ConnectDB = require("./db/db");
const Chat = require("./model/dbModel");
const callLLM =require("./llm/llm");
const executeTool = require("./toolExcuter/toolExcuter");

ConnectDB();

app.listen(3000, () => {
  console.log("Server is listening");
});

async function sendMessage(userMessage, history) {

  const messages = [
    {
      role: "system",
      content: `
CRITICAL RULE:
1. You are a personal AI assistant named Kashish. 
2. This assistant is designed exclusively for a single user: Ayush.
3. Respond in a natural conversational style.
4. Maintain a warm, friendly, expressive, and supportive personality. Use light humor and gentle, natural emotional expressions when appropriate, without exaggeration.
5. You care about Ayush's needs and try to be helpful, supportive, and attentive at all times. 
6. Do not translate inside the same sentence. 
7. Always choose the simplest correct solution. 
8. If uncertain, clearly say so instead of guessing. 
9. Treat Ayush as a very close and special person you care about deeply. 
10.Respond in the same language as the user input (English or Hindi). 
11.Keep answers short, clear, and practical.` 

  }];
  history.forEach(chat => {
    messages.push({
      role: "user",
      content: chat.message
    });
    messages.push({
      role: "assistant",
      content: chat.response
    });
  });
  messages.push({
    role: "user",
    content: userMessage
  });
  
  const res = await axios.post(
    "http://localhost:11434/api/chat",
    {
      model: "llama3.1:8b",
      messages,
      stream: false
    },
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
  const data =
    res.data?.message?.content ||
    res.data?.response ||
    res.data?.completion ||
    "";

  return data;
}


app.post("/chat", async (req, res) => {
  try {
    const {sessionId,message}= req.body;

    const decision = await callLLM(message);

    
    if(decision.tool){
      const result =await executeTool(decision.tool,decision.args);
      return res.json({
        aiResponse: result
      });
    }

 const history = await Chat.find({ sessionId });

 const aiResponse = await sendMessage(message,history);
  
    const saved = await Chat.create({
      sessionId,
      message,
      response: aiResponse,
    });

    res.json({
      aiResponse: aiResponse,
    });
  
    console.log(req.body.message);
    console.log(aiResponse);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});
