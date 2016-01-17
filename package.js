// package metadata file for Meteor.js
var packageName = 'plraphael:angular-ui-clock';
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '0.5.0';
var summary = 'An angular.js directive for clock svg widgets - reactive, responsive, beautiful.';
var gitLink = 'git://github.com/deepu105/angular-clock.git';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
  name: packageName,
  version: version,
  summary: summary,
  git: gitLink,
  documentation: documentationFile
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']); // Meteor versions

  api.use('angular:angular@1.2.0', where); // Dependencies

  api.addFiles('dist/angular-clock.js', where); // Files in use
  api.addFiles('dist/angular-clock.css', where); // Files in use
});   