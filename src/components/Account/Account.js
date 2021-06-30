import React from 'react'
import {Helmet } from 'react-helmet'
import { Card } from '../common/Card'
import {Button} from "../common/Button"
import Avatar from "../../images/avatar.jpg"

export const Account = () => {
  return (
    <div className="accounts_page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>BetterMaps - Account</title>
      </Helmet>
      <Card size={"account"}>
        <div className="account_card_body">
          <div className="form_container">
            <div className="form_row">
              <span className="subtitle_text">User Name</span>
              <div className="input_field">bettermapsUser</div>
            </div>

            <div className="form_row">
              <span className="subtitle_text">Email</span>
              <div className="input_field">user@bettermaps.eu</div>
            </div>

            <div className="form_row">
              <span className="subtitle_text">Subscription</span>
              <div className="input_field">PRO</div>
            </div>

            <div className="form_row">
              <span className="subtitle_text">Mapbox API</span>
              <div className="input_field">{process.env.REACT_APP_MAPBOX_API_KEY}</div>
            </div>

            <div className="form_row">
              <span className="subtitle_text">Maptiler API</span>
              <div className="input_field">{process.env.REACT_APP_MAPTILER_API_KEY}</div>
            </div>
            <div className="form_row"></div>
          </div>
          <div className="form_container">
            <img src={Avatar} />
          </div>
        </div>
        <div className="bottom_row">
          <Button type="primary" className="create_map_button subtitle_text">
            Reset Password
          </Button>
          <Button type="primary" className="create_map_button subtitle_text">
            Change Password
          </Button>
        </div>
      </Card>
    </div>
  );
}
