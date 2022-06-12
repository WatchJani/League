import { useState } from "react";
import axios from "axios";

export const AddSeason = () => {
    const allClubs = [{ name: "Barcelona" }, { name: "Real Madrid" }];

    const [checkedState, setCheckedState] = useState(
        new Array(allClubs.length).fill(false)
    );

    const [chackedClubs, setChackedClubs] = useState([]);

    const Submit = (e) => {
        e.preventDefault();
        if (
            chackedClubs.length < 2 &&
            !alert("Mora bitni izabrano njamnaje 2 tima ")
        )
            return;
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

        const Clubs = allClubs.filter((club, index) => {
            return updatedCheckedState[index];
        }, "");

        const ClubsNames = Clubs.map((club) => club.name);
        console.log(ClubsNames);
        setChackedClubs(ClubsNames);
    };

    return (
        <form onSubmit={Submit}>
            {allClubs.map(({ name }, index) => {
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
            <button> Add </button>
        </form>
    );
};
