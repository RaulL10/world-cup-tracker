import { Link } from "react-router-dom";
import TeamCard from "../TeamCard/TeamCard";
import './GroupCard.css'


export default function GroupCard({group, key}) {
  
  return (
    <>
    <Link to={`/${group.name}`}>
        <div className="groupCard">
            <h3 className="groupname">{group.name}</h3>
            <ul>
                {group.standings.data.map((team, idx) => (
                    <TeamCard group={group} team={team} />
                ))}
            </ul>
        </div>
    </Link>
    </>
  );
}
