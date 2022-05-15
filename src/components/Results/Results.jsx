import { useEffect } from "react"

export default function Results({result, facts, f}) {
    

    useEffect(() => {
        console.log()
    }, [] ) 

    return (
        <>
            {
                f === result.group ?
                <p>{result.name} {result.hometeam} {result.home} and {result.away} {result.awayteam}</p>
                :
                <p></p>
            }
        </>
    )
}