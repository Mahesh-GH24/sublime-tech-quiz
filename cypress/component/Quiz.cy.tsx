//import React from 'react'
import Quiz from '../../client/src/components/Quiz'

describe('<Quiz />', () => {


  //Component Test 2 - Intercept using the questions from fixtures - questions.json


  beforeEach(() => {
    cy.intercept({
      method: "GET",
      url: "/api/questions/random"
    },
      {
        fixture: 'questions.json',
        statusCode: 200
      })
  });

  //Component Test 1 - simple rendering
  //success
  it('renders', () => {
    cy.mount(<Quiz />)
  })

  //Component Test 2 - mounts and displays the "Start Quiz" button
  //success
  it('mounts and displays the "Start Quiz" button', () => {
    //Arrange
    cy.mount(<Quiz />);

    //Act

    //Assert
    cy.get('button').contains('Start Quiz').should("be.visible");
  });

  //Component Test 3 - should display the first question when the "start quiz" button is clicked
  //success
  it('should display the first question when the "start quiz" button is clicked', () => {
    //Arrange
    cy.mount(<Quiz />);

    //ACT
    cy.get('button').contains('Start Quiz').click();

    //Assert
    cy.get('h2').should("be.visible");
  });

  //Component Test 4 - should display four choices for the first question from the fixtures-questions.json
  //success
  it('should display four choices for the first question when the "start quiz" button is clicked', () => {

    //Arrange
    cy.mount(<Quiz />);

    //ACT
    cy.get('button').contains('Start Quiz').click();

    //Assert
    cy.get('.alert').contains("Correct").should("be.visible");
    cy.get('.alert').contains("Absolutely InCorrect").should("be.visible");
    cy.get('.alert').contains("Nope").should("be.visible");
    cy.get('.alert').contains("Still No").should("be.visible");

  });
});






