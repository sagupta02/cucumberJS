@smoke @regression
Feature: Specific Feedback
    As a user of Usabilla
    I should be able to submit a Specific Feedback via Feedback button

    Scenario: Submit Generic Feedback
        Given I am at Usabilla website
        When I click on Feedback Button
        And I select Specific Feedback
        And I select area
        And I provide valid data
        Then I should be able to submit feedback