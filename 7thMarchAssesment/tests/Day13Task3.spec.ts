import { test, expect } from '@playwright/test';

test('Task3', async ({ page }) => {
  await page.goto('https://www.cricbuzz.com/');
  await page.getByTitle('Live Cricket Score').click();
  

});

