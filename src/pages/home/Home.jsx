import './home.css';
import Navbar from "../../components/navbar/Navbar";
import SidebarLeft from "../../components/sidebar-left/SidebarLeft";
import Feed from '../../components/feed/Feed';
import SidebarRight from '../../components/sidebar-right/SidebarRight';

export default function Home() {
  return (
    <>
        <Navbar />
        <div className="container">
          <SidebarLeft />
          <Feed />
          <SidebarRight />
        </div>
    </>
  )
}
