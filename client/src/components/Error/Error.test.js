import { render } from "@testing-library/react"
import Error from "./Error"
import React from 'react';


test('Testing the test', () => {
  expect(true).toBeTruthy()
})

  describe('<Error />', () => {
    it('renders the Error component', () => {
      
  
      // eslint-disable-next-line react/react-in-jsx-scope
      const component = render(<Error  />)
  
      expect(component).toBeTruthy()
    })
  })