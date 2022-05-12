// import { useEffect } from 'react'
import './Groups.css'
// import {useState} from 'react'
import GroupCard from '../../components/GroupCard/GroupCard'

export default function Groups({data}) {

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