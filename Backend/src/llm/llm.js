const { stopReminderService } = require("../tools/tools");

async function callLLM(input) {

  input = input.toLowerCase();

  if (
    input.includes("youtube") ||
    input.includes("play") ) {
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

 if (
  input.includes("remind me") ||
  input.includes("please remind me") ||
  input.includes("hey remind me") ||
  input.includes("set Reminder of")
) {
  return {
    tool: "reminder",
    args: {
      query:input
    }
  };
}


if(
  input.includes("stop Reminder")||
  input.includes("stop reminder")||
  input.includes("stopReminder")||
  input.includes("stop current Reminder")
){
  return{
  tool: "stopReminderService",
  args: {
    query:input

  }
};
}


  if (input.includes("google")||input.includes("browser")) {
    return {
      tool: "google",
      args: {
        query: extractgoogleQuery(input)
      }
    };
  }
  function extractgoogleQuery(text) {
  return text
    .replace(/open/g, "")
    .replace(/google/g, "")
    .replace(/and/g, "")
    .trim();
}

  return { tool: null, response: "Don't Understand" };
}

module.exports = callLLM;