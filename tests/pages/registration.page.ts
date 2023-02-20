import type { Page } from "@playwright/test";
import * as data from '../../tests/util/registrationPageObj.json';

export class registrationPageClass {
    
    readonly page: Page
    constructor(page: Page) {
        this.page = page
    }
    element = data.registrationFormPage.inputFields
    delData = data.OverviewPage.tableFields


   //************ Page Funtions***********************//
    async fillInData(loc:string,value: string) {
        await this.page.locator(loc).fill(value)
    }

    clickOnSubmit = async () => {
        await this.page.locator(this.element.submit).click();
    }

    async fillAndSubmit(name: string, surname: string, email: string, phone: string) {
        await this.fillInData(this.element.name, name)
        await this.fillInData(this.element.surName, surname)
        await this.fillInData(this.element.email, email)
        await this.fillInData(this.element.phone, phone)
        await this.clickOnSubmit()
    }

    async skipNameAndSubmit(surname: string, email: string, phone: string) {
        await this.fillInData(this.element.surName, surname)
        await this.fillInData(this.element.email, email)
        await this.fillInData(this.element.phone, phone)
        await this.clickOnSubmit()
    }
    async skipSurnameAndSubmit(name: string, email: string, phone: string) {
        await this.fillInData(this.element.name, name)
        await this.fillInData(this.element.email, email)
        await this.fillInData(this.element.phone, phone)
        await this.clickOnSubmit()
    }

    async skipEmailAndSubmit(name: string, surname: string, phone: string) {
        await this.fillInData(this.element.name, name)
        await this.fillInData(this.element.surName, surname)
        await this.fillInData(this.element.phone, phone)
        await this.clickOnSubmit()
    }

    async skipPhoneAndSubmit(name: string, surname: string, email: string) {
        await this.fillInData(this.element.name, name)
        await this.fillInData(this.element.surName, surname)
        await this.fillInData(this.element.email, email)
        await this.clickOnSubmit()
    }


    //Returns the element by Label
    async labelCheck(name: string) {
        return await this.page.getByLabel(name)
    }

    //Data clean up
    
    async deleteData() {
        await this.page.locator(this.delData.delete).click() 
        await this.page.locator(this.delData.accept).click()
    }
    

}
