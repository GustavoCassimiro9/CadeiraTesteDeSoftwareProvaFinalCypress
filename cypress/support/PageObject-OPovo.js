Cypress.Commands.add('realizarBuscas', (busca)=>{
    cy.intercept('https://www.opovo.com.br/busca/').as('BuscaIcone')
    cy.get('#menu a[class="icon-busca d-flex"]').click()
    cy.wait('@BuscaIcone')
    cy.get('#busca').type(busca)
    cy.get('div[class="pesquisa-input-button"] button[value="buscar"]').click()  
})

Cypress.Commands.add('realizarBuscasFiltro', ()=>{
    cy.intercept('https://www.opovo.com.br/busca/').as('BuscaIcone')
    cy.get('#menu a[class="icon-busca d-flex"]').click()
    cy.wait('@BuscaIcone')
    cy.get('#busca').type("UFC")
    cy.get('div[class="filtros-buscas"] div[class="select"]').click()
    cy.get('ul[class="options"] li[rel="last_week"]').click()
})


Cypress.Commands.add('visitandoFutebol', ()=>{
    cy.get('#item-esportes').trigger('mouseover'); 
    cy.contains("Futebol").eq(0).click()
})

Cypress.Commands.add('consultandoCarnaval', ()=>{
    cy.get('#item-esportes').trigger('mouseover'); 
    cy.contains("Futebol").eq(0).click()
})