import { useState } from "react"
import axios from 'axios'

export const Subscribe = () => {
    const [email, setEmail] = useState('')
    const handleSubmit = event => {
        event.preventDefault()
        if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            try {
                axios.post('http://localhost:5000/', { email })
            } catch (error) {
                console.log(error)
            }
            alert(`${email} has been subscribed successfully!`)
        } else alert(`${email} email is invalid!`)
        setEmail('')
    }
    return (
        <div className="subscribe">
            <p>
                <span>ADN Agro Limited</span> is coming soon to supply fresh agro products. Subscribe to be the first to know about all the updates and get a discount on your first order!
            </p>
            <form className="email"
                onSubmit={handleSubmit}
                action="POST"
            >
                <input
                    type="email"
                    placeholder="Please enter your e-mail address"
                    onChange={event => setEmail(event.target.value)}
                    value={email}
                    required
                />
                <button type="submit">Subscribe</button>
            </form>
        </div>
    )
}