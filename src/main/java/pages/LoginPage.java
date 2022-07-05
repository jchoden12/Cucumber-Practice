package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage {
	
	WebDriver driver;
	  
	public LoginPage(WebDriver driver) {
		driver = this.driver;
	
	}
	
	//Elements	
	
	@FindBy(how = How.XPATH, using = "//input[@id='username']")
	WebElement UserName;

	public void enterUserName(String username) {
				
		UserName.sendKeys(username);
		
	}
	
}
