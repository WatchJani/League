import { Register } from "./register"


export const RegisterLog = () => {
    return (
        <Register input={[
            { type: "text", name: "username" },
            { type: "password", name: "password" },
            { type: "text", name: "email" },
            { type: "text", name: "phone" }
        ]} />
    )
}