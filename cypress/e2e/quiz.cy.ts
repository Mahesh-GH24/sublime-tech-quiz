
describe('Quiz e2e Test', () => {
  beforeEach(() => {
    cy.visit("/");
  });

  //Test 1 - Start Quiz button should be visible when the program is launched
  it('should display the Start Quiz button when the program is launched', () => {
    //Arrange
      
    //ACT
      
    //Assert
    cy.get('button').contains('Start Quiz').should("be.visible");
  });



  //Test 2 - Start the Quiz when the button is clicked
  it('should display the first question when the "start quiz" button is clicked', () => {
    //Arrange
      
    //ACT
    cy.get('button').contains('Start Quiz').click();
  
    //Assert
    cy.get('h2').should("be.visible");
  });

  //Test 3 - Display My Score When I loop thru all the questions and finish the Quiz
  it('should display my score when i loop thru all the questions and finish the quiz', () => {
    //Arrange
    cy.get('button').contains('Start Quiz').click();

    //ACT
    for(let i=0; i < 10; i++) {
        cy.get('button').contains('1').click();
    }

    //ASSERT
    cy.get(".alert-success").should("be.visible").and('contain', 'Your score');
  });

  //Test 4 - If I click Take New Quiz Again, it should Start the Quiz Again
  // it('should display the first question when the "start quiz" button is clicked', () => {
  //   //Arrange
      
  //   //ACT
  //   cy.get('button').contains('Start Quiz').click();
  
  //   //Assert
  //   cy.get('h2').should("be.visible");
  // });

})