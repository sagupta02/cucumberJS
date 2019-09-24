exports.config = {
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../tests/e2e/features/*.feature'],
  onPrepare: function () {
    browser.manage().window().maximize(),
    require('babel-register')
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
