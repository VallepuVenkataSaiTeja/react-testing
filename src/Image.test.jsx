import { render, screen } from "@testing-library/react"
import Image from "./Image"

test('testing image', ()=>{
    render(<Image />);
    const img = screen.getByRole('img');

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('alt', 'alt text img');
    expect(img).toHaveAttribute('src', 'https://testing-library.com/img/react-128x128.png');
})