import React from 'react'
import Quiz from '../../client/src/components/Quiz'

//Component Test 1 - simple rendering

describe('<Quiz />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Quiz />)
  })
})

//Component Test 2 

// describe('<Quiz />', () => {
//   beforeEach(() => {
//     cy.intercept('GET')
//   })

// }

