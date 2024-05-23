import { faker } from "@faker-js/faker";

describe("Submit the form after filling it correctly", () => {
  it("Fill form", () => {
    // Visit page and fill the form correctly
    cy.visit("https://practicesoftwaretesting.com/#/contact").wait(1000);
    cy.get("#first_name").type(faker.person.firstName());
    cy.get("#last_name").type(faker.person.lastName());
    cy.get("#email").type(faker.internet.email());
    cy.get("#subject").select("Customer service");
    cy.get("#message").type(
      "Testing form. Submitting a long message to avoid errors"
    );
    cy.get('[data-test="contact-submit"]').click().wait(1000);
    cy.get(".alert-success").should(
      "contain.text",
      "Thanks for your message! We will contact you shortly"
    );
  });
});

describe("Test form should flag errors when incomplete", () => {
  it("Fill partially the form", () => {
    // Visit page and fill the form correctly
    cy.visit("https://practicesoftwaretesting.com/#/contact").wait(1000);
    cy.get("#first_name").type(faker.person.firstName());
    cy.get("#last_name").type(faker.person.lastName());
    cy.get("#email").type(faker.internet.email());
    cy.get('[data-test="contact-submit"]').click().wait(1000);
    cy.get(".alert-danger").should("be.visible");
  });
});

describe("Test form should flag error in email format", () => {
  it("Fill the email with incorrect format", () => {
    // Visit page and fill the form correctly
    cy.visit("https://practicesoftwaretesting.com/#/contact").wait(1000);
    cy.get("#email").type(faker.person.firstName());
    cy.get('[data-test="contact-submit"]').click().wait(1000);
    cy.get(".alert-danger")
      .should("be.visible")
      .should("contain.text", "Email format is invalid");
  });
});
