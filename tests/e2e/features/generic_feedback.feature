@smoke @regression
Feature: Generic Feedback
    As a user of Usabilla
    I should be able to submit a Generic Feedback via Feedback button

    Scenario: Submit Generic Feedback
        Given I am at Usabilla website
        When I click on Feedback Button
        And I select Generic Feedback
        And I provide valid data
        Then I should be able to submit feedback