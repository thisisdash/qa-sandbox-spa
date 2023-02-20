import { test, expect } from '@playwright/test'
import { registrationPageClass } from '../pages/registration.page';
import urls from '../util/page.url';
import * as data from '../util/registrationPageObj.json';
import * as inputTestData from '../util/registrationTestData.json';

//locators and testdata
const errLocators = data.registrationFormPage.errorElements
const errorMessages = data.registrationFormPage.errorMessages
const assertLocators = data.registrationFormPage.inputFields
const newDataLocators = data.OverviewPage.tableFields
const testData = inputTestData.registrationFormPage


test.describe('Form Validation Test cases', () => {

    test('TC_Form Validation: Valid form submission with all correctly filled fields', async ({ page }) => {
        //given-
        const testPage = await getHomePage(page);

        //when - 
        await testPage.fillAndSubmit(testData.TC_Form_Validation1.name, testData.TC_Form_Validation1.surname, testData.TC_Form_Validation1.email, testData.TC_Form_Validation1.phone);

        //then -
        await expect.soft(page).toHaveURL(urls.BaseUrl)
        await expect.soft(page.locator(newDataLocators.name)).toHaveText(testData.TC_Form_Validation1.name)
        await expect.soft(page.locator(newDataLocators.surName)).toHaveText(testData.TC_Form_Validation1.surname)
        await expect.soft(page.locator(newDataLocators.email)).toHaveText(testData.TC_Form_Validation1.email)

        //clean-up
        await testPage.deleteData()
    })

    test('TC_Form Validation: Negative sceanrio -Invalid form submission without filling any of the fields', async ({ page }) => {
        const testPage = await getHomePage(page);

        await testPage.clickOnSubmit();

        await expect.soft(page.locator(errLocators.errorDiv)).toHaveCount(testData.TC_Form_Validation2.count)

    })
})

test.describe('Name Validation Test cases', () => {


    test('TC_Name Validation: Verify the whether the field is optional', async ({ page }) => {
        const testPage = await getHomePage(page);

        await testPage.skipNameAndSubmit(testData.TC_Name_Validation1.surname,
            testData.TC_Name_Validation1.email, testData.TC_Name_Validation1.phone);

        await expect.soft(page).toHaveURL(urls.BaseUrl)
    })

    test('TC_Name Validation: Verify the input-type of the field to be text', async ({ page }) => {
        const testPage = await getHomePage(page)

        testPage.labelCheck(testData.TC_Name_Validation2.label)

        await expect.soft(page.locator(assertLocators.name)).toHaveAttribute('type', testData.TC_Name_Validation2.type)
    })

    test('TC_Name Validation: Validate for only alphabet entry in the field', async ({ page }) => {
        const testPage = await getHomePage(page);

        await testPage.fillAndSubmit(testData.TC_Name_Validation3.name,
            testData.TC_Name_Validation3.surname, testData.TC_Name_Validation3.email, testData.TC_Name_Validation3.phone)

        await expect.soft(page).toHaveURL(urls.BaseUrl)
    })

    test('TC_Name Validation: Validate for other language characters entry in the field', async ({ page }) => {
        const testPage = await getHomePage(page);

        await testPage.fillAndSubmit(testData.TC_Name_Validation4.name,
            testData.TC_Name_Validation4.surname, testData.TC_Name_Validation4.email, testData.TC_Name_Validation4.phone)

        await expect.soft(page).toHaveURL(urls.BaseUrl)
        await expect.soft(page).toHaveURL(urls.BaseUrl)

    })

    test('TC_Name Validation: Validate for restricting numeric entry in the field', async ({ page }) => {
        const testPage = await getHomePage(page)

        await testPage.fillAndSubmit(testData.TC_Name_Validation5.name,
            testData.TC_Name_Validation5.surname, testData.TC_Name_Validation5.email, testData.TC_Name_Validation5.phone)

        await expect.soft(page.locator(errLocators.name)).toHaveText(errorMessages.name)

    })
    test('TC_Name Validation: Validate for restricting spaces and special character entry in the field', async ({ page }) => {
        const testPage = await getHomePage(page)

        await testPage.fillAndSubmit(testData.TC_Name_Validation6.name,
            testData.TC_Name_Validation6.surname, testData.TC_Name_Validation6.email, testData.TC_Name_Validation6.phone)

        await expect.soft(page.locator(errLocators.name)).toHaveText(errorMessages.name)

    })

})



test.describe('Surname Validation Test cases', () => {


    test('TC_Surname Validation: Verify the whether the field is madatory', async ({ page }) => {
        const testPage = await getHomePage(page)

        await testPage.skipSurnameAndSubmit(testData.TC_Surname_Validation1.name, testData.TC_Surname_Validation1.email,
            testData.TC_Surname_Validation1.phone)

        await expect.soft(page.locator(errLocators.surName)).toHaveText(errorMessages.req)

    })

    test('TC_Surname Validation: Verify the input-type of the field to be text', async ({ page }) => {
        const testPage = await getHomePage(page)

        testPage.labelCheck(testData.TC_Surname_Validation2.label)

        await expect.soft(page.locator(assertLocators.surName)).
            toHaveAttribute('type', testData.TC_Surname_Validation2.type)
    })

    test('TC_Surname Validation: Validate for alphabet entry in the field', async ({ page }) => {
        const testPage = await getHomePage(page)

        await testPage.fillAndSubmit(testData.TC_Surname_Validation3.name, testData.TC_Surname_Validation3.surname,
            testData.TC_Surname_Validation3.email, testData.TC_Surname_Validation3.phone)

        await expect.soft(page).toHaveURL(urls.BaseUrl)

    })
    test('TC_Surname Validation: Validate for other language characters entry in the field', async ({ page }) => {
        const testPage = await getHomePage(page)

        await testPage.fillAndSubmit(testData.TC_Surname_Validation4.name, testData.TC_Surname_Validation4.surname,
            testData.TC_Surname_Validation4.email, testData.TC_Surname_Validation4.phone)

        await expect.soft(page).toHaveURL(urls.BaseUrl)

    })


    test('TC_Surname Validation: Validate for numeric entry in the field', async ({ page }) => {
        const testPage = await getHomePage(page)

        await testPage.fillAndSubmit(testData.TC_Surname_Validation5.name, testData.TC_Surname_Validation5.surname,
            testData.TC_Surname_Validation5.email, testData.TC_Surname_Validation5.phone)

        await expect.soft(page).toHaveURL(urls.BaseUrl)

    })


    test('TC_Surname Validation: Validate for restricting spaces and special character entry in the field', async ({ page }) => {
        const testPage = await getHomePage(page)

        await testPage.fillAndSubmit(testData.TC_Surname_Validation6.name, testData.TC_Surname_Validation6.surname,
            testData.TC_Surname_Validation6.email, testData.TC_Surname_Validation6.phone)

        await expect.soft(page.locator(errLocators.surName)).toHaveText(errorMessages.surName)

    })

})

test.describe('Contact Email Validation Test cases', () => {

    test('TC_ContactEmail Validation: Verify the whether the field is Mandatory', async ({ page }) => {
        const testPage = await getHomePage(page)

        await testPage.skipEmailAndSubmit(testData.TC_ContactEmail_Validation1.name,
            testData.TC_ContactEmail_Validation1.surname,
            testData.TC_ContactEmail_Validation1.phone)

        await expect.soft(page.locator(errLocators.email)).toHaveText(errorMessages.req)
    })

    test('TC_ContactEmail Validation: Verify the input-type of the field to be text', async ({ page }) => {
        await getHomePage(page)

        await expect.soft(page.locator(assertLocators.email)).toHaveAttribute('type', testData.TC_ContactEmail_Validation2.type)
    })

    test('TC_ContactEmail Validation: Validate for valid email entry with signle domain', async ({ page }) => {
        const testPage = await getHomePage(page)

        await testPage.fillAndSubmit(testData.TC_ContactEmail_Validation3.name, testData.TC_ContactEmail_Validation3.surname,
            testData.TC_ContactEmail_Validation3.email, testData.TC_ContactEmail_Validation3.phone)

        await expect.soft(page).toHaveURL(urls.BaseUrl)

    })
    test('TC_ContactEmail Validation: Validate for valid email entry with Sub-domain', async ({ page }) => {
        const testPage = await getHomePage(page)

        await testPage.fillAndSubmit(testData.TC_ContactEmail_Validation4.name, testData.TC_ContactEmail_Validation4.surname,
            testData.TC_ContactEmail_Validation4.email, testData.TC_ContactEmail_Validation4.phone)

        await expect.soft(page).toHaveURL(urls.BaseUrl)
    })

    test('TC_ContactEmail Validation: Validate for valid email entry with + in the name', async ({ page }) => {
        const testPage = await getHomePage(page)

        await testPage.fillAndSubmit(testData.TC_ContactEmail_Validation5.name, testData.TC_ContactEmail_Validation5.surname,
            testData.TC_ContactEmail_Validation5.email, testData.TC_ContactEmail_Validation5.phone)

        await expect.soft(page).toHaveURL(urls.BaseUrl)
    })

    test('TC_ContactEmail Validation: Validate for valid email entry with numbers in the name and domain', async ({ page }) => {
        const testPage = await getHomePage(page)

        await testPage.fillAndSubmit(testData.TC_ContactEmail_Validation6.name, testData.TC_ContactEmail_Validation6.surname,
            testData.TC_ContactEmail_Validation6.email, testData.TC_ContactEmail_Validation6.phone)

        await expect.soft(page).toHaveURL(urls.BaseUrl)
    })

    test('TC_ContactEmail Validation: Validate for Invalid email entry with special characters in the name', async ({ page }) => {
        const testPage = await getHomePage(page)

        await testPage.fillAndSubmit(testData.TC_ContactEmail_Validation7.name, testData.TC_ContactEmail_Validation7.surname,
            testData.TC_ContactEmail_Validation7.email, testData.TC_ContactEmail_Validation7.phone)

        await expect.soft(page.locator(errLocators.email)).toHaveText(errorMessages.email)
    })

    test('TC_ContactEmail Validation: Validate for Invalid email entry with 2@@', async ({ page }) => {
        const testPage = await getHomePage(page)

        await testPage.fillAndSubmit(testData.TC_ContactEmail_Validation8.name, testData.TC_ContactEmail_Validation8.surname,
            testData.TC_ContactEmail_Validation8.email, testData.TC_ContactEmail_Validation8.phone)

        await expect.soft(page.locator(errLocators.email)).toHaveText(errorMessages.email)
    })

})

test.describe('Phone Validation Test cases', () => {
    //Phone number Validation- Test cases

    test('TC_PhoneNumber Validation: Verify the whether the field is optional', async ({ page }) => {
        const testPage = await getHomePage(page);

        await testPage.skipPhoneAndSubmit(testData.TC_Phone_Validation1.name,
            testData.TC_Phone_Validation1.surname, testData.TC_Phone_Validation1.email)

        await expect.soft(page).toHaveURL(urls.BaseUrl)
    })

    test('TC_PhoneNumber Validation: Verify the input-type of the field to be text', async ({ page }) => {
        await getHomePage(page)

        await expect.soft(page.locator(assertLocators.phone)).toHaveAttribute('type', testData.TC_Phone_Validation2.type)
    })

    test('TC_PhoneNumber Validation: Validate for valid phone number with 10-digit and country code +31', async ({ page }) => {
        const testPage = await getHomePage(page)

        await testPage.fillAndSubmit(testData.TC_Phone_Validation3.name, testData.TC_Phone_Validation3.surname,
            testData.TC_Phone_Validation3.email, testData.TC_Phone_Validation3.phone)

        await expect.soft(page).toHaveURL(urls.BaseUrl)
    })

    test('TC_PhoneNumber Validation: Validate for valid phone number with only 10-digit', async ({ page }) => {
        const testPage = await getHomePage(page)

        await testPage.fillAndSubmit(testData.TC_Phone_Validation4.name, testData.TC_Phone_Validation4.surname,
            testData.TC_Phone_Validation4.email, testData.TC_Phone_Validation4.phone)

        await expect.soft(page).toHaveURL(urls.BaseUrl)
    })

    test('TC_PhoneNumber Validation: Validate for Invalid phone number with alphabets, spaces and special characters', async ({ page }) => {
        const testPage = await getHomePage(page)

        await testPage.fillAndSubmit(testData.TC_Phone_Validation5.name, testData.TC_Phone_Validation5.surname,
            testData.TC_Phone_Validation5.email, testData.TC_Phone_Validation5.phone)

        await expect.soft(page.locator(errLocators.phone)).toHaveText(errorMessages.phone)
    })

})
async function getHomePage(page) {
    await page.goto(urls.RegUrl)
    return new registrationPageClass(page);
}