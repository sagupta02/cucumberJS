import { element, by, ExpectedConditions, browser } from 'protractor'

class HomePage {
  constructor () {
    this.feedbackButton = element(by.css('div[aria-label="Usabilla Feedback Button"]'));
    this.acceptCookiesButton = element(by.css('a.optanon-allow-all'));
  }

  isFeedbackButtonDisplayed () {
    return this.feedbackButton.isDisplayed();
  }

  clickOnFeedbackButton () {
    return this.feedbackButton.click();
  }

  _isCookiesPopUpDisplayed () {
    return this.acceptCookiesButton.isDisplayed();
  }

  _clickOnAcceptCookiesButton () {
    browser.wait(ExpectedConditions.visibilityOf(this.acceptCookiesButton), 5000);
    return this.acceptCookiesButton.click();
  }

  async acceptCookiesAndClosePopup () {
    // if(await this._isCookiesPopUpDisplayed())
      return await this._clickOnAcceptCookiesButton();
  }
}

export const homePage = new HomePage()
