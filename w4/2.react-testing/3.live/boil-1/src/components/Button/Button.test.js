import React from 'react'
import Button from './Button'
import {render,screen,fireEvent, cleanup} from "@testing-library/react"

it("should have a Button Component with label",()=>{

     render(<Button label={"Hello World"}/>)
     expect(screen.getByText("Hello World")).toBeInTheDocument()

})


it("should have a Button Component with testid",()=>{
     const {getByTestId}=render(<Button label={"Hello World"}/>)
    expect(getByTestId("Button")).toBeInTheDocument()
    expect(getByTestId("Button")).toHaveTextContent("Hello World")
})

it("should execute onClick function when clicked",()=>{
    let fn = jest.fn();
    const {getByTestId}=render(<Button label={"Hello World"} onClick={fn} />)
    fireEvent.click(getByTestId("Button"))
    expect(fn).toBeCalled();
})

afterEach(()=>{
    cleanup()
})