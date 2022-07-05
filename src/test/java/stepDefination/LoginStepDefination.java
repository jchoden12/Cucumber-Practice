package stepDefination;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import io.cucumber.java.en.*;
import pages.LoginPage;
import pages.TestBase;


public class LoginStepDefination extends TestBase {
	
	public static WebDriver driver;
	LoginPage loginPage;

	
	@Given("user is on Techfios website")
	public void user_is_on_Techfios_website() {
		initDriver();
	    
	}
	

	@When("user enters username as {string}")
	public void user_enters_username_as(String username) {
		
		loginPage = PageFactory.initElements(driver, LoginPage.class);

		loginPage.enterUserName(username);
	}

	@When("user enters password as {string}")
	public void user_enters_password_as(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

	@Then("user lands on Dashboard Page")
	public void user_lands_on_Dashboard_Page() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}


}
