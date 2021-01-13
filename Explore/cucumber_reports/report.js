$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/san.feature");
formatter.feature({
  "line": 2,
  "name": "Opentable Explore Validations",
  "description": "",
  "id": "opentable-explore-validations",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Opentable search positive scenarios",
  "description": "",
  "id": "opentable-explore-validations;opentable-search-positive-scenarios",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open chrome browser and enter url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter location  in search criteria",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on search button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "verify hotel for location",
  "keyword": "Then "
});
formatter.match({
  "location": "san_stepdefination.open_chrome_browser_and_enter_url()"
});
formatter.result({
  "duration": 33275076800,
  "status": "passed"
});
formatter.match({
  "location": "san_stepdefination.enter_location_in_search_criteria()"
});
formatter.result({
  "duration": 1138389500,
  "status": "passed"
});
formatter.match({
  "location": "san_stepdefination.click_on_search_button()"
});
formatter.result({
  "duration": 7859594500,
  "status": "passed"
});
formatter.match({
  "location": "san_stepdefination.Verify_hotel_for_location()"
});
formatter.result({
  "duration": 75642500,
  "status": "passed"
});
formatter.after({
  "duration": 299576300,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Opentable search1 positive scenarios",
  "description": "",
  "id": "opentable-explore-validations;opentable-search1-positive-scenarios",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Open chrome browser and enter url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Enter restaurant  in search criteria",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Click on search button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "verify restaurant for name",
  "keyword": "Then "
});
formatter.match({
  "location": "san_stepdefination.open_chrome_browser_and_enter_url()"
});
formatter.result({
  "duration": 24943075800,
  "status": "passed"
});
formatter.match({
  "location": "san_stepdefination.enter_restaurant_in_search_criteria()"
});
formatter.result({
  "duration": 1495639500,
  "status": "passed"
});
formatter.match({
  "location": "san_stepdefination.click_on_search_button()"
});
formatter.result({
  "duration": 9079457500,
  "status": "passed"
});
formatter.match({
  "location": "san_stepdefination.verify_restaurant_for_name()"
});
formatter.result({
  "duration": 73574000,
  "status": "passed"
});
formatter.after({
  "duration": 308262300,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Opentable search2 positive scenarios",
  "description": "",
  "id": "opentable-explore-validations;opentable-search2-positive-scenarios",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "Open chrome browser and enter url",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Enter cuisine in search criteria",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Click on search button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "verify cuisine",
  "keyword": "Then "
});
formatter.match({
  "location": "san_stepdefination.open_chrome_browser_and_enter_url()"
});
formatter.result({
  "duration": 16621847200,
  "status": "passed"
});
formatter.match({
  "location": "san_stepdefination.enter_cuisine_in_search_criteria()"
});
formatter.result({
  "duration": 1219395800,
  "status": "passed"
});
formatter.match({
  "location": "san_stepdefination.click_on_search_button()"
});
formatter.result({
  "duration": 2703962700,
  "status": "passed"
});
formatter.match({
  "location": "san_stepdefination.verify_cuisine()"
});
formatter.result({
  "duration": 83932400,
  "status": "passed"
});
formatter.after({
  "duration": 336540700,
  "status": "passed"
});
});