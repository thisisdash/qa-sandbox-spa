import { test, expect, Page } from '@playwright/test';
import { Registration } from './pageobjects/registration'
import { Overview } from './pageobjects/overview'
import { data } from './data/data'

test.beforeEach(async ({ page }) => {
  const registration = new Registration(page)
  await registration.navigate('/registration')
});


test.describe('Name field', () => {
  test('should be optional', async ({ page }) => {
    const registration = new Registration(page)
    await registration.clickSubmit()
    expect(await (await registration.getNameValidationMessage()).isVisible()).toBeFalsy()
  });

  test('should allow letters', async ({ page }) => {
    const registration = new Registration(page)
    await registration.enterName(data.onlyLetters)
    expect(await (await registration.getNameValidationMessage()).isVisible()).toBeFalsy()
  });

  test('should not allow numbers', async ({ page }) => {
    const registration = new Registration(page)
    await registration.enterName(data.onlyNumbers)
    expect(await (await registration.getNameValidationMessage()).isVisible()).toBeTruthy()
  });

  test('should not allow special characters', async ({ page }) => {
    const registration = new Registration(page)
    await registration.enterName(data.onlySpecialCharacters)
    expect(await (await registration.getNameValidationMessage()).isVisible()).toBeTruthy()
  });

});

test.describe('Surname field', () => {
  test('should be mandatory', async ({ page }) => {
    const registration = new Registration(page)
    await registration.clickSubmit()
    expect(await (await registration.getSurnameValidationMessage()).isVisible()).toBeTruthy()
  });

  test('should show the required mandatory message', async ({ page }) => {
    const registration = new Registration(page)
    await registration.clickSubmit()
    expect(await (await registration.getSurnameValidationMessage()).textContent()).toBe("Required")
  });

  test('should allow letters and numbers', async ({ page }) => {
    const registration = new Registration(page)
    await registration.enterSurname(`${data.onlyLetters}${data.onlyNumbers}`)
    expect(await (await registration.getSurnameValidationMessage()).isVisible()).toBeFalsy()
  });

  test('should not allow special characters', async ({ page }) => {
    const registration = new Registration(page)
    await registration.enterSurname(data.onlySpecialCharacters)
    expect(await (await registration.getSurnameValidationMessage()).isVisible()).toBeTruthy()
  });

});

test.describe('Email field', () => {
  test('should be mandatory', async ({ page }) => {
    const registration = new Registration(page)
    await registration.clickSubmit()
    expect(await (await registration.getEmailValidationMessage()).isVisible()).toBeTruthy()
  });

  test('should show the required mandatory message', async ({ page }) => {
    const registration = new Registration(page)
    await registration.clickSubmit()
    expect(await (await registration.getEmailValidationMessage()).textContent()).toBe("Required")
  });

  test('should not allow special characters other than @+.', async ({ page }) => {
    const registration = new Registration(page)
    await registration.enterEmail(`%^`)
    expect(await (await registration.getEmailValidationMessage()).isVisible()).toBeTruthy()
  });

  test('should show message in case of inorrect email format - a@s12', async ({ page }) => {
    // Create 2nd todo.
    const registration = new Registration(page)
    await registration.enterEmail("a@s12")
    await registration.clickSubmit()
    expect(await (await registration.getEmailValidationMessage()).isVisible()).toBeTruthy()    
  });

  test('should show message in case of incorrect email format - a@.co', async ({ page }) => {
    // Create 2nd todo.
    const registration = new Registration(page)
    await registration.enterEmail("a@.co")
    await registration.clickSubmit()
    expect(await (await registration.getEmailValidationMessage()).isVisible()).toBeTruthy()
  });

  test('should show no error for email with correct format', async ({ page }) => {
    const registration = new Registration(page)
    await registration.enterEmail("a@b.co")
    expect(await (await registration.getEmailValidationMessage()).isVisible()).toBeFalsy()
  });

});

test.describe('Phone field', () => {
  test('should be optional', async ({ page }) => {
    const registration = new Registration(page)
    await registration.clickSubmit()
    expect(await (await registration.getPhoneValidationMessage()).isVisible()).toBeFalsy()
  });

  test('should allow numbers and +', async ({ page }) => {
    const registration = new Registration(page)
    await registration.enterPhone(`+${data.onlyNumbers}`)
    expect(await (await registration.getPhoneValidationMessage()).isVisible()).toBeFalsy()
  });

  test('should not allow special characters', async ({ page }) => {
    const registration = new Registration(page)
    await registration.enterPhone(data.onlySpecialCharacters)
    expect(await (await registration.getPhoneValidationMessage()).isVisible()).toBeTruthy()
  });


});

test.describe('New Registration', () => {
  test('Create new registration', async ({ page }) => {
    const registration = new Registration(page)
    const overview = new Overview(page)
    registration.createNewRegistration()
    let details = await overview.getNewlyAddedRegistration()
    expect (details.name).toBe(`Name`)
    expect (details.surName).toBe(`Surname`)
    expect (details.email).toBe(`a@b.com`)
  });

  test.afterEach(async ({ page }) => {
    const overview = new Overview(page)
    await overview.deleteRegistration()
  });

});

test.describe('Delete Registration', () => {

  test.beforeEach(async ({ page }) => {
    const registration = new Registration(page)
    await registration.navigate('/registration')
    await registration.createNewRegistration()
  });

  test('Delete registration', async ({ page }) => {
    const overview = new Overview(page)
    await overview.deleteRegistration()
    expect(await overview.isRegistrationDeleted()).toBeTruthy()
  });

});

test.describe('Update Registration', () => {

  test.beforeEach(async ({ page }) => {
    const registration = new Registration(page)
    await registration.navigate('/registration')
    await registration.createNewRegistration()
  });

  test('Update registration', async ({ page }) => {
    const overview = new Overview(page)
    const registration = new Registration(page)
    await overview.clickUpdateRegistration()
    await registration.enterName(`Updated`)
    await registration.clickSubmit()
    let details = await overview.getNewlyAddedRegistration()
    expect (details.name).toBe(`UpdatedName`)
  });

  test.afterEach(async ({ page }) => {
    const overview = new Overview(page)
    await overview.deleteRegistration()
  });

});