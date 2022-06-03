import { useState } from "react"
import axios from "axios";

export const Image = () => {

    const [data, setData
    ] = useState({
        selectedFile: "",
        name: ""
    });




    const Confireme = () => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("image", data.selectedFile);

        axios
            .post("http://localhost:5000/api/v1/users/image", formData)
            .then((res) => {
                alert("File Upload success");
            })
            .catch((err) => alert("File Upload Error"));
    }


    console.log(data)

    return (
        <form>
            <input
                type="file"
                onChange={(e) => setData({ ...data, selectedFile: e.target.files[0] })}
            />
            <input
                type="text"
                onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <button type="submit" onClick={Confireme}>potvrdi</button>
        </form>
    )
}