// Login - username: standard_user, password: secret_sauce
// <reference types="cypress" />
import LoginPage from "../PAGE/loginPage.cy.js";

// Path: /Users/puneetaneja/Documents/cypress_test_sauce_lab/cypress/e2e/PAGE/loginPage.cy.js

const sauceLogin = new LoginPage();

describe('Login page', () => {
    it('should display the login page and login', () => {
        sauceLogin.openUrl();
        sauceLogin.enterUsername();
        sauceLogin.enterPassword();
        sauceLogin.clickLogin();
    });
});
