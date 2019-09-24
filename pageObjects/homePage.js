import { ElementFinder } from 'protractor'

class HomePage {
  constructor () {
    this.feedbackButton = $('div[aria-label="Usabilla Feedback Button"]')
  }

  getHomePageTitle () {
    return browser.getTitle()
  }

  isFeedbackButtonDisplayed () {
    return this.feedbackButton.isDisplayed()
  }
}

export const homePage = new HomePage()
