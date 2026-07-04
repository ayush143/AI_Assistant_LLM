const puppeteer = require("puppeteer");
const say = require("say");
const { exec } = require("child_process");

async function youtube(query) {
  const browser = await puppeteer.launch({
  headless: false,
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
   userDataDir: "C:\\Mern_Projects\\AI-Assistant-LLM\\new-chrome-profile",
  defaultViewport: null,
  args: ["--start-maximized"],
});
  const page = await browser.newPage();
await page.goto("https://youtube.com", {
  waitUntil: "domcontentloaded",
});
  await page.waitForSelector('input[name="search_query"]');
  await page.type('input[name="search_query"]',`${query}`);
  await page.keyboard.press('Enter')

await page.waitForSelector("a#video-title");
const videos = await page.$$("a#video-title");

if (videos.length > 0) {
  await videos[0].click();
}
  console.log("yt is opened");
}

function time(){
    return new Date().toLocaleTimeString();
}

async function google(query){
   const browser = await  puppeteer.launch({
    headless:false,
   executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
   userDataDir: "C:\\Mern_Projects\\AI-Assistant-LLM\\chrome-profile",
  defaultViewport: null,
  args: ["--start-maximized"],
   });
   
   const page = await browser.newPage();
 await page.goto("https://google.com",{
  waitUntil:"domcontentloaded",
 });
 await page.waitForSelector("textarea[name='q']");
 await page.type("textarea[name='q']" ,`${query}`);
 await page.keyboard.press("Enter");

 await page.waitForSelector('#search');

const firstUrl = await page.$eval(
    "#search .tF2Cxc a",
    el => el.href
  );

  await page.goto(firstUrl, {
    waitUntil: "domcontentloaded",
  });
  const results = await page.evaluate(() => {

    document.querySelectorAll('script,style,nav,footer,header,aside').forEach(el => el.remove());

    const title = document.title;

    const text = document.body.innerText
      .replace(/\s+/g, ' ')
      .trim();

    const snippet = text.slice(0, 1000);

    return { title, snippet };
  });
  console.log(results);
  await browser.close();

const formatted = results
  ? `Title: ${results.title}\n Snippet: ${results.snippet}`:"answere not found";

return formatted;
}

 const reminders = [];
function reminder(query) {

  console.log("REMINDER ARGS:", query);
  const text = query || "";

  if (!text) {
    return "No reminder text received";
  }
  const match = text.match(/in (\d+)\s*(seconds?|minutes?|hours?)/i);
  if (!match) {
    return "Can't understand time format";
  }
  const value = parseInt(match[1]);
  const unit = match[2];

  let time = 0;
  if (unit.includes("second")) time = value * 1000;
  if (unit.includes("minute")) time = value * 60 * 1000;
  if (unit.includes("hour")) time = value * 60 * 60 * 1000;

  const message = text
    .replace(/in \d+\s*(seconds?|minutes?|hours?)/i, "")
    .replace(/remind me/i, "")
    .trim();

  reminders.push({
    message,
    time: Date.now() + time
  });

  return `Reminder set: ${message}`;
}

 function startReminderService() {
  setInterval(() => {
    const now = Date.now();
    //  console.log("reminder is cheking");

    for (let i = 0; i < reminders.length; i++) {

      if (reminders[i].time <= now) {
        const msg = reminders[i].message;
        console.log(" REMINDER:", msg);

          reminders[i].time = now +  3000;
          say.speak(`Reminder: ${msg}`);
        
      }
    }
  
  }, 1000);
}

function stopReminderService(query){
  console.log("Before stop:", reminders);
    if(reminders.length>=1){
      reminders.splice(0,1)
    }
}

function chatgpt(){

  const url = `https://chatgpt.com`;
  exec(`cmd /c start "" "${url}"`);
  return ` chatgpt is on you screen Sir`;
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
module.exports ={youtube,time,google, chatgpt,gmail,notes,reminder,startReminderService,stopReminderService};