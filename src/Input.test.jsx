import { fireEvent, render, screen } from "@testing-library/react"
import Input from './Input'

test("testing input", ()=>{
    render(<Input />)
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();

    const placeholdertxt =screen.getByPlaceholderText('enter name');
    expect(placeholdertxt).toBeInTheDocument();

    fireEvent.change(input, {target: {value: 'john'}});
    expect(input).toHaveValue('john')

})

describe("input test", ()=>{
    test('input element test', ()=>{
        render(<Input />)
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
    })

    test('input placeholder test', ()=>{
        render(<Input />)
        const placeholdertxt =screen.getByPlaceholderText('enter name');
        expect(placeholdertxt).toBeInTheDocument();
    })

    test('input value test', ()=>{
         render(<Input />)
         const input = screen.getByRole('textbox');
         fireEvent.change(input, {target: {value: 'john'}});
         expect(input).toHaveValue('john')
    })
})