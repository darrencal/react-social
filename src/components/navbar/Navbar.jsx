import { Chat, Notifications, Person, Search } from '@mui/icons-material'
import './navbar.css'

export default function Navbar() {
  return (
    <div className="navbar-container">
        <div className="navbar-left">
          <span className="logo">MySocial</span>
        </div>
        <div className="navbar-center">
          <div className="searchbar">
            <Search className="search-icon" sx={{ fontSize: 20 }} />
            <input placeholder="Search..." className="search-input" />
          </div>
        </div>
        <div className="navbar-right">
          <div className="navbar-links">
            <span className="navbar-link">Homepage</span>
            <span className="navbar-link">Timeline</span>
          </div>
          <div className="navbar-icons">
            <div className="navbar-icon-item">
              <Person />
              <span className="navbar-icon-badge">1</span>
            </div>
            <div className="navbar-icon-item">
              <Chat />
              <span className="navbar-icon-badge">2</span>
            </div>
            <div className="navbar-icon-item">
              <Notifications />
              <span className="navbar-icon-badge">1</span>
            </div>
          </div>
          <img src="/assets/users/3.jpg" alt="profile" className="navbar-img" />
        </div>
    </div>
  )
}
