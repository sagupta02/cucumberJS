import { element, by } from 'protractor'

class HomePage {
  constructor () {
    this.feedbackButton = element(by.css('div[aria-label="Usabilla Feedback Button"]'));
  }

  isFeedbackButtonDisplayed () {
    return this.feedbackButton.isDisplayed();
  }

  clickOnFeedbackButton() {
    return this.feedbackButton.click();
  }
}

export const homePage = new HomePage()
