import { useState, useEffect } from "react";
import axios from '../../utils/axiosBackend';
import { useNavigate } from 'react-router-dom';
import Styled from "./addSeason.module.css"

export const AddSeason = () => {
    let navigate = useNavigate();

    const [allClubs, setAllClubs] = useState([])

    useEffect(() => {
        setCheckedState(new Array(allClubs.length).fill(false))
    }, [allClubs])

    const [checkedState, setCheckedState] = useState();

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
                navigate("/seasons")
            });
    };

    useEffect(() => {
        axios
            .get("teams")
            .then((res) => {
                setAllClubs(res.data.data)
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

    console.log(checkedState)

    return (
        <form onSubmit={Submit} className={Styled.addSeasonForm}>
            {allClubs.map(({ name }, index) => {
                return (
                    <div key={index} className={Styled.ChackBoxSeason}>
                        <input
                            type="checkbox"
                            id={index}
                            name={name}
                            value={name}
                            checked={checkedState[index]}
                            onChange={() => handleOnChange(index)}
                        />
                        <div className={Styled.Dot}></div>
                        <label htmlFor={index}>{name}</label>
                    </div>
                );
            })}
            <button> Add </button>
        </form>
    );
};
