import { useState, useEffect } from "react";
import axios from '../../utils/axiosBackend';

export const AddSeason = () => {
    // const allClubs = [{ name: "Barcelona" }, { name: "Real Madrid" }];


    const [allClubs, setAllClubs] = useState([])

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
            .post("seasons/generator/create", {
                teams: chackedClubs,
            })
            .then((res) => {
                console.log(res);
            });
    };

    useEffect(() => {
        axios
            .get("teams")
            .then((res) => {
                setAllClubs(res.data.data)
                console.log(res.data.data);
            });
    }, [])



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
