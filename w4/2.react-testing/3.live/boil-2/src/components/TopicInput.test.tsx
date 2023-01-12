import { render,screen,fireEvent } from '@testing-library/react'
import React from 'react'
import TopicInput from './TopicInput'
import { TopicType } from '../constants'
 
it("should render",()=>{
    render(<TopicInput type={TopicType.Pending} onCancel={()=>{}} />)
    expect(screen.getByTestId("input-topic")).toBeInTheDocument();
    expect(screen.getByTestId("save-topic-btn")).toBeInTheDocument();
    expect(screen.getByTestId("cancel-add-topic-btn")).toBeInTheDocument();
    expect(screen.getByTestId("save-topic-btn")).toHaveTextContent("Save")
    expect(screen.getByTestId("cancel-add-topic-btn")).toHaveTextContent("Cancel")
})


it("should type input in input box",()=>{
    render(<TopicInput type={TopicType.Pending} onCancel={()=>{}} />)
    let inputElement = screen.getByTestId("input-topic");
    // expect(inputElement.value).toBe("");
    fireEvent.change(inputElement,{target:{value:"Swati"}})
    // expect(inputElement.value).toBe("Swati")
})