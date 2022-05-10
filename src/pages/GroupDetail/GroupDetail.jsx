// import {checkToken}  from '../../utilities/users-service'
import { useParams } from "react-router-dom"

export default function GroupDetail({groups}) {
    let {groupName} = useParams()
    let group = groups.find((group) => group.name === groupName)
    // console.log('here')
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