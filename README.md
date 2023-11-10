[![Code Review](https://github.com/zalacop/social-media-client/actions/workflows/gpt.yml/badge.svg)](https://github.com/zalacop/social-media-client/actions/workflows/gpt.yml)
[![Automated Unit Testing](https://github.com/zalacop/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/zalacop/social-media-client/actions/workflows/unit-test.yml)
[![Automated E2E Testing](https://github.com/zalacop/social-media-client/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/zalacop/social-media-client/actions/workflows/e2e-test.yml)
[![Deploy static content to Pages](https://github.com/zalacop/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/zalacop/social-media-client/actions/workflows/pages.yml)

# Workflow CA

## Social Media Client

This is project for a school assignment. We forked a Social Media Client repository which was provided by Noroff. We were tasked with creating Unit Tests and End-to-End Tests for login and logout functions.

### Configurations

- Prettier,
- ESlint,
- Husky,
- Jest (unit-testing),
- Babel,
- Cypress (end-to-end-testing)

## Build with

This website is build with Bootstrap, SASS, JavaScript, Jest and Cypress.

## Getting started

1. Clone the repository.

```
git clone git@github.com:zalacop/social-media-client.git
```

2. Install NPM packages

```
npm install
```

3. Build SASS

```
npm run build
```

### Testing

1. Unit Testing: Jest

Jest tests are located in /src/js/api/auth/\*test.js
The Unit Tests are testing login and logout functions. The login test fetched and stores the user values in local storage. The logout test clears the local storage.

```
npm run test-unit
```

2. End-To-End Testing: Cypress

Cypress tests are located /cypress/e2e/
The End-To-End Tests are that the user can login and access their profile page, that the user cannot submit the login form with incorrect credentials or empty fields. And that the user can logout and with it clear the local storage.

```
npm run test-e2e-cli
```

3. Unit Testing & End-To-End Testing

```
npm run test
```
