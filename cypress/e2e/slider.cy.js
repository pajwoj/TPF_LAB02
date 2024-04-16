describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe("ZADANIE 1 TEST", function() {
  it("Checks if the user can traverse through slides", function() {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'London');
    cy.get('.swiper-button-prev').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Rome');
  });
});

describe("ZADANIE 2 TEST", function() {
  it("Checks if the slides are correct", function() {
    cy.visit('http://localhost:3000');
    cy.get('.card-description').should('exist');
    cy.get('.swiper-slide-active').should('contain', 'Rome');
    cy.get('.swiper-slide-active').should('contain', 'Italy');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.card-description').should('exist');
    cy.get('.swiper-slide-active').should('contain', 'London');
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.card-description').should('exist');
    cy.get('.swiper-slide-active').should('contain', 'Paris');
    cy.get('.swiper-slide-active').should('contain', 'France');
  });
});

// describe("ZADANIE 3 TEST", function() {
//   it("Checks if the gallery is displayed correctly on different devices", function() {
    
//   });
// });

describe("ZADANIE 4 TEST", function() {
  it("Checks if all elements are working correctly", function() {
    cy.visit('http://localhost:3000');
    cy.get(".wrapper").should("be.visible");
    cy.get(".swiper-wrapper").children().should('have.length', 3);
    cy.wait(2000);
    cy.get(".swiper-button-next").should("be.visible").click();
    cy.wait(2000);
    cy.get(".swiper-button-prev").should("be.visible").click();
  });
});