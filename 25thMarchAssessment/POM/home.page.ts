import { Page } from "@playwright/test"
import customer from "../testdata/customer.json"

export default class HomePage {
    page: Page
    data: any
    logoutBTN: any

    constructor(page: Page) {
        this.page = page
        this.data = customer
        this.logoutBTN = page.getByText('Logout')
    }

    async navigate() {
        await this.page.goto(this.data.url)
    }

    async logout() {
        await this.logoutBTN.click()
    }
}