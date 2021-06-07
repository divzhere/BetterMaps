import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Account } from "../Account/Account";
import { Analyse } from "../Analyse/Analyse";
import { Create } from "../Create/Create";
import { Edit } from "../Edit/Edit";
import { ReactComponent as EditIcon } from "../../images/icons/edit.svg";
import { ReactComponent as CreateIcon } from "../../images/icons/create.svg";
import { ReactComponent as AccountIcon } from "../../images/icons/account.svg";
import { ReactComponent as AnalyseIcon } from "../../images/icons/analyse.svg";

export const SideBar = () => {
  return (
    <div className="side_bar">
      <Router>
        <Route
          render={({ location, history }) => (
            <React.Fragment>
              <SideNav
                onSelect={(selected) => {
                  const to = "/" + selected;
                  if (location.pathname !== to) {
                    history.push(to);
                  }
                }}
              >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="create">
                  <NavItem eventKey="create">
                    <NavIcon>
                      <CreateIcon />
                    </NavIcon>
                    <NavText style={{ color: "#fff" }}>Create</NavText>
                  </NavItem>
                  <NavItem eventKey="analyse">
                    <NavIcon>
                      <AnalyseIcon />
                    </NavIcon>
                    <NavText style={{ color: "#fff" }}>Analyse</NavText>
                  </NavItem>
                  <NavItem eventKey="edit">
                    <NavIcon>
                      <EditIcon />
                    </NavIcon>
                    <NavText style={{ color: "#fff" }}>Edit</NavText>
                  </NavItem>
                  <NavItem eventKey="account">
                    <NavIcon>
                      <AccountIcon />
                    </NavIcon>
                    <NavText style={{ color: "#fff" }}>Account</NavText>
                  </NavItem>
                </SideNav.Nav>
              </SideNav>
              <main>
                <Route path="/create" exact component={(props) => <Create />} />
                <Route path="/analyse" component={(props) => <Analyse />} />
                <Route path="/edit" component={(props) => <Edit />} />
                <Route path="/account" component={(props) => <Account />} />
              </main>
            </React.Fragment>
          )}
        />
      </Router>
    </div>
  );
};
