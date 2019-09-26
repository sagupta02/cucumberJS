@smoke @regression
Feature: Generic Feedback
    As a user of Usabilla
    I should be able to submit a Generic Feedback via Feedback button

    Scenario: Submit Generic Feedback
        Given I am at Usabilla website homepage
        When I click on Feedback Button
        And I select Generic Feedback
        And I provide following details for "Compliment"
            | rating | comments | email | npsscore |
            | Like | Good job! Very easy to use tool | test@test.com| 8 |
        Then I should be able to submit feedback