
const { exec } = require("child_process");

function youtube(query) {
  const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
  exec(`cmd /c start "" "${url}"`);
  return `Playing ${query} on YouTube`;
}

function time(){
    return new Date().toLocaleTimeString();
}

function chatgpt(){
   
    const url = `https://chatgpt.com` ;
    exec(`cmd /c start "" "${url}"`);
    return ` chatgpt is on your screen `
}

function gmail() { 

  const url = `https://mail.google.com`;
  exec(`cmd /c start "" "${url}"`);
  return `G-mail is on you screen Sir`;
}

function notes() { 

  const url = `https://keep.google.com/u/0/`;
  exec(`cmd /c start "" "${url}"`);
  return `Google Notes is on you screen Sir`;
}
module.exports ={youtube,time,chatgpt,gmail,notes};