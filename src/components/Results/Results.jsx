

export default function Results({result, prediction, facts}) {
    console.log(result.group)
    console.log(prediction)
    console.log(facts && facts.group_id)
    return (
        <>
        <div>
            <li>{facts && facts.visitorTeam.data.name} {result.home} and {result.away}</li>
        </div>
        </>
    )
}