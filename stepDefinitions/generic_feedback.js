import { Given, When, Then } from 'cucumber'

import {homePage} from '../pageObjects/homePage'
// import {globals} from '../utilities/assertionLib'
import {expect} from 'chai'

const expect = globals.expect;

Given('I am at Usabilla website', function (title) {
  return expect(homePage.getHomePageTitle()).to.equal(title);
  expect('s').to.eq
})

When('I click on Feedback Button', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending'
})

When('I select Generic Feedback', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending'
})

When('I provide valid data', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending'
})

Then('I should be able to submit feedback', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending'
})
