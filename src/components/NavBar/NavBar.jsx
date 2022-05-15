import {Link} from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import './NavBar.css'

export default function NavBar({user, setUser}) {
    function handleLogOut() {
        userService.logOut();
        setUser(null);
      }

    return (
        <nav>
            <span className="welcome"> Welcome, {user.name} </span>
            <Link to="" className="link" onClick={handleLogOut}>| &nbsp;&nbsp; Log Out</Link>
            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;
            <Link to="/" className="link">Groups</Link>
        </nav>
    )
}