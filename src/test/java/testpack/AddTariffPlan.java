package testpack;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AddTariffPlan {
	static WebDriver driver;

	@Given("The user is in add tariff plan page")
	public void the_user_is_in_add_tariff_plan_page() {

		System.setProperty("webdriver.chrome.driver", "D:\\chromedriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/addtariffplans.php");
	}

	@When("The user fill in the plan details {string}, {string},{string},{string},{string},{string},{string}")
	public void the_user_fill_in_the_plan_details(String monthRental, String freeLocMin, String freeIntMin,
			String freeSMS, String locCharges, String intCharges, String SMSCharges) {

		driver.findElement(By.id("rental1")).sendKeys(monthRental);
		driver.findElement(By.id("local_minutes")).sendKeys(freeLocMin);
		driver.findElement(By.id("inter_minutes")).sendKeys(freeIntMin);
		driver.findElement(By.id("sms_pack")).sendKeys(freeSMS);
		driver.findElement(By.id("minutes_charges")).sendKeys(locCharges);
		driver.findElement(By.id("inter_charges")).sendKeys(intCharges);
		driver.findElement(By.id("sms_charges")).sendKeys(SMSCharges);

	}

	@When("The user clicks the submit button in tariff plan")
	public void the_user_clicks_the_submit_button_in_tariff_plan() {
		driver.findElement(By.name("submit")).click();
	}

	@Then("The user should see the success message")
	public void the_user_should_see_the_success_message() {
		// Write code here that turns the phrase above into concrete actions

		String actual = driver.findElement(By.xpath("//section[@id='main']//h2")).getText();
		Assert.assertEquals("Congratulation you add Tariff Plan", actual);

	}

}
