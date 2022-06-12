import { useState } from "react";
import axios from "axios";

export const AddSeason = () => {
    const clubs = [{ name: "Barcelona" }, { name: "Real Madrid" }];

    const [checkedState, setCheckedState] = useState(
        new Array(clubs.length).fill(false)
    );

    const [chackedClubs, setChackedClubs] = useState([]);

    const Submit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:5000/api/v1/seasons/generator/create", {
                teams: chackedClubs,
            })
            .then((res) => {
                console.log(res);
            });
    };

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);

        let Clubs = clubs.filter((club, index) => {
            return updatedCheckedState[index];
        }, "");

        Clubs = Clubs.map((club) => club.name);
        console.log(Clubs);
        setChackedClubs(Clubs);
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
                        <label htmlFor={index}>{name}</label>
                    </div>
                );
            })}

            {/* // */}

            <div>{chackedClubs}</div>

            {/* // */}

            <button type="submit"> Add </button>
        </form>
    );
};
