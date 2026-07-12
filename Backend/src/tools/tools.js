const puppeteer = require("puppeteer");
const say = require("say");
const { exec } = require("child_process");
const axios = require("axios");
const open=require("open");
const { keyboard, Key }=require("@nut-tree-fork/nut-js");

// nut-tree-fork for Move , mouseClick ,Type, textScroll
// open to access device to open app

let browser = null;
let page = null;

async function youtube(args) {
  
    const query = args.query;
    if (!browser) {
        browser = await puppeteer.launch({
            headless: false,
            executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
            userDataDir: "C:\\Mern_Projects\\AI-Assistant-LLM\\new-chrome-profile",
            defaultViewport: null,
            args: ["--start-maximized"],
        });

        page = await browser.newPage();
    }
    await page.goto("https://youtube.com", {
        waitUntil: "domcontentloaded",
    });

    await page.waitForSelector('input[name="search_query"]');
    await page.type('input[name="search_query"]', query);
    await page.keyboard.press("Enter");

    await page.waitForSelector("a#video-title");

    const videos = await page.$$("a#video-title");

    if (videos.length > 0) {
        await videos[0].click();
    }

    return `Playing ${query}`;
}

async function closeYoutube() {
    if (!browser) {
        return "No YouTube browser is open.";
    }
    await browser.close();
    browser = null;
    page = null;

    return "YouTube closed.";
}

async function pauseYoutubeVideo() {
    if (!page) return "No YouTube video is open.";
    await page.keyboard.press("k");
    return "Paused.";
}

async function resumeYoutubeVideo() {
    if (!page) return "No YouTube video is open.";

    await page.keyboard.press("k");
    return "Resumed.";
}

async function nextYoutubeVideo() {
    if (!page) return "No YouTube video is open.";

    await page.keyboard.down("Shift");
    await page.keyboard.press("N");
    await page.keyboard.up("Shift");

    return "Playing next video.";
}

async function skipForwardYoutube() {
    if (!page) return "No YouTube video is open.";

    await page.keyboard.press("l");

    return "Forwarded 10 seconds.";
}

async function skipBackwardYoutube() {
    if (!page) return "No YouTube video is open.";

    await page.keyboard.press("j");

    return "Rewinded 10 seconds.";
}

async function fullscreenYoutube() {
    if (!page) return "No YouTube video is open.";

    await page.keyboard.press("f");

    return "Fullscreen enabled.";
}

async function setYoutubeVolume(args) {
    if (!page) {
        return "No YouTube video is open.";
    }
    const percent = Math.max( 0,Math.min(100, Number(args.percent)));

    await page.evaluate((volume) => {
        const video = document.querySelector("video");

        if (video) {
            video.volume = volume / 100;}
    }, percent);

    return `YouTube volume set to ${percent}%`;
}

function time(){
    return new Date().toLocaleTimeString();
}

async function google(args) {
    const query = args.query;

    const browser = await puppeteer.launch({
        headless: false,
        executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
        userDataDir: "C:\\Mern_Projects\\AI-Assistant-LLM\\chrome-profile",
        defaultViewport: null,
        args: ["--start-maximized"],
    });

    const page = await browser.newPage();

    await page.goto("https://google.com", {
        waitUntil: "domcontentloaded",
    });

    await page.waitForSelector("textarea[name='q']");
    await page.type("textarea[name='q']", query);
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

    document.querySelectorAll( 
      "script","style","nav","footer","header","aside","noscript","iframe","button","svg","form").forEach(el => el.remove());

    const title = document.title;

    const text = document.body.innerText
      .replace(/\s+/g, ' ')
      .trim();

    const content = text.slice(0, 6000);
    return { title, content };
  });
  
 await browser.close();

  const prompt =`
You are a research assistant.

Read this website content and summarize the important information.

Website:
${results.title}

Content:
${results.content}

Give a clear short answer.`;
 
try{
const res = await axios.post(
    "http://localhost:11434/api/chat",
    {
      model: "llama3.1:8b",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ],
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
  console.log(data);
  return data;
}
catch(error){
console.log(error.message);
}

}

 const reminders = [];
function reminder(args) {

 const query = args.query;
console.log("REMINDER:", query);

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


async function openApp(args) {
   const app = args.app.toLowerCase();
    console.log(app);

    if(app ===  "vscode"){
        await open("C:\Users\ask96\AppData\Local\Programs\Microsoft VS Code\Code.exe");
        return "VS Code opened";
    }

    if(app=== "explorer" || app==="file explorer"){
      await open("explorer");
      return "file explorer is on you screen Sir"
    }

    if(app === "email" || app === "gmail"){
       await open("https://mail.google.com");
       return `G-mail is on you screen Sir`;
    }
     
    if (app === "notes" || app === "google notes"||app==="Notepad"){
       exec("start shell:AppsFolder\\Microsoft.MicrosoftStickyNotes_8wekyb3d8bbwe!App");
       return `Notes is on you screen Sir`;
    }
  
    return "Application not found";
}

async function closeApp(args) {
  console.log(args);
  try {
    const app = args.app?.toLowerCase();

        if (app === "notes" || app === "sticky notes"|| app==="Notepad") {
            exec("taskkill /IM Microsoft.Notes.exe /F");

            return "Sticky Notes closed.";
        }
      if(app ===  "vscode"){
        exec("taskkill /IM Code.exe /F");

        return "VS Code closed.";
      }
// here we can't directly kill explorer because it will remove every think from screen so we will just close explorer window instead of kill whole explorer
       if(app === "file explorer" || app==="explorer"){
      exec('powershell -Command "$shell = New-Object -ComObject Shell.Application; $shell.Windows() | ForEach-Object { $_.Quit() }"');
        return "VS Code closed.";
      }

      return "Application not supported.";
  }
  catch(error){
    console.log(error);
  }
}

async function typeText(args) {
    try {
        const { text } = args;
        if (!text || typeof text !== "string") {
            return {
                success: false,
                message: "No text provided."
            };
        }
        // to measure time taken to write things
        console.time("typing");
        await keyboard.type(text);
       console.timeEnd("typing");
        return {
            success: true,
            message: "Text typed successfully."
        };
    } catch (error) {
        return {
            success: false,
            message: error.message
        };
    }
}


module.exports ={youtube,openApp,closeApp,typeText,time,google,reminder,closeYoutube,startReminderService,stopReminderService,pauseYoutubeVideo,skipForwardYoutube,skipBackwardYoutube,resumeYoutubeVideo,nextYoutubeVideo,setYoutubeVolume,fullscreenYoutube};