import { Register } from "./register/register"


export const AddUser = () => {
    return (
        <Register
            server={`/register`}
            pageNavigate={'/home'}
            value={'Add'}
            method={"post"}
            podaci={[
                { id: 1, type: 'text', name: 'email', placeholder: 'email' }
            ]}
        />
    )
}