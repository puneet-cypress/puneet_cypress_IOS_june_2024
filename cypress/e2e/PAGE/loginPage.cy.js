class LoginPage {
    constructor() {
        this.url = 'https://www.saucedemo.com/';
        this.userName = '#user-name';
        this.password = '#password';
        this.loginButton = '#login-button';
    }

    openUrl() {
        cy.visit(this.url);
    }

    enterUsername() {
        cy.get(this.userName).clear().type('standard_user');
    }

    enterPassword() {
        cy.get(this.password).clear().type('secret_sauce');
    }
    
    clickLogin() {
        cy.get(this.loginButton).click();
    }
}

module.exports = LoginPage;