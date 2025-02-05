import Quiz from "../../client/src/components/Quiz";

describe('Quiz e2e Test', () => {
  beforeEach(() => {
    cy.visit("/");
  });

  //Test 1 - Start the Quiz when the button is clicked
  it('should display the first question when the "start quiz" button is clicked', () => {
    //Arrange
    cy.mount(<Quiz />);
  
    //ACT
    cy.get('button').contains('Start Quiz').click();
  
    //Assert
    cy.get('h2').contains("Which is the correct answer?").should("be.visible");
  });

  //Test 2 - Display My Score When I finish the Quiz
  it('should display my score when i finish the quiz', () => {
    //Arrange
    cy.get('button').contains('Start Quiz').click();

    //ACT
    for(let i=0; i < 10; i++) {
        cy.get('button').contains('1').click();
    }

    //ASSERT
    cy.get(".alert-success").should("be.visible").and('contain', 'Your score');
  });
})