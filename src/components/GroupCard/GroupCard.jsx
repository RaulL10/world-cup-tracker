// import { Link } from "react-router-dom";
import TeamCard from "../TeamCard/TeamCard";
import './GroupCard.css'


export default function GroupCard({group}) {

  return (
    <>
        <div>
            <h3>{group.name}</h3>
            <ul>
                {group.standings.data.map((team, idx) => (
                    <TeamCard group={group} team={team}/>
                ))}
            </ul>
        </div>

    </>
  );
}
