import { Register } from "./register"

export const RegisterJs = () => {
    return (
        <Register podaci={[
            { id: 1, type: "text", name: "username", placeholder: "username" },
            { id: 2, type: "password", name: "password", placeholder: "password" },
            { id: 3, type: "text", name: "email", placeholder: "email" },
            { id: 4, type: "text", name: "phone", placeholder: "phone" },
        ]
        } />
    )
}