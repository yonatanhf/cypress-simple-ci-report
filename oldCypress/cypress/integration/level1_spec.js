

Cypress.Commands.add("getBySel", (selector, ...args) => {
    return cy.get(`[data-test=${selector}]`, ...args);
  });


describe("Level-1 challenge", ()=>{
    beforeEach(() => {
        cy.visit('http://localhost:3000');
      })
       
        it('Shows DHIS2 login', () => {
        console.log('login screen');
        cy.get("[data-test='dhis2-uicore-card']").should('be.visible');
    });
    it('Shows  DHIS2 header bar', () => {
        const dhis_Instance='http://localhost:9999';
        const username = 'admin';
        const password = 'district';
        cy.get('input[name="server"')
        .type(dhis_Instance);
        cy.get('input[name="j_username"]')
        .type(username);
        cy.get('input[name="j_password"]')
        .type(password);
        cy.get("[data-test='dhis2-adapter-loginsubmit']").click();
    });

    it('Shows Hello World', ()=>{
        console.log('hello world')
    })
});


