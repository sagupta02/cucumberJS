import { Given, Then } from 'cucumber'
import { browser } from 'protractor'

Given('I am at Usabilla website homepage', () => {
// browser.get('https://usabilla.com/');
  browser.get('https://www.google.com/')

  // return 'pending';
})

Then('I should see feedback button', () => {
  // Write code here that turns the phrase above into concrete actions
  return 'pending'
})
