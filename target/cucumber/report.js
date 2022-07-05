$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/TechfiosLogin.feature");
formatter.feature({
  "name": "Login Functionality validation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify Login Page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "name": "user is on Techfios website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_Techfios_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username as \"demo@Techfios.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefination.user_enters_username_as(String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.sendKeys(Unknown Source)\r\n\tat pages.LoginPage.enterUserName(LoginPage.java:24)\r\n\tat stepDefination.LoginStepDefination.user_enters_username_as(LoginStepDefination.java:29)\r\n\tat ✽.user enters username as \"demo@Techfios.com\"(classpath:features/TechfiosLogin.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters password as \"abc123\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefination.user_enters_password_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user lands on Dashboard Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_lands_on_Dashboard_Page()"
});
formatter.result({
  "status": "skipped"
});
});