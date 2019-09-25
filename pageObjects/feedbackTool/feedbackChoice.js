/* eslint-disable semi */
import { element, browser, by } from 'protractor'

class FeedbackChoice {
  constructor () {
    this.specificFeedbackButton = element(by.css('div.choice_specific>div'));
    this.specificFeedbackLabel = element(by.css('div.choice_specific>h4'));
    this.genericFeedbackButton = element(by.css('div.choice_general>div'));
    this.genericicFeedbackLabel = element(by.css('div.choice_general>h4'));
    this.frameElement = element(by.css('[title="Usabilla Feedback Form Frame"]'));
  }

  clickOnSpecificFeedbackIcon () {
    browser.switchTo().frame(this.frameElement.getWebElement());
    this.specificFeedbackButton.click();
    return browser.switchTo().defaultContent();
  }

  clickOnGenericFeedbackIcon () {
    browser.switchTo().frame(this.frameElement);
    this.genericFeedbackButton.click();
    return browser.switchTo().defaultContent();
  }
}

export const feedbackChoicePage = new FeedbackChoice();
