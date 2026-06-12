async function callLLM(input) {

  input = input.toLowerCase();

  if (
    input.includes("youtube") ||
    input.includes("play") ||
    input.includes("music") ||
    input.includes("song")) {
    return {
      tool: "youtube",
      args: {
        query: extractQuery(input)
      }
    };
  }
  function extractQuery(text) {
  return text
    .toLowerCase()
    .replace(/\b(play|open|youtube|music|song|on)\b/g, "")
    .trim()
    .replace(/\s+/g, " ") || "music";
}


  if (input.includes("time")) {
    return {
      tool: "time",
      args: {}
    };
  }

  if(input.includes("gmail")){
  return{
      tool:"gmail",
    args : {
      query:"gmail"
    }
  }
  }

if(input.includes("notes")){
  return{
      tool:"notes",
    args : {
      query:"notes"
    }
  }
  }


  if (input.includes("chatgpt")||input.includes("chat gpt")) {
    return {
      tool: "chatgpt",
      args: {
        query: extractChatGPTQuery(input)
      }
    };
  }
  function extractChatGPTQuery(text) {
  return text
    .replace(/open/g, "")
    .replace(/chatgpt/g, "")
    .replace(/and/g, "")
    .trim();
}

  return { tool: null, response: "Don't Understand" };
}

module.exports = callLLM;