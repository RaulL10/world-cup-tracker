import { useParams } from "react-router-dom"
import './MatchCard.css'

export default function MatchCard({match, data}) {
    let {groupName} = useParams()
    let group = data.data.groups.data.find((group) => group.name === groupName)
    return (
        <>
        {
            match.group_id === group.id ?
            
            <li>{match.localTeam.data.name} VS {match.visitorTeam.data.name}</li>
            :
            <p></p>
        }
            
        
            </>
    )
}