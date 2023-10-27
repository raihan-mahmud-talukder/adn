import { Counter } from "./Counter"
import { Subscribe } from "./Subscribe"

export const Content = () => {
    return (
        <div className="content">
            <Subscribe />
            <Counter />
        </div>
    )
}