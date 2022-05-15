import { useEffect } from "react"

export default function Results({result, facts, f}) {
    

    useEffect(() => {
        console.log()
    }, [] ) 

    return (
        <>
            {
                f === result.group ?
                <li>{result.name} {result.hometeam} {result.home} and {result.away} {result.awayteam}</li>
                :
                <p></p>
            }
        </>
    )
}