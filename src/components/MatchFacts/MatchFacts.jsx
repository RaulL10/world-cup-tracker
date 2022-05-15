import './MatchFacts.css'

export default function MatchFacts({facts}) {
    console.log(facts)
    return (
        <div className='stats'>
        <h2> Match Stats </h2>

        <p className='teams'>{facts && facts.localTeam.data.name} <img src={facts && facts.localTeam.data.logo_path} width="20px" alt='' /> &nbsp;&nbsp;
        <span className='score'>{facts && facts.scores.localteam_score} : {facts && facts.scores.visitorteam_score}</span> &nbsp;&nbsp;
        <img src={facts && facts.visitorTeam.data.logo_path} width="20px" alt='' /> {facts && facts.visitorTeam.data.name}</p>
        <hr></hr>
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
        </div>
    )
}