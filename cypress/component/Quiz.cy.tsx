//import React from 'react'
import Quiz from '../../client/src/components/Quiz'

//Component Test 1 - simple rendering

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

  //success
  it('renders', () => {
    cy.mount(<Quiz />)
  })

  //success
  it('mounts and displays the "Start Quiz" button', () => {
    //Arrange
    cy.mount(<Quiz />);

    //Act

    //Assert
    cy.get('button').contains('Start Quiz').should("be.visible");
  });

  //success
  it('should display the first question when the "start quiz" button is clicked', () => {
    //Arrange
    cy.mount(<Quiz />);

    //ACT
    cy.get('button').contains('Start Quiz').click();

    //Assert
    cy.get('h2').should("be.visible");
  });

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






