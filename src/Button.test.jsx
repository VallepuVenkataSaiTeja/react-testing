import { fireEvent, render, screen } from "@testing-library/react"
import Button from "./Button"

test("testing btn", ()=>{
    render(<Button />);
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();

    expect(btn).toHaveTextContent('Click')

    fireEvent.click(btn);
    expect(btn).toHaveTextContent('clicked')
})