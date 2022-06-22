import './sidebar-right.css'

export default function SidebarRight() {
  return (
    <div className="sidebar-right">
      <div className="sidebar-right-wrapper">
        <div className="birthdays-container">
          <img src="/assets/gift.png" className="birthdays-img" />
          <span className="birthdays-text">
            <b>Susan Rice</b> and <b>2 other friends</b> have birthdays today
          </span>
        </div>
        <img src="/assets/ad.jpg" className="sidebar-right-ad" />
        <h4 className="sidebar-right-title">Online</h4>
        <ul className="sidebar-right-friends-list">
          <li className="sidebar-right-friend">
            <div className="sidebar-right-profile-img-container">
              <img className="sidebar-right-profile-img" src="/assets/users/4.jpg" />
              <span className="sidebar-right-online"></span>
            </div>
            <span className="sidebar-right-username">John Doe</span>
          </li>
          <li className="sidebar-right-friend">
            <div className="sidebar-right-profile-img-container">
              <img className="sidebar-right-profile-img" src="/assets/users/2.jpg" />
              <span className="sidebar-right-online"></span>
            </div>
            <span className="sidebar-right-username">John Doe</span>
          </li>
          <li className="sidebar-right-friend">
            <div className="sidebar-right-profile-img-container">
              <img className="sidebar-right-profile-img" src="/assets/users/6.jpg" />
              <span className="sidebar-right-online"></span>
            </div>
            <span className="sidebar-right-username">John Doe</span>
          </li>
          <li className="sidebar-right-friend">
            <div className="sidebar-right-profile-img-container">
              <img className="sidebar-right-profile-img" src="/assets/users/7.jpg" />
              <span className="sidebar-right-online"></span>
            </div>
            <span className="sidebar-right-username">John Doe</span>
          </li>
          <li className="sidebar-right-friend">
            <div className="sidebar-right-profile-img-container">
              <img className="sidebar-right-profile-img" src="/assets/users/4.jpg" />
              <span className="sidebar-right-online"></span>
            </div>
            <span className="sidebar-right-username">John Doe</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
