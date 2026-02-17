const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://replyalba.com/index.php?r=home&category=16');
  await page.waitForTimeout(3000);
  
  // Take a screenshot to see what's happening
  await page.screenshot({ path: 'debug_scrape.png' });
  
  const content = await page.evaluate(() => {
      // Look for any text or links
      return {
          bodyText: document.body.innerText.substring(0, 500),
          links: Array.from(document.querySelectorAll('a')).slice(0, 10).map(a => a.href),
          htmlLength: document.documentElement.innerHTML.length
      };
  });
  
  console.log(JSON.stringify(content, null, 2));
  await browser.close();
})();
