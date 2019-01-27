package misc;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Pagenation {
	static WebDriver driver;

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.setProperty("webdriver.chrome.driver", "D:\\chromedriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.google.co.in/");
		driver.findElement(By.name("q")).sendKeys("selenium", Keys.ENTER);
		goToPageNew("6");
	}

	public static void goToPage(String pageNum) {
		List<WebElement> pageEle = driver.findElements(By.xpath("//table[@id='nav']//td"));
		for (int i = 1; i < pageEle.size(); i++) {
			if (pageEle.get(i).getText().equals(pageNum)) {
				pageEle.get(i).click();
				break;
			}
		}
	}

	public static void goToPageNew(String pageNum) {
		String locator = "//a[@aria-label='Page x']";
		locator = locator.replace("x", pageNum);
		driver.findElement(By.xpath(locator)).click();
	}

}
