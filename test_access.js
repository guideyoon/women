const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://replyalba.com/');
  console.log("Title: " + await page.title());
  console.log("URL: " + page.url());
  await browser.close();
})();
