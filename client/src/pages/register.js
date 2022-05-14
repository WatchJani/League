import { useState } from "react"
import axios from "axios"

export const Register = () => {

    const [data, SetData] = useState({
        username: null,
        password: null,
        email: null,
        phone: null,
    })

    const Submit = () => {
        axios.post("http://localhost:5000/register",
            {
                Username: data.username,
                Password: data.password,
                Email: data.email,
                Phone: data.phone,
            }
        )
            .then(() => {
                console.log("Successfully sent")
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    const newValue = (e) => {
        SetData({ ...data, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={Submit}>
            <input type="text" placeholder="username" name="username" onChange={newValue} />
            <input type="password" placeholder="password" name="password" onChange={newValue} />
            <input type="text" name="email" placeholder="e-mail" onChange={newValue} />
            <input type="text" name="phone" placeholder="phone" onChange={newValue} />
            <button type="submit">Register</button>
        </form>
    )
}