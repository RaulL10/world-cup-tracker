import {Link} from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import './NavBar.css'

export default function NavBar({user, setUser}) {
    function handleLogOut() {
        // Delegate to the users-service
        userService.logOut();
        // Update state will also cause a re-render
        setUser(null);
      }

    return (
        <nav>
            {/* <Link to="/detail">Order History</Link> */}
            {/* &nbsp; | &nbsp; */}
            <span className="welcome"> Welcome, {user.name} </span>
            <Link to="" className="link" onClick={handleLogOut}>Log Out</Link>
            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;
            <Link to="/" className="link">Groups</Link>
        </nav>
    )
}