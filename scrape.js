const { chromium } = require('playwright');

(async () => {
  try {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    
    let allProducts = [];

    await page.goto('https://replyalba.com/index.php?r=home&category=16', { waitUntil: 'networkidle' });
    
    // Debug: log the page content if it's empty
    const html = await page.content();
    if (html.length < 500) {
        console.error("Page content too short. Possible block or redirect.");
    }

    const scrapePage = async () => {
        return await page.evaluate(() => {
            const items = Array.from(document.querySelectorAll('div.merchant-item, li.merchant-item, .m_item, .merchant-list li'));
            return items.map(item => {
                const title = item.querySelector('.name, .m_name, h3, .title')?.innerText?.trim();
                const category = item.querySelector('.category, .m_cate, .cate')?.innerText?.trim();
                const image = item.querySelector('img')?.src;
                const promotion = !!(item.innerText.includes('프로모션') || item.querySelector('.tag_promo, .promo'));
                return { title, category, image, promotion };
            }).filter(i => i.title);
        });
    };

    allProducts.push(...(await scrapePage()));

    // Try to find pagination
    const nextPages = await page.$$('a.page-link, .pagination a');
    for (let i = 0; i < nextPages.length; i++) {
        const text = await nextPages[i].innerText();
        if (text.trim() === '2') {
            await nextPages[i].click();
            await page.waitForTimeout(3000);
            allProducts.push(...(await scrapePage()));
            break;
        }
    }

    if (allProducts.length === 0) {
        // Fallback: search for any product-like structure
        const fallback = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('a')).map(a => ({
                text: a.innerText,
                href: a.href
            })).filter(a => a.text.length > 5 && a.href.includes('merchant'));
        });
        console.error("No products found with primary selectors. Fallback links count: " + fallback.length);
    }

    console.log(JSON.stringify(allProducts, null, 2));
    await browser.close();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
