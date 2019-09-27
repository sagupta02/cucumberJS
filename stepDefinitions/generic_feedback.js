import { browser, ExpectedConditions } from 'protractor';
import { Given, When, Then } from 'cucumber'
import { expect } from 'chai'

import { homePage } from '../pageObjects/homePage'
import {feedbackChoicePage} from '../pageObjects/feedbackTool/feedbackChoice'
import {feedbackFormPage} from '../pageObjects/feedbackTool/feedbackForm'
import {feedbackConfirmation} from '../pageObjects/feedbackTool/confirmation'

When('I click on Feedback Button', async function () {
  await homePage.clickOnFeedbackButton();
})

When('I select Generic Feedback', async function () {
  await browser.wait(ExpectedConditions.presenceOf(feedbackChoicePage.frameElement), 10000);
  await browser.switchTo().frame(3);
  await feedbackChoicePage.clickOnGenericFeedbackIcon();
})

When('I provide following details for {string}', async function (name, table) {
  const data = table.rows();

  await browser.switchTo().frame(3);
  await feedbackFormPage.selectWebsiteRating(data[0][0]);
  await feedbackFormPage.selectSubject(name);
  await feedbackFormPage.setComments(name, data[0][1]);
  await feedbackFormPage.setEmail(name, data[0][2]);
  //return await feedbackFormPage.setNpsScore(data[0][3]);
})

Then('I should be able to submit feedback', async function () {
  await feedbackFormPage.clickOnSubmitButton();
  expect(await feedbackConfirmation.isConfirmationTextDisplayed()).to.be.true;
})
