// import { useEffect } from 'react'
import './Groups.css'
// import {useState} from 'react'
import GroupCard from '../../components/GroupCard/GroupCard'

export default function Groups({data}) {
    // const [data, setData] = useState(null)
    // const [loading, setLoading] = useState(true)
    // const [error, setError] = useState(null)

    // useEffect(() => {
    //         fetch("https://soccer.sportmonks.com/api/v2.0/seasons/18017?api_token=1iRPD7aLwSlDbNc6hOvzLS9iHa4HxbPxZavISDUpg5W6Pj8DnZxBGUsgaQQs&include=groups")
    //             .then(response => {
    //                 if(response.ok) {
    //                     return response.json()
    //                 }
    //                 throw response;
    //             })
    //             .then(data => {
    //                 console.log(data)
    //                 console.log(data.data.groups.data[0])
    //                 setData(data);
    //             })
    //             .catch(error => {
    //                 console.log('Error Fethhing data: ', error);
    //                 setError(error)
    //             })
    //             .finally(() => {
    //                 setLoading(false)
    //             })    
    //     }, [] )
    //         if (loading) return "Loading.."
    //         if (error) return "Error!"

   

    return (
        <>
        <h1> QATAR 2022 </h1>
        <h2>Groups</h2>
        <hr></hr>
        <div className='groups'>
            {data.data.groups.data.map((group) => (
            <GroupCard group={group} />
            ))}
        </div>
        </>
    )
}