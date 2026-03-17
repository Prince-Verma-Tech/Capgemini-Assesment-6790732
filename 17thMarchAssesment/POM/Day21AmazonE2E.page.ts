
import {Locator, Page} from '@playwright/test';
import jsonData from '../testdata/Day21AmazonE2E.json'

class AmazonJobs{
    careersLink: Locator;
    country: Locator;
    state: Locator;
    city: Locator;
    employmentType: Locator;
    category: Locator;
    careerArea: Locator;
    team: Locator;
    roleType: Locator;
    secondJobOption: Locator;
    applyBtn: Locator;
    studentOpportunity: Locator;
    findOpenUniRoles: Locator

    constructor(page: Page){
        this.careersLink = page.getByText('Careers');
        this.country = page.getByText(jsonData.Country);
        this.state = page.getByText(jsonData.state);
        this.city = page.locator(`//div[@data-test-component="StencilText" and contains(text(), "${jsonData.city}") and @class="filter-value-module_label__Pet6N css-gb1y2i"]`);
        this.employmentType = page.locator('//*[@id="search"]/div/div[1]/div/fieldset[4]/div/div[2]/div/div[2]/ul/li[2]/label/span/div');
        this.category = page.locator(`//div[@class="filter-value-module_label__Pet6N css-gb1y2i" and contains(text(), "${jsonData.category}")]`);
        this.careerArea = page.locator(`//div[@class="filter-value-module_label__Pet6N css-gb1y2i" and contains(text(), "${jsonData.careerarea}")]`);
        this.team = page.locator(`//div[@class="filter-value-module_label__Pet6N css-gb1y2i" and contains(text(), "${jsonData.team}")]`);
        this.roleType = page.locator(`//div[@class="filter-value-module_label__Pet6N css-gb1y2i" and contains(text(), "${jsonData.roletype}")]`);
        this.secondJobOption = page.getByRole('link', { name: 'Engineering Intern' });
        this.applyBtn = page.locator('//div[@class="apply"]//a');
        this.studentOpportunity = page.locator('//a[text()="Find your role"]').first();
        this.findOpenUniRoles = page.getByText('Find open university roles');;
    }

    async goToCareersPage(){
        await this.careersLink.click();
        await this.studentOpportunity.click();
        await this.findOpenUniRoles.click();
    }

    async filterJobs(){
        await this.country.click();
        await this.state.click();
        await this.city.click();
        await this.employmentType.click();
        await this.category.click();
        await this.careerArea.click();
        await this.team.click();
        await this.roleType.click();
    }

    async chooseJob(page:Page){

        let [page2] = await Promise.all([
            page.waitForEvent('popup'),
            this.secondJobOption.click()
        ])
        return page2;
    }

    async apply(newPage:Page){
        this.applyBtn = newPage.locator('//div[@class="apply"]//a');
        await this.applyBtn.click();
    }
}

export default AmazonJobs;
