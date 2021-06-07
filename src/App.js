import { SideBar } from "./components/Navbar/Nav";
import {Helmet} from 'react-helmet'
import "./styles/main.scss";
export default function App() {
  return (
    <div className="better_maps">
      <Helmet>
        <meta charSet="utf-8" />
        <title>BetterMaps</title>
      </Helmet>
      <nav className="top_bar">
        <div className="brand_logo">
          <span>better</span>
          <span className="brand_logo_text">Maps</span>
        </div>
        <div className="user_avatar">P</div>
      </nav>
      <SideBar></SideBar>
    </div>
  );
}
