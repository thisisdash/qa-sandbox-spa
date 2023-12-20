package StepDefinition;

import Base.testBase;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import Pages.registrationPageObjectLocators;



public class registrationPage extends testBase {

    registrationPageObjectLocators pageLocators = new registrationPageObjectLocators();

    @Given("^user clicks on New registration$")
    public void user_clicks_on_New_registration(){

        initialization();
        pageLocators.clickRegistrationLink();
    }

    @When("^registration form is visible$")
    public void registration_form_is_visible(){
       pageLocators.validateRegistrationFormLabel();
    }

    @Then("^user enters value '(.*)' for the different fields '(.*)' if required '(.*)'$")
    public void user_enters_value_for_the_different_fields_Name_if_required(String value, String fields, String isFieldMandatory){

        if (isFieldMandatory.equalsIgnoreCase("Y")) {
            pageLocators.enterValues(value, fields);
        }

    }

    @Then("^clicks on submit$")
    public void clicks_on_submit(){

        pageLocators.submit();

    }

    @Then("^user enters value '(.*)' for fields '(.*)'$")
    public void user_enters_value_fields_except_one(String value, String fields){
        pageLocators.enterValues(value, fields);
    }

    @Then("^user should see an error message$")
    public void user_should_see_a_message(){
        String actualErrorMessage = pageLocators.returnErrorMessage();
        Assert.assertEquals(actualErrorMessage,"Invalid email address");

    }

}
