#Author: your.email@your.domain.com
@test
Feature: To test add tariff plan feature

  @smoke
  Scenario Outline: Title of your scenario outline
    Given The user is in add tariff plan page
    When The user fill in the plan details "<monthRent>", "<freeLocMin>","<freeIntMin>","<freeSMS>","<locCharges>","<intCharges>","<SMSCharges>"
    And The user clicks the submit button in tariff plan
    Then The user should see the success message

    Examples: 
      | monthRent | freeLocMin | freeIntMin | freeSMS | locCharges | intCharges | SMSCharges |
      |       500 |        100 |        200 |     100 |        200 |        300 |        400 |
      |       600 |        100 |        200 |     100 |        200 |        300 |        400 |
