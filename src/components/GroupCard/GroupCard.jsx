import { Link } from "react-router-dom";
import TeamCard from "../TeamCard/TeamCard";
import './GroupCard.css'




export default function GroupCard({group, key}) {
  
  return (
    <>
    {/* <Link to={`/groups/${group.name}`}> */}
        <div className="groupCard">
            <h3>{group.name}</h3>
            <ul>
                {group.standings.data.map((team, idx) => (
                    <TeamCard group={group} team={team} key={group.name} />
                ))}
            </ul>
        </div>
    {/* </Link> */}
    </>
  );
}
