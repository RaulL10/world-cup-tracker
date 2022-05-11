export default function MatchFacts({facts}) {
    return (
        <>
        <h2> Match Stats </h2>
        <p>{facts && facts.localTeam.data.name} VS {facts && facts.visitorTeam.data.name}</p>
        <p>{facts && facts.time.starting_at.date_time}</p>
        </>
    )
}