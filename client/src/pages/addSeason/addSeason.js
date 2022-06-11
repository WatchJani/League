import { useState } from "react"
import axios from 'axios';

export const AddSeason = () => {


    const clubs = [{ name: "Barcelona", price: 3213 },
    { name: "Real Madrid", price: 3213 }]


    const [checkedState, setCheckedState] = useState(
        new Array(clubs.length).fill(false)
    );

    const [chackedClubs, setChackedClubs] = useState("");

    const Submit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:5000/api/v1/seasons/generator", { teams: chackedClubs })
            .then((res) => {
                console.log(res);
            })
    }


    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);

        const totalPrice = updatedCheckedState.reduce(
            (name, currentState, index) => {
                if (currentState === true) {
                    return name + clubs[index].name + ", ";
                }
                return name;
            },
            ""
        );

        setChackedClubs(totalPrice);
    };

    return (
        <form onSubmit={Submit}>
            {clubs.map(({ name }, index) => {
                return (
                    <div key={index}>
                        <input
                            type="checkbox"
                            id={index}
                            name={name}
                            value={name}
                            checked={checkedState[index]}
                            onChange={() => handleOnChange(index)}
                        />
                        <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                    </div>
                );
            })}

            {/* // */}

            <div className="right-section">{chackedClubs}</div>

            {/* // */}

            <button type='submit'> Add </button>
        </form>
    );
}