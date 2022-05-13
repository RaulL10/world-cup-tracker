import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import MatchCard from '../../components/MatchCard/MatchCard'
import MatchFacts from '../../components/MatchFacts/MatchFacts'
import Predictions from "../../components/Predictions/Predictions"
import './GroupDetail.css'


export default function GroupDetail({data, user}) {
    let {groupName} = useParams()
    let group = data.data.groups.data.find((group) => group.name === groupName)
    
    const [match, setMatch] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [facts, setFacts] = useState(null)

    useEffect(() => {
            fetch("https://soccer.sportmonks.com/api/v2.0/stages/77452386?api_token=1iRPD7aLwSlDbNc6hOvzLS9iHa4HxbPxZavISDUpg5W6Pj8DnZxBGUsgaQQs&include=fixtures.localTeam,fixtures.visitorTeam,fixtures.venue")
                .then(response => {
                    if(response.ok) {
                        return response.json()
                    }
                    throw response;
                })
                .then(match => {
                    console.log(match)
                    setMatch(match);
                })
                .catch(error => {
                    console.log('Error Fethhing data: ', error);
                    setError(error)
                })
                .finally(() => {
                    setLoading(false)
                })    
        }, [] )
            if (loading) return "Loading.."
            if (error) return "Error!"

    return (
        <>
        <h1> {group.name} </h1>
        <div className="groupDetailsPage">
            <section className="matches">
                {match.data.fixtures.data.map((match) => (
                <MatchCard match={match} data={data} setFacts={setFacts} />
                ))}
            </section>
            <section className="sectionTwo">
                <MatchFacts facts={facts} />
            </section>
            <section className="sectionThree">
                <Predictions facts={facts} user={user} />
            </section>
        </div>
        </>
    )
}