import { SideBar } from "./components/Navbar/Nav";
import {Helmet} from 'react-helmet'
import "./styles/main.scss";
import logo from "./images/logo.png"
export default function App() {
  return (
    <div className="better_maps">
      <Helmet>
        <meta charSet="utf-8" />
        <title>BetterMaps</title>
      </Helmet>
      <nav className="top_bar">
        <div className="brand_logo">
          <img src={logo}></img>
        </div>
        <div className="user_avatar">P</div>
      </nav>
      <SideBar></SideBar>
    </div>
  );
}
