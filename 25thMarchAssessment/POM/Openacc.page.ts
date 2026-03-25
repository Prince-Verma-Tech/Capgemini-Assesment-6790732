import { Page, expect } from "@playwright/test"

export default class OpenAccountPage {
    page: Page
    loginBTN: any
    openacc: any
    customername: any
    currency: any
    processBTN: any
    HomeBTN: any

    constructor(page: Page) {
        this.page = page
        this.loginBTN = page.getByText('Bank Manager Login')
        this.openacc = page.getByText('Open Account')
        this.customername = page.locator("//select[@name='userSelect']")
        this.currency = page.locator('#currency')
        this.processBTN = page.getByText('Process')
        this.HomeBTN = page.getByText('Home')
    }

    async openAccount() {
        await this.loginBTN.click()
        await this.openacc.click()

        await expect(this.customername).toBeVisible()
        await this.customername.selectOption({ label: 'Prince Verma' })

        await expect(this.currency).toBeVisible()
        await this.currency.selectOption({ label: 'Rupee' })

        this.page.once('dialog', async (dialog) => {
            await dialog.accept()
        })

        await this.processBTN.click()
        await this.HomeBTN.click()
    }
}