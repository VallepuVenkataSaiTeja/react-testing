import { render, screen } from "@testing-library/react"
import BeforeAfter from "./before-after"

beforeEach(()=>{
    console.log('before each')
})

test('test 1',()=>{
    render(<BeforeAfter />)
    console.log('test 1')
    const h1 = screen.getByText(/before and after/)
    expect(h1).toBeInTheDocument()
})

test('test 2',()=>{
    render(<BeforeAfter />)
    console.log('test 2')
    const h1 = screen.getByText(/before and after/)
    expect(h1).toBeInTheDocument()
})

afterEach(()=>{
    console.log('after each')
})

beforeAll(()=>{
    console.log('before all')
})

afterAll(()=>{
    console.log('after all')
})