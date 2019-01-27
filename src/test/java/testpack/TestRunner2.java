package testpack;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/feature", tags= {"@abcd"},glue = { "testpack" }, plugin = {
		"html:target" }, dryRun = false, monochrome = true)

public class TestRunner2 {

}
