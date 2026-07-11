const puppeteer = require("puppeteer");
const say = require("say");
const { exec } = require("child_process");

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
module.exports ={youtube,time,google, chatgpt,gmail,notes,reminder,closeYoutube,startReminderService,stopReminderService,pauseYoutubeVideo,skipForwardYoutube,skipBackwardYoutube,resumeYoutubeVideo,nextYoutubeVideo,setYoutubeVolume,fullscreenYoutube};