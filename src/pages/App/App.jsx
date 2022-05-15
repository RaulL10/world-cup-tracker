import './App.css'
import {useState} from 'react'
import Groups from '../Groups/Groups'
import AuthPage from '../AuthPage/AuthPage'
import GroupDetail from '../GroupDetail/GroupDetail';
import { Routes, Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import { getUser } from '../../utilities/users-service';
import {useEffect} from 'react'


export default function App() {
    const [user, setUser] = useState(getUser())

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
            fetch("https://soccer.sportmonks.com/api/v2.0/seasons/18017?api_token=1iRPD7aLwSlDbNc6hOvzLS9iHa4HxbPxZavISDUpg5W6Pj8DnZxBGUsgaQQs&include=groups")
                .then(response => {
                    if(response.ok) {
                        return response.json()
                    }
                    throw response;
                })
                .then(data => {
                    console.log(data)
                    setData(data);
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
        <main className="App">
            {user ? 
                <>
                <NavBar user={user} setUser={setUser}/>
                <Routes>
                    <Route path="/" element={<Groups data={data}/>} />
                    <Route path="/:groupName" element={<GroupDetail data={data} user={user} />} />
                </Routes>
                
                </>
                :

                <AuthPage setUser={setUser} /> 
            }

        </main>
    )
}
