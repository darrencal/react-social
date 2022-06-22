import './sidebar-left.css'
import { Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from '@mui/icons-material';

export default function SidebarLeft() {
  return (
    <div className="sidebar-left">
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <RssFeed className="sidebar-list-item-icon" />
            <span className="sidebar-list-item-text">Feed</span>
          </li>
          <li className="sidebar-list-item">
            <Chat className="sidebar-list-item-icon" />
            <span className="sidebar-list-item-text">Chats</span>
          </li>
          <li className="sidebar-list-item">
            <PlayCircleFilledOutlined className="sidebar-list-item-icon" />
            <span className="sidebar-list-item-text">Videos</span>
          </li>
          <li className="sidebar-list-item">
            <Group className="sidebar-list-item-icon" />
            <span className="sidebar-list-item-text">Groups</span>
          </li>
          <li className="sidebar-list-item">
            <Bookmark className="sidebar-list-item-icon" />
            <span className="sidebar-list-item-text">Bookmarks</span>
          </li>
          <li className="sidebar-list-item">
            <HelpOutline className="sidebar-list-item-icon" />
            <span className="sidebar-list-item-text">Questions</span>
          </li>
          <li className="sidebar-list-item">
            <WorkOutline className="sidebar-list-item-icon" />
            <span className="sidebar-list-item-text">Jobs</span>
          </li>
          <li className="sidebar-list-item">
            <Event className="sidebar-list-item-icon" />
            <span className="sidebar-list-item-text">Events</span>
          </li>
          <li className="sidebar-list-item">
            <School className="sidebar-list-item-icon" />
            <span className="sidebar-list-item-text">Courses</span>
          </li>
        </ul>

        <button className="sidebar-button">Show More</button>

        <hr className="sidebar-hr"/>

        <ul className="sidebar-friend-list">
          <li className="sidebar-friend">
            <img className="sidebar-friend-img" src="/assets/users/1.jpg" alt="" />
            <span className="sidebar-friend-name">Jane Doe</span>
          </li>
          <li className="sidebar-friend">
            <img className="sidebar-friend-img" src="/assets/users/2.jpg" alt="" />
            <span className="sidebar-friend-name">Mary Sue</span>
          </li>
          <li className="sidebar-friend">
            <img className="sidebar-friend-img" src="/assets/users/3.jpg" alt="" />
            <span className="sidebar-friend-name">Tom Smith</span>
          </li>
          <li className="sidebar-friend">
            <img className="sidebar-friend-img" src="/assets/users/4.jpg" alt="" />
            <span className="sidebar-friend-name">Alfred Banks</span>
          </li>
          <li className="sidebar-friend">
            <img className="sidebar-friend-img" src="/assets/users/5.jpg" alt="" />
            <span className="sidebar-friend-name">Mark Jordan</span>
          </li>
          <li className="sidebar-friend">
            <img className="sidebar-friend-img" src="/assets/users/6.jpg" alt="" />
            <span className="sidebar-friend-name">Mike Hill</span>
          </li>
          <li className="sidebar-friend">
            <img className="sidebar-friend-img" src="/assets/users/7.jpg" alt="" />
            <span className="sidebar-friend-name">Anne Turner</span>
          </li>
          <li className="sidebar-friend">
            <img className="sidebar-friend-img" src="/assets/users/8.jpg" alt="" />
            <span className="sidebar-friend-name">Mazy Roland</span>
          </li>
          <li className="sidebar-friend">
            <img className="sidebar-friend-img" src="/assets/users/9.jpg" alt="" />
            <span className="sidebar-friend-name">John Smart</span>
          </li>
          <li className="sidebar-friend">
            <img className="sidebar-friend-img" src="/assets/users/10.jpg" alt="" />
            <span className="sidebar-friend-name">Rhonda Fuller</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
