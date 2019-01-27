#Author: your.email@your.domain.com
@abcd
Feature: To Test Add customer feature

  @regression @abcd1
  Scenario: To test success message when the user clicks submit button1
    Given The user is in gurutelecom home page
    And The user navigates to add customer page
    When The user fill in the customer details
      | fname   | lname           | email           | adress  | phnum     |
      | test    | testlastname    | test@gmail.com  | chennai | 123456789 |
      | testone | testlastnameone | test1@gmail.com | chennai | 123456781 |
      | testtwo | testlastnametwo | test2@gmail.com | chennai | 123456782 |
    And The user clicks the submit button
    Then The user should see the sucess message

  @abcd2
  Scenario: To test success message when the user clicks submit button2
    Given The user is in gurutelecom home page
    And The user navigates to add customer page
    When The user fill in the customer details
      | fname   | lname           | email           | adress  | phnum     |
      | test    | testlastname    | test@gmail.com  | chennai | 123456789 |
      | testone | testlastnameone | test1@gmail.com | chennai | 123456781 |
      | testtwo | testlastnametwo | test2@gmail.com | chennai | 123456782 |
    And The user clicks the submit button
    Then The user should see the sucess message

  @abcd3
  Scenario: To test success message when the user clicks submit button3
    Given The user is in gurutelecom home page
    And The user navigates to add customer page
    When The user fill in the customer details
      | fname   | lname           | email           | adress  | phnum     |
      | test    | testlastname    | test@gmail.com  | chennai | 123456789 |
      | testone | testlastnameone | test1@gmail.com | chennai | 123456781 |
      | testtwo | testlastnametwo | test2@gmail.com | chennai | 123456782 |
    And The user clicks the submit button
    Then The user should see the sucess message
