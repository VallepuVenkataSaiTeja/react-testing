import { render, screen } from "@testing-library/react"
import Snapshot from "./Snapshot"

test('snapshot testing', ()=>{
    const {asFragment} = render(<Snapshot />)
    expect(asFragment()).toMatchSnapshot()
})