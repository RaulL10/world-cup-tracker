import './App.css'
import {useState} from 'react'
import Groups from '../Groups/Groups'
import AuthPage from '../AuthPage/AuthPage'
import GroupDetail from '../GroupDetail/GroupDetail';
import { Routes, Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import { getUser } from '../../utilities/users-service';



export default function App() {
    const [user, setUser] = useState(getUser())
    return (
        <main className="App">
            {user ? 
                <>
                <NavBar user={user} setUser={setUser}/>
                <Routes>
                    <Route path="/" element={<Groups />} />
                    <Route path="/groups/:groupName" element={<GroupDetail />} />
                </Routes>
                
                </>
                :

                <AuthPage setUser={setUser} /> 
            }

        </main>
    )
}
