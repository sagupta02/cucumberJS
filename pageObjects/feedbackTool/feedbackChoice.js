/* eslint-disable semi */
import { element, by } from 'protractor'

class FeedbackChoice {
  constructor () {
    this.specificFeedbackButton = element(by.css('div.choice_specific>div'));
    this.specificFeedbackLabel = element(by.css('div.choice_specific>h4'));
    this.genericFeedbackButton = element(by.css('div.choice_general'));
    this.genericicFeedbackLabel = element(by.css('div.choice_general>h4'));
    this.frameElement = element(by.xpath('//iframe[@title="Usabilla Feedback Form Frame"]'));
  }

  clickOnSpecificFeedbackIcon () {
    return this.specificFeedbackButton.click();
  }

  clickOnGenericFeedbackIcon () {
    return this.genericFeedbackButton.click();
  }
}

export const feedbackChoicePage = new FeedbackChoice();
