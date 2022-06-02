import { Register } from "./register"

export const RegisterJs = () => {
    return (
        <Register server={'/register'} pageNavigate={"/login"} value={"register"} podaci={[
            { id: 1, type: "text", name: "username", placeholder: "username" },
            { id: 2, type: "password", name: "password", placeholder: "password" },
            { id: 3, type: "text", name: "email", placeholder: "email", label: "E-mail" },
            { id: 4, type: "text", name: "phone", placeholder: "phone" },
            { id: 5, type: "file", name: "image", placeholder: "image" },
            //name se koristi za ime koje ce se primati na serveru 
        ]
        } />
    )
}