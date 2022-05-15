// import { useEffect } from 'react'
import './Groups.css'
// import {useState} from 'react'
import GroupCard from '../../components/GroupCard/GroupCard'

export default function Groups({data}) {

    return (
        <>
        <h1> GROUP STAGE <span>QATAR 2022 </span></h1>
        <hr></hr><br></br>
        <div className='groups'>
            {data.data.groups.data.map((group) => (
            <GroupCard group={group} />
            ))}
        </div>
        </>
    )
}