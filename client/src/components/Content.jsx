import { Counter } from "./Counter"
import { Header } from "./Header"
import { Subscribe } from "./Subscribe"

export const Content = () => {
    return (
        <div className="content">
            <Subscribe />
            <Counter />
        </div>
    )
}