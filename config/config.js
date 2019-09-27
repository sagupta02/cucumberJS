exports.config = {
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  /* multiCapabilities: [
    {
      browserName: 'chrome',
      shardTestFiles: true,
      maxInstances: 2
    },
    {
      browserName: 'firefox',
      shardTestFiles: true,
      maxInstances: 2
    }
  ],*/
  capabilities: {
    browserName: 'chrome'
  },
  specs: ['../tests/e2e/features/*.feature'],
  onPrepare: function () {
    browser.waitForAngularEnabled(false);
    browser.manage().timeouts().pageLoadTimeout(40000);
    browser.manage().timeouts().implicitlyWait(25000);
    browser.manage().window().maximize();
    require('babel-register');
  },
  cucumberOpts: {
    strict: true,
    require: [
      '../stepDefinitions/*.js',
      '../utilities/reporter.js',
      '../utilities/timeout.js'],
    tags: false,
    format: ['json:cucumberreport.json'],
    profile: false,
    'no-source': true
  }
}
