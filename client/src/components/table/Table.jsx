import Styled from "./Table.module.css"
import { Container } from "../container/container"

const clubs = [
    {
        position: 1, club: "Ime kluba", played: 1, won: 1, drown: 1, lost: 1, gf: 1, ga: 1, gd: 1, points: 1
    },
    {
        position: 2, club: "Ime kluba", played: 1, won: 1, drown: 1, lost: 1, gf: 1, ga: 1, gd: 1, points: 1
    },
    {
        position: 3, club: "Ime kluba", played: 1, won: 1, drown: 1, lost: 1, gf: 1, ga: 1, gd: 1, points: 1
    },
    {
        position: 4, club: "Ime kluba", played: 1, won: 1, drown: 1, lost: 1, gf: 1, ga: 1, gd: 1, points: 1
    },
    {
        position: 4, club: "Ime kluba", played: 1, won: 1, drown: 1, lost: 1, gf: 1, ga: 1, gd: 1, points: 1
    },
    {
        position: 4, club: "Ime kluba", played: 1, won: 1, drown: 1, lost: 1, gf: 1, ga: 1, gd: 1, points: 1
    },
    {
        position: 4, club: "Ime kluba", played: 1, won: 1, drown: 1, lost: 1, gf: 1, ga: 1, gd: 1, points: 1
    }
]

const Table = () => {
    return (
        <div>
            <Container>
                <div className={Styled.Overflow}>
                    <table>
                        <thead>
                            <tr className={Styled.TableRow}>
                                <th>Position</th>
                                <th>Club</th>
                                <th>Played</th>
                                <th>Won</th>
                                <th>Drown</th>
                                <th>Lost</th>
                                <th>GF</th>
                                <th>GA</th>
                                <th>GD</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clubs.map(({ position, club, played, won, drown, lost, gf, ga, gd, points }, index) => {
                                return (
                                    <tr className={Styled.TableRow} key={index} id={index}>
                                        <td>{position}</td>
                                        <td>{club}</td>
                                        <td>{played}</td>
                                        <td>{won}</td>
                                        <td>{drown}</td>
                                        <td>{lost}</td>
                                        <td>{gf}</td>
                                        <td>{ga}</td>
                                        <td>{gd}</td>
                                        <td>{points}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </Container >
        </div >
    )
}

export default Table