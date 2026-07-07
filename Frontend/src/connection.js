async function callbackend(text) {
  
try{
  const sessionId = sessionStorage.getItem("sessionId");

      const res = await fetch(`https://ai-assistant-llm-brtw.onrender.com/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
      sessionId,
      message:text})
  })

  return await res.json();

    

}
catch(err){
    console.error(err)
}
};

export default callbackend
