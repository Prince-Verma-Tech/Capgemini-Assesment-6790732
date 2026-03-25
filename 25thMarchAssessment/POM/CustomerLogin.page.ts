import { Page, expect } from "@playwright/test"

export default class CustomerLoginPage {
    page: Page
    CustomerLoginBTN: any
    YourNameDialogue: any
    loginBTN2: any

    constructor(page: Page) {
        this.page = page
        this.CustomerLoginBTN = page.getByText('Customer Login')
        this.YourNameDialogue = page.locator('#userSelect')
        this.loginBTN2 = page.getByText('Login')
    }

    async loginCustomer() {
        await this.CustomerLoginBTN.click()

        await expect(this.YourNameDialogue).toBeVisible()
        await this.YourNameDialogue.selectOption({ label: 'Prince Verma' })

        await this.loginBTN2.click()
    }
}