Feature: Login
  In order to edit site
  As a site administrator
  I want to log in

  Scenario : Login with valid credentials
    Given I have opened test page
    And I login
    Then I should see test page

  Scenario: Example AEM BDD scenario
    Given I have opened test page
    And I login
    And I should see test page
    Then the title component text should match "Discover the Finest Gear"

  Scenario: Creation of Page
    Given Create "Hero Page" page under "We.Retail/us"
    And set "Title" and "Name"
    And validate if Page is created with Title and Name

