Package.describe({
  name: 'idrism:accounts-coinbase',
  version: '0.1.1',
  // Brief, one-line summary of the package.
  summary: 'Coinbase OAuth flow',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/idris/meteor-accounts-coinbase',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');

  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('idrism:coinbase@0.1.1', ['client', 'server']);

  api.addFiles('coinbase_login_button.css', ['client']);

  api.addFiles('coinbase.js');
});
