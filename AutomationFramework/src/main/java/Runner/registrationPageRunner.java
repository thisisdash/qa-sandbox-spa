package Runner;

import org.junit.runner.RunWith;



import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/main/java/Feature/registrationPage.feature",
        glue= {"StepDefinition.registrationPage"},
        plugin = {"pretty","html:test-output"},
        monochrome = true
)

public class registrationPageRunner {
}
