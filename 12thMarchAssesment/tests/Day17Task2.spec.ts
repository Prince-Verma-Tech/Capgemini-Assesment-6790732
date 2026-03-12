import {test,expect} from "@playwright/test";

test("Task 2",async({browser})=>{
  let context=await browser.newContext({
    permissions:["notifications"]
  });
  let page=await context.newPage();
  await page.goto("https://www.justdial.com");
  let result=await page.evaluate(async()=>{
    return await Notification.requestPermission();
  });
  console.log(result);
  page.locator('#main-auto').fill("Restaurants");
  await page.keyboard.press("Enter");
  await expect(page.locator('#main-auto')).toHaveValue("Restaurants");
  await page.waitForTimeout(2000)
  await page.screenshot({path:"Screenshot/Task2.png"})

});