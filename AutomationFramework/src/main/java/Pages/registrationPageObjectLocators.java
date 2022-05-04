package Pages;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import Base.testBase;
import Utility.testUtility;

public class registrationPageObjectLocators extends testBase {

    @FindBy(xpath="//a[contains(text(),'New registration')]")
    WebElement newRegistrationLink;

    @FindBy(xpath="//a[contains(text(),'Invalid email address')]")
    WebElement invalidEmailAddressErrorMessage;

    @FindBy(xpath="//h1[@class='Registration form']")
    WebElement registrationFormLabel;

    @FindBy(id="name")
    WebElement userName;

    @FindBy(name="surname")
    WebElement password;

    @FindBy(id="email")
    WebElement emailAddress;

    @FindBy(name="phone")
    WebElement phoneNumber;

    @FindBy(xpath="//button[@type='submit']")
    WebElement submitButton;


    public registrationPageObjectLocators() {
        PageFactory.initElements(driver, this);
    }

    public void clickRegistrationLink(){
        newRegistrationLink.click();
    }

    public void validateRegistrationFormLabel(){

        try {
            registrationFormLabel.isDisplayed();
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    public void enterValues(String inputValue, String inputField ){

        try {
            switch (inputField) {
                case "Name":
                    userName.sendKeys(inputValue);
                    break;
                case "Surname":
                    password.sendKeys(inputValue);
                    break;
                case "Email":
                    emailAddress.sendKeys(inputValue);
                    break;
                case "Phone":
                    phoneNumber.sendKeys(inputValue);
                    break;
            }
        } catch (Exception e) {
                e.printStackTrace();
        }
    }

    public void submit(){

        submitButton.click();
    }

    public  String returnErrorMessage() {
        return invalidEmailAddressErrorMessage.getText();
    }
}
