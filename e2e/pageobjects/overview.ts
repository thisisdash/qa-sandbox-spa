import { Page } from '@playwright/test'
import { waitFor } from '@testing-library/react';
import { BasePage } from './basepage';
export class Overview extends BasePage{
    constructor(page) {
        super(page)
    }

    async getNewlyAddedRegistration(){
        await this.page.locator(`a.btn`).waitFor({state:'visible'})
        const name = await this.page.locator(`.table tr:nth-child(1) td:nth-child(1)`).textContent()
        const surName = await this.page.locator(`.table tr:nth-child(1) td:nth-child(2)`).textContent()
        const email = await this.page.locator(`.table tr:nth-child(1) td:nth-child(3)`).textContent()
        return {name, surName, email}
    }

    async deleteRegistration(){
        await this.page.locator(`button.btn.btn--icon.-secondary`).click()
        await this.page.locator(`.card__body .btn.-primary`).click()
    }

    async clickUpdateRegistration(){
        await this.page.locator(`a.btn`).click()
    }

    async isRegistrationDeleted(){

        if((await this.page.locator(`.table .input label`).textContent()).trim()===`No registration available!`)
            return true;

        return false;    
    }
}