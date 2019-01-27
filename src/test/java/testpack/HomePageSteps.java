package testpack;

import org.openqa.selenium.By;

import cucumber.api.java.en.Given;
import pageobjects.HomePage;

public class HomePageSteps {

	@Given("The user is in gurutelecom home page")
	public void the_user_is_in_gurutelecom_home_page() {

		Hook.driver.get("http://demo.guru99.com/telecom");
	}

	@Given("The user navigates to add customer page")
	public void somename() {
		HomePage home = new HomePage();
		home.getLnk_addCustomer().click();
	}
}
