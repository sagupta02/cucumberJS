exports.config = {
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../tests/e2e/features/feedback_button.feature'],
  onPrepare: function () {
    browser.ignoreSynchronization = true
    browser.manage().window().maximize()
    require('babel-register')
  },
  cucumberOpts: {
    strict: true,
    require: [
      '../stepDefinitions/*.js',
    '../utilities/reporter.js'],
    tags: false,
    format: ['json:cucumberreport.json'],
    // '../cucumberJS_Demo/utilities/reporter.js'],
    profile: false,
    'no-source': true
  }
}
