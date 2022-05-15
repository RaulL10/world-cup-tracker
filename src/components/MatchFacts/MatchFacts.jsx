import './MatchFacts.css'


export default function MatchFacts({facts}) {
    
    return (
        <>
        <h2> Match Stats </h2>
        <p>{facts && facts.localTeam.data.name} VS {facts && facts.visitorTeam.data.name}</p>
        <p>{facts && facts.time.starting_at.date_time}</p>
        {
            facts && facts.venue  ?
            <p>Stadium: {facts && facts.venue.data.name}</p>
            :
            <p>Stadium: TBD</p>
        }
            {
                facts && facts.time.minute === null ?
                <p>Min: --</p>
                :
                <p>Min: {facts && facts.time.minute}</p>
            }
        {/* <p>{facts && facts.standings.localteam_poition}</p>
        <p>{facts && facts.standings.visitorteam_poition}</p> */}
        </>
    )
}