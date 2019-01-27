package testpack;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import pageobjects.AddCustomerPage;

public class AddCustomerSteps {

	@When("The user fill in the customer details")
	public void the_user_fill_in_the_customer_details(DataTable customerDetails) {
		AddCustomerPage addcust = new AddCustomerPage();
		List<Map<String, String>> customerDetailsMaps = customerDetails.asMaps(String.class, String.class);
		addcust.getRdo_done().click();
		addcust.getTxt_fname().sendKeys(customerDetailsMaps.get(2).get("fname"));
		addcust.getTxt_lname().sendKeys(customerDetailsMaps.get(1).get("lname"));
		addcust.getTxt_email().sendKeys(customerDetailsMaps.get(0).get("email"));
		addcust.getTxt_adress().sendKeys(customerDetailsMaps.get(1).get("adress"));
		addcust.getTxt_phnum().sendKeys(customerDetailsMaps.get(1).get("phnum"));

	}

	@When("The user clicks the submit button")
	public void the_user_clicks_the_submit_button() {
		AddCustomerPage addcust = new AddCustomerPage();
		addcust.getBtn_submit().click();
	}

}
