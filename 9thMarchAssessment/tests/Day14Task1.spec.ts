import { test, expect } from "@playwright/test";

test("qspider", async ({ page }) => {
  await page.setDefaultTimeout(20000);
  await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
  let name = await page.getByLabel("name");
  let email = await page.getByLabel("email");
  let pass = await page.getByLabel("password");
  let submit = await page.getByRole("button", { name: "Register" });
  await name.fill("Prince");
  await email.fill("princeverma55080@gmail.com");
  await pass.fill("Prince@55080");
  await expect(name).toHaveValue("Prince");
  await expect(email).toHaveValue("princeverma55080@gmail.com");
  await expect(pass).toHaveValue("Prince@55080");
  await expect(submit).toBeVisible();
  await expect(submit).toBeInViewport();
  await submit.click();
  await page.waitForTimeout(2000);
  await page.screenshot({path:"Screenshot/Day14Task1.png"})
});