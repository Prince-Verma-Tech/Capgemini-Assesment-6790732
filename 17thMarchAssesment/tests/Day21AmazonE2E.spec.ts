import {test} from '@playwright/test';
import AmazonJobs from '../POM/Day21AmazonE2E.page';

test('Day21 Amazon E2E', async ({page}) => {
    const amazonJobs = new AmazonJobs(page);
    await page.goto("https://www.amazon.in");
    await amazonJobs.goToCareersPage();
    await amazonJobs.filterJobs();
    let page2 = await amazonJobs.chooseJob(page);
    await amazonJobs.apply(page2);
    await page.waitForTimeout(3000);
    await page.screenshot({path: 'Screenshot/Day21AmazonE2E.png',fullPage:true});
})