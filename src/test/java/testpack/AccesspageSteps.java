package testpack;

import org.junit.Assert;

import cucumber.api.java.en.Then;
import pageobjects.AccessPage;

public class AccesspageSteps {

	@Then("The user should see the sucess message")
	public void the_user_should_see_the_sucess_message() {
		AccessPage access = new AccessPage();
		Assert.assertEquals("Please Note Down Your CustomerID", access.getLbl_sucessMessage().getText());
	}

}
