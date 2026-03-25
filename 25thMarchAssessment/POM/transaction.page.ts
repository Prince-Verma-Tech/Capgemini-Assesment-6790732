import { Page } from "@playwright/test"
import customer from "../testdata/customer.json"

export default class TransactionPage {
    page: Page
    data: any
    depositBTN: any
    AmountDialogue: any
    depositBTN2: any
    withdrawBTN: any
    AmountDialogue2: any
    withdrawBTN2: any
    balanceVal: any

    constructor(page: Page) {
        this.page = page
        this.data = customer
        this.depositBTN = page.getByText('Deposit')
        this.AmountDialogue = page.getByPlaceholder('amount')
        this.depositBTN2 = page.getByText('Deposit').last()
        this.withdrawBTN = page.getByText('Withdrawl')
        this.AmountDialogue2 = page.getByPlaceholder('amount')
        this.withdrawBTN2 = page.locator('//button[@class="btn btn-default" and .="Withdraw"]')
        this.balanceVal = page.locator('//div[@ng-hide="noAccount"]').first()
    }

    async doTransaction() {
        await this.depositBTN.click()
        await this.AmountDialogue.fill(this.data.AmountDialogue)
        await this.depositBTN2.click()
        await this.page.waitForTimeout(5000)
        await this.withdrawBTN.click()
        await this.AmountDialogue2.fill(this.data.AmountDialogue2)
        await this.withdrawBTN2.click()
        await this.page.waitForTimeout(5000)
    

        const text = await this.balanceVal.textContent()
        console.log(text)
    }
}