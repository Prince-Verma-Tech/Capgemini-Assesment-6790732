import { Page } from "@playwright/test"
import customer from "../testdata/customer.json"

export default class AddCustomerPage {
    page: Page
    data: any
    loginBTN: any
    addcutomerBTN: any
    Fname: any
    Lname: any
    PostCode: any
    addcustomerBTN2: any
    HomeBTN: any

    constructor(page: Page) {
        this.page = page
        this.data = customer
        this.loginBTN = page.getByText('Bank Manager Login')
        this.addcutomerBTN = page.getByText('Add Customer')
        this.Fname = page.getByPlaceholder('First Name')
        this.Lname = page.getByPlaceholder('Last Name')
        this.PostCode = page.getByPlaceholder('Post Code')
        this.addcustomerBTN2 = page.locator('//button[@class="btn btn-default"]')
        this.HomeBTN = page.getByText('Home')
    }

    async addCustomer() {
        await this.loginBTN.click()
        await this.addcutomerBTN.click()
        await this.Fname.fill(this.data.Fname)
        await this.Lname.fill(this.data.Lname)
        await this.PostCode.fill(this.data.PostCode)

        this.page.once('dialog', async (dialog) => {
            await dialog.accept()
        })

        await this.addcustomerBTN2.click()
        await this.HomeBTN.click()
    }
}