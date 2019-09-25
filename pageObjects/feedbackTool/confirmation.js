/* eslint-disable semi */
import { element, by } from 'protractor'

class FeedbackConfirmation {
  constructor () {
    this.confirmationTextLocator = element(by.cssContainingText('Thanks for leaving feedback!'));
    this.continueLink = element(by.css('a.continue'));
    this.closePopUpLink = element(by.css('a.close'));
    this.requestDemoLink = element(by.cssContainingText('Request a demo'));
  }

  isConfirmationTextDisplayed () {
    return this.confirmationTextLocator.isDisplayed()
  }

  isRequestDemoLinkDisplayed () {
    return this.requestDemoLink.isDisplayed()
  }

  isContinueBrowseLinkDisplayed () {
    return this.continueLink.isDisplayed()
  }

  isClosePopupDisplayed () {
    return this.closePopUpLink.isDisplayed()
  }
}

export const feedbackConfirmation = new FeedbackConfirmation()
