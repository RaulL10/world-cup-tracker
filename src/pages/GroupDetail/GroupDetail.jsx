import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import MatchCard from '../../components/MatchCard/MatchCard'

export default function GroupDetail({data}) {
    let {groupName} = useParams()
    let group = data.data.groups.data.find((group) => group.name === groupName)
    
    const [match, setMatch] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
            fetch("https://soccer.sportmonks.com/api/v2.0/stages/season/18017?api_token=1iRPD7aLwSlDbNc6hOvzLS9iHa4HxbPxZavISDUpg5W6Pj8DnZxBGUsgaQQs&include=fixtures")
                .then(response => {
                    if(response.ok) {
                        return response.json()
                    }
                    throw response;
                })
                .then(match => {
                    console.log(match.data[5].fixtures.data)
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
        <div>
            {match.data[5].fixtures.data.map((match) => (
            <MatchCard match={match} />
            ))}
        </div>

        </>
    )
}