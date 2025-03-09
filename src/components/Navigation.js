import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../App";

function Navigation() {
  const { user } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">CrowdFund</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/campaigns">Campaigns</Link></li>
            {user ? (
              <>
                <li className="nav-item"><Link className="nav-link" to="/create-campaign">Create Campaign</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link></li>
              </>
            ) : (
              <>
                <li className="nav-item"><Link className="nav-link" to="/signin">Sign In</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/signup">Sign Up</Link></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
