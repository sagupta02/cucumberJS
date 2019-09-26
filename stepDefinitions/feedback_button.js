/* eslint-disable semi */
import { Given, Then } from 'cucumber'
import { browser } from 'protractor'
import { expect } from 'chai'
import {homePage} from '../pageObjects/homePage'

Given('I am at Usabilla website homepage', async function () {
  browser.get('https://usabilla.com/');
  
  await homePage.acceptCookiesAndClosePopup();

  expect(await browser.getTitle()).to.equal('Usabilla | Build Future-Proof Customer Experiences');
});

Then('I should see feedback button', async function () {
  expect(await homePage.isFeedbackButtonDisplayed()).to.be.true;
});
