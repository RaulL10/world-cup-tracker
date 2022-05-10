// import {checkToken}  from '../../utilities/users-service'
import { useParams } from "react-router-dom"

export default function GroupDetail({data}) {
    let {groupName} = useParams()
    let group = data.data.groups.data.find((group) => group.name === groupName)
    
    // async function handleCheckToken(){
    //     const expDate = await checkToken()
    //     console.log(expDate)
    // }

    return (
        <>
        <h1> {group.name} </h1>
        </>
    )
}