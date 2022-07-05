Feature: Login Functionality validation
@Scenario1
Scenario:Verify Login Page
Given user is on Techfios website
When user enters username as "demo@Techfios.com"
And user enters password as "abc123"
Then user lands on Dashboard Page
