const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Try navigating and waiting longer
  try {
    console.log("Navigating...");
    await page.goto('https://replyalba.com/index.php?r=home&category=16', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(5000);
    
    const html = await page.content();
    console.log("HTML Length: " + html.length);
    console.log("HTML Start: " + html.substring(0, 1000));
    
    const items = await page.evaluate(() => {
        // Try very generic selectors
        return Array.from(document.querySelectorAll('*')).filter(el => {
            return el.innerText && el.innerText.includes('미즈케어') && el.tagName === 'DIV';
        }).map(el => el.className);
    });
    console.log("Potential item classes: " + JSON.stringify([...new Set(items)]));

  } catch (e) {
    console.error(e);
  }
  
  await browser.close();
})();
