import React from 'react'
import Quiz from '../../client/src/components/Quiz'

//Component Test 1 - simple rendering

describe('<Quiz />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Quiz />)
  })
})

//Component Test 2 - Intercept using the questions from fixtures - questions.json

describe('<Quiz />', () => {
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
});

it('renders', () => {
  cy.mount(<Quiz />)
})

it('mounts and displays the "Start Quiz" button', () => {
  //Arrange
  cy.mount(<Quiz />);

  //Act

  //Assert
  cy.get('button').contains('Start Quiz').should("be.visible");
});

it('should display the first question when the "start quiz" button is clicked', () => {
  //Arrange
  cy.mount(<Quiz />);

  //ACT
  cy.get('button').contains('Start Quiz').click();

  //Assert
  cy.get('h2').contains("Which is the correct answer?").should("be.visible");
});

it('should display four choices for the first question when the "start quiz" button is clicked', () => {
  
  //Arrange
  cy.mount(<Quiz />);

  //ACT
  cy.get('button').contains('Start Quiz').click();

  //Assert
  cy.get('alert').contains("Correct").should("be.visible");
  cy.get('alert').contains("Absolutely InCorrect").should("be.visible");
  cy.get('alert').contains("Nope").should("be.visible");
  cy.get('alert').contains("Still No").should("be.visible");




});







