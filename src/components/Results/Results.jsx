import { useEffect } from "react"
import './Results.css'


export default function Results({result, facts, f}) {
    

    useEffect(() => {
        console.log()
    }, [] ) 

    return (
        <>
            {
                f === result.group ?
                <p className="usersP"><span className="user">User: {result.name}</span> {result.hometeam} {result.home} | {result.away} {result.awayteam}</p>
                :
                <p></p>
            }
        </>
    )
}