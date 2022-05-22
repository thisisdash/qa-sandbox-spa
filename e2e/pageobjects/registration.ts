import { Page } from '@playwright/test'
import { BasePage } from './basepage';
export class Registration extends BasePage{
    constructor(page) {
        super(page)
    }

    txtName = `#name`
    txtSurname = `#surname`
    txtEmail = `#email`
    txtPhone = `#phone`
    lblName = `#name + p.input__validation`
    lblSurname = `#surname + p.input__validation`
    lblEmail = `#email+ p.input__validation`
    lblPhone = `#phone + p.input__validation`
    btnSubmit = `.btn.-primary`

    async getNameValidationMessage(){
        return this.page.locator(this.lblName)
    }

    async getSurnameValidationMessage(){
        return this.page.locator(this.lblSurname)
    }

    async getEmailValidationMessage(){
        return this.page.locator(this.lblEmail)
    }

    async getPhoneValidationMessage(){
        return this.page.locator(this.lblPhone)
    }

    async clickSubmit(){
        await this.page.locator(this.btnSubmit).click()
    }

    async enterName(text){
        await this.page.locator(this.txtName).type(text)
    }

    async enterSurname(text){
        await this.page.locator(this.txtSurname).type(text)
    }

    async enterEmail(text){
        await this.page.locator(this.txtEmail).type(text)
    }

    async enterPhone(text){
        await this.page.locator(this.txtPhone).type(text)
    }

    async createNewRegistration(){
        await this.enterName(`Name`)
        await this.enterSurname(`Surname`)
        await this.enterEmail(`a@b.com`)
        await this.enterPhone(`127676876`)
        await this.clickSubmit()
    }
}
