$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/AddCustomer.feature");
formatter.feature({
  "name": "To Test Add customer feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@abcd"
    }
  ]
});
formatter.scenario({
  "name": "To test success message when the user clicks submit button1",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@abcd"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@abcd1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in gurutelecom home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_gurutelecom_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user navigates to add customer page",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.somename()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fill in the customer details",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "email",
        "adress",
        "phnum"
      ]
    },
    {
      "cells": [
        "test",
        "testlastname",
        "test@gmail.com",
        "chennai",
        "123456789"
      ]
    },
    {
      "cells": [
        "testone",
        "testlastnameone",
        "test1@gmail.com",
        "chennai",
        "123456781"
      ]
    },
    {
      "cells": [
        "testtwo",
        "testlastnametwo",
        "test2@gmail.com",
        "chennai",
        "123456782"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_fill_in_the_customer_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the sucess message",
  "keyword": "Then "
});
formatter.match({
  "location": "AccesspageSteps.the_user_should_see_the_sucess_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To test success message when the user clicks submit button2",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@abcd"
    },
    {
      "name": "@abcd2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in gurutelecom home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_gurutelecom_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user navigates to add customer page",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.somename()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fill in the customer details",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "email",
        "adress",
        "phnum"
      ]
    },
    {
      "cells": [
        "test",
        "testlastname",
        "test@gmail.com",
        "chennai",
        "123456789"
      ]
    },
    {
      "cells": [
        "testone",
        "testlastnameone",
        "test1@gmail.com",
        "chennai",
        "123456781"
      ]
    },
    {
      "cells": [
        "testtwo",
        "testlastnametwo",
        "test2@gmail.com",
        "chennai",
        "123456782"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_fill_in_the_customer_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the sucess message",
  "keyword": "Then "
});
formatter.match({
  "location": "AccesspageSteps.the_user_should_see_the_sucess_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To test success message when the user clicks submit button3",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@abcd"
    },
    {
      "name": "@abcd3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in gurutelecom home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_gurutelecom_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user navigates to add customer page",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.somename()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fill in the customer details",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "email",
        "adress",
        "phnum"
      ]
    },
    {
      "cells": [
        "test",
        "testlastname",
        "test@gmail.com",
        "chennai",
        "123456789"
      ]
    },
    {
      "cells": [
        "testone",
        "testlastnameone",
        "test1@gmail.com",
        "chennai",
        "123456781"
      ]
    },
    {
      "cells": [
        "testtwo",
        "testlastnametwo",
        "test2@gmail.com",
        "chennai",
        "123456782"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_fill_in_the_customer_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the sucess message",
  "keyword": "Then "
});
formatter.match({
  "location": "AccesspageSteps.the_user_should_see_the_sucess_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});