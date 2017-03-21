// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  idleSecs: 1000,
  questionsUrl: 'assets/data/questions.json',
  photosUrl: 'assets/data/photos.json',
  photosPath: 'assets/photos',
  i18nUrl: '/assets/i18n',
  langs: ['ca', 'es', 'en', 'eu', 'fr', 'it'],
  mainLang: 'ca',
  apiUrl: 'http://utopiaphotomarket.com/poll'
};
