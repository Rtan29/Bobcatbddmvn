$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login_to_aem.feature");
formatter.feature({
  "name": "Login",
  "description": "  In order to edit site\n  As a site administrator\n  I want to log in\n\n  Scenario : Login with valid credentials\n    Given I have opened test page\n    And I login\n    Then I should see test page",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Example AEM BDD scenario",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I have opened test page",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthorizationSteps.I_have_opened_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login",
  "keyword": "And "
});
formatter.match({
  "location": "AuthorizationSteps.I_press_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see test page",
  "keyword": "And "
});
formatter.match({
  "location": "AuthorizationSteps.I_should_see_welcome_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title component text should match \"Discover the Finest Gear\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthorizationSteps.The_title_component_html_should_match(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Creation of Page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Create \"Hero Page\" page under \"We.Retail/us\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "set \"Title\" and \"Name\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "validate if Page is created with Title and Name",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
});