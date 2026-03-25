import { test } from "@playwright/test"
import AddCustomerPage from "../POM/Addcustomer.page.ts"
import OpenAccountPage from "../POM/Openacc.page.ts"
import CustomerLoginPage from "../POM/CustomerLogin.page.ts"
import TransactionPage from "../POM/transaction.page.ts"
import HomePage from "../POM/home.page.ts"

test('Bank Flow', async ({ page }) => {

    const home = new HomePage(page)
    const addCustomer = new AddCustomerPage(page)
    const openAccount = new OpenAccountPage(page)
    const login = new CustomerLoginPage(page)
    const transaction = new TransactionPage(page)

    await home.navigate()
    await addCustomer.addCustomer()
    await openAccount.openAccount()
    await login.loginCustomer()
    await transaction.doTransaction()
    await home.logout()
})