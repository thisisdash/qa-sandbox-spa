import { Page } from '@playwright/test'
import { data } from '../data/data'
export class BasePage {
    page: Page;
    constructor(page) {
        this.page = page;
    }

    async navigate(path) {
        await this.page.goto(data.url + path);
    }

    async pageHeading() {
        return (await this.page.locator(`//h1[@class="page-heading"]`).textContent()).trim();
    }


}