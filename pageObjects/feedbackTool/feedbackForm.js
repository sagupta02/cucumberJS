/* eslint-disable semi */
import { browser, element, by } from 'protractor';
import { ExpectedConditions as EC} from 'protractor'

class FeedbackForm {
  constructor () {
    this.subjectDropdown = element(by.xpath('//h4[text()="Please select a subject"]/following-sibling::select'));
    this.submitButton = element(by.xpath('//button[text()="Submit"]'));
  }

  async selectWebsiteRating (emotion) {
    return element(by.xpath(`//input[@title='${emotion}']/following-sibling::label`)).click();
  }

  selectSubject (subjectName) {
    return this.subjectDropdown.element(by.cssContainingText('option', subjectName)).click();
  }

  setNpsScore (subjectName, number) {
    return element(by.xpath(`//span[@data-condition='${subjectName.toLowerCase()}']//input[@value='${number}']`)).click();
  }

  setEmail (subjectName, email) {
    return element(by.xpath(`//*[@aria-labelledby="email-input-${subjectName.toLowerCase()}"]`)).sendKeys(email);
  }

  setComments (subjectName, comments) {
    return element(by.xpath(`//*[@aria-labelledby="comment-input-${subjectName.toLowerCase()}"]`)).sendKeys(comments);
  }

  clickOnSubmitButton () {
    browser.wait(EC.visibilityOf(this.submitButton), 5000);
    return this.submitButton.click();
  }
}

export const feedbackFormPage = new FeedbackForm()
