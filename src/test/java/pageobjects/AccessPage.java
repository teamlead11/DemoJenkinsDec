package pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import testpack.Hook;

public class AccessPage {

	public AccessPage() {

		PageFactory.initElements(Hook.driver, this);
	}

	@FindBy(xpath = "//section[@id='main']//table//tr[2]/td")
	private WebElement lbl_sucessMessage;

	public WebElement getLbl_sucessMessage() {
		return lbl_sucessMessage;
	}

}
