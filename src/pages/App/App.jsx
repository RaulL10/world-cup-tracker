import './App.css'
import {useState} from 'react'
import Groups from '../Groups/Groups'
import AuthPage from '../AuthPage/AuthPage'
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
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
                    <Route path="/groups" element={<Groups />} />
                    <Route path="/orders" element={<OrderHistoryPage />} />
                </Routes>
                </>
                :

                <AuthPage setUser={setUser} /> 
            }

        </main>
    )
}
