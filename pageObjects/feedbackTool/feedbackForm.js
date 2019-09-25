/* eslint-disable semi */
import { element } from 'protractor';

class FeedbackForm {
  constructor () {
    this.subjectDropdown = element(by.xpath('//h4[text()="Please select a subject"]/following-sibling::select'));
    this.commentInputField = element(by.xpath('//span[@class="conditional_forms"][contains(@style,"display: block")]//textarea'));
    this.emailField = element(by.xpath('//span[@class="conditional_forms"][contains(@style,"display: block")]//input'));
    this.submitButton = element(by.xpath('//button[text()="Submit"]'));
  }

  clickOnNpsScoreButton (number) {
    return element(by.xpath(`//div[@class='nps-score']//input[@value='${number}']`)).click();
  }

  selectWebsiteRating (emotion) {
    return element(by.xpath(`//input[@title='${emotion}']`)).click();
  }

  enterEmail (email) {
    return this.emailField.sendKeys(email);
  }

  enterComments (comments) {
    return this.commentInputField.sendKeys(comments);
  }
}

export const feedbackFormPage = new FeedbackForm()
