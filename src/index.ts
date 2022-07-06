import puppeteer from 'puppeteer/lib/cjs/puppeteer/node-puppeteer-core';

(async () => {
	const browser = await puppeteer.launch({
		headless: false,
		args: ['--no-sandbox'],
	});
	const page = await browser.newPage();
	await page.goto('https://genshin-impact.fandom.com/wiki/Category:Food_Icons');

	await (await page.waitForXPath("/html/body/div[8]/div/div/div[2]/div[2]"))?.click();
	// await browser.close();
})()