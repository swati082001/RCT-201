import React from 'react'
import Counter from "./Counter"
import {render,screen,fireEvent, cleanup} from "@testing-library/react"

it("should render the component",()=>{
    render(<Counter />)
    expect(screen.getByText("Counter")).toBeInTheDocument();
    expect(screen.getByTestId("count-value")).toBeInTheDocument()
    expect(screen.getByTestId("minus-button")).toBeInTheDocument()
    expect(screen.getByTestId("plus-button")).toBeInTheDocument()
     
    expect(screen.getByTestId("count-value")).toHaveTextContent(0);
})

it("should increment count value when clicked on increment button",()=>{
    render(<Counter />)
    fireEvent.click(screen.getByTestId("plus-button"));
    expect(screen.getByTestId("count-value")).toHaveTextContent(1);
})



afterEach(()=>{
    cleanup()
})