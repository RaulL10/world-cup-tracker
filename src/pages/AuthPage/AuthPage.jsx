import LoginForm from "../../components/LoginForm/LoginForm"
import SignUpForm  from "../../components/SignUpForm/SignUpForm"
import {useState} from 'react'
import './AuthPage.css'


export default function AuthPage({setUser}) {
    const [currentForm, setCurrentForm] = useState('login')

    function handleClick() {
        if(currentForm === 'login') {
            setCurrentForm('signup')
        } else {
            setCurrentForm('login')
        }
    }
    return (
        <main>
            <div className="banner">
                <h1>COPA MUNDIAL <br></br>2022</h1>
            </div>
                {
                    currentForm === 'login' ?
                    
                    <LoginForm setUser={setUser} />
                    :
                    <SignUpForm setUser={setUser} />
                }
                <button className="switch" onClick={handleClick}> 
                    {
                        currentForm === 'login' ?
                        "Sign Up"
                        :
                        "Log In"
                    }
                </button>
        </main>
    )
}