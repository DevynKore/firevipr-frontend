import React from 'react';

const text = ({ 
  variant = 'primary', 
  size = 'md', 
})=> new describe(Text)

describe('Text', () => {
  it('should render the text in a span element by default', () => {
    render(<Text>Hello World!</Text>);

    expect(screen.getByText('Hello World!').nodeName).toBe('SPAN');
  });