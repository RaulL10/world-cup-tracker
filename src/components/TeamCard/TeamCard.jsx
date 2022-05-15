import './TeamCard.css'


export default function TeamCard({team, group}) {
   
    return (
            <li className="teamCard">{team.team_name} <span className='points'>{team.total.points}</span></li>
    )
}
