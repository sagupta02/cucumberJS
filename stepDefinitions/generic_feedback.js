import { Given, When, Then } from 'cucumber'
import { expect } from 'chai'
import { homePage } from '../pageObjects/homePage'
import { browser } from 'protractor';
import {feedbackChoicePage} from '../pageObjects/feedbackTool/feedbackChoice'
import {feedbackFormPage} from '../pageObjects/feedbackTool/feedbackForm'
import {feedbackConfirmation} from '../pageObjects/feedbackTool/confirmation'

When('I click on Feedback Button', function () {
  homePage.clickOnFeedbackButton();  
})

When('I select Generic Feedback', function () {
  browser.switchTo().frame(feedbackChoicePage.frameElement);
  feedbackChoicePage.clickOnGenericFeedbackIcon();
})

When('I provide following details for {string}', function (table) {
  console.log(table.raw());
})

Then('I should be able to submit feedback', function () {
})
