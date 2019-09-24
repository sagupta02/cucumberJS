var reporter = require('cucumber-html-reporter')

var options = {
  theme: 'bootstrap',
  jsonFile: './cucumberreport.json',
  output: './reports/reports.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    'App Version': '0.3.2',
    'Test Environment': 'PRODUCTION',
    Browser: 'Chrome  77.0.2840.98',
    Platform: 'Windows 10 & MacOS',
    Parallel: 'Scenarios',
    Executed: 'Remote'
  }
}

reporter.generate(options)
