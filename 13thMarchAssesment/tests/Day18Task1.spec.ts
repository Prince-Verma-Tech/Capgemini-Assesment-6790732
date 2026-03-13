import {test} from '@playwright/test'
import path from 'node:path'
import excel from 'exceljs'

test("Day 18 Task 1", async({page})=>{
    let workbook = new excel.Workbook();
    let book = await workbook.xlsx.readFile(path.join(__dirname, "../testdata/day19-task1.xlsx"));
    let sheet = book.getWorksheet("Sheet1");
    if(!sheet){
        throw new Error("Shhet doesnt exist");
    }
    for(let i = 1; i<=sheet?.actualRowCount; i++){
        let row = sheet?.getRow(i);
        const firstName = row?.getCell(1).toString();
        const lastName = row?.getCell(2).toString();
        const email = row?.getCell(3).toString();
        const gender = row?.getCell(4).toString();
        const mobile = row?.getCell(5).toString();
        const subject = row?.getCell(6).toString();
        const hobby = row?.getCell(7).toString();
        const image = row?.getCell(8).toString();
        const address = row?.getCell(9).toString();
        const state = row?.getCell(10).toString();
        const city = row?.getCell(11).toString();
        await page.goto('https://demoqa.com/automation-practice-form');
        await page.locator('#firstName').fill(firstName);
        await page.locator('#lastName').fill(lastName);
        await page.locator('#userEmail').fill(email);

        if(gender == 'Male'){
            await page.locator('#gender-radio-1').check();
        }
        else if(gender == 'Female'){
            await page.locator('#gender-radio-2').check();
        }
        else{
            await page.locator('#gender-radio-3').check();
        }
        await page.locator('#userNumber').fill(mobile);
        await page.locator('#subjectsInput').fill(subject);
        await page.locator('#subjectsInput').press('Enter');

        if(hobby == 'Sports'){
            await page.locator('#hobbies-checkbox-1').check();
        }
        else if(hobby == 'Reading'){
            await page.locator('#hobbies-checkbox-2').check();
        }
        else if(hobby == 'Music'){
            await page.locator('#hobbies-checkbox-3').check();
        }
        await page.locator('#uploadPicture').setInputFiles(path.join(__dirname, image));
        await page.locator('#currentAddress').fill(address);
        await page.locator('#react-select-3-input').fill(state);
        await page.locator('#react-select-3-input').press('Enter');
        await page.locator('#react-select-4-input').fill(city);
        await page.locator('#react-select-4-input').press('Enter');
        await page.waitForTimeout(4000);
        await page.locator('#submit').click();
        

        


        
    }
})