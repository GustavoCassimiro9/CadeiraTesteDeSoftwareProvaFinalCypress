describe("Opovo", () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });

    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit("/")
    })

    it("Realizar busca", ()=>{
        cy.realizarBuscas("UFC");
        cy.get('.caixa-listagem')
          .eq(0)
          .should('contain', 'UFC');
        cy.get('.caixa-listagem')
          .eq(1)
          .should('contain', 'UFC'); 
    })

    it("Aplicar Filtro no resultado da busca", ()=>{
        cy.realizarBuscasFiltro();
        cy.get('.caixa-listagem')
          .eq(0)
          .should('contain', 'UFC');
    })

    it("Visitar página de um dos cadernos de Esportes", ()=>{
        cy.visitandoFutebol();
        cy.get('body').should('contain', 'Fique por dentro de todas as notícias sobre o futebol brasileiro');
    })

    it("Consultar autor(a) da última notícia de Carnaval", ()=>{
        cy.realizarBuscas("Carnaval");
        cy.get('.caixa-listagem')
          .eq(0)
          .should('be.exist')
          .click();
        cy.get('body').should('contain', 'Lucas Barbosa');
    })
})