exports.config = {
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  selenciumAddress: 'http://localhost:4444/wd/hub',
  // directConnect: true,
  specs: ['../tests/e2e/features/generic_feedback.feature'],
  onPrepare: function () {
    browser.waitForAngularEnabled(false);
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().pageLoadTimeout(40000);
    browser.manage().timeouts().implicitlyWait(25000);
    browser.manage().window().maximize();
    require('babel-register');
  },
  cucumberOpts: {
    strict: true,
    require: [
      '../stepDefinitions/*.js',
      '../utilities/reporter.js'],
    tags: false,
    format: ['json:cucumberreport.json'],
    profile: false,
    'no-source': true
  }
}
