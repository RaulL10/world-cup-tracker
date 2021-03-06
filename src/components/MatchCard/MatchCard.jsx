import { useParams } from "react-router-dom"
import './MatchCard.css'

export default function MatchCard({match, data, setFacts}) {
    let {groupName} = useParams()
    let group = data.data.groups.data.find((group) => group.name === groupName)
    return (
        <div onClick={() => {
            setFacts(match)
        }} >
        {
            match.group_id === group.id ?

            <li className="listmatch">{match.localTeam.data.name}&nbsp;<img src={match.localTeam.data.logo_path} width="25px" alt="" /> &nbsp; VS &nbsp; {match.visitorTeam.data.name}&nbsp;<img src={match.visitorTeam.data.logo_path} width="25px" alt="" /></li>
            :
            <p></p>
        }
        </div>
    )
}