import React from "react";
import printMap from "../../images/print_map.png";
import digMap from "../../images/web_map.png";
import { Button } from "../common/Button";
import { Card } from "../common/Card";
import Modal from 'react-modal'
import {Helmet } from 'react-helmet'
import {StyleAnalytics} from "./StyleAnalytics"

export const Analyse = () => {
    const [showDig,setShowDig] = React.useState(false)
    const [showNonDig,setShowNonDig] = React.useState(false)
    
    return (
      <div className="create_container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>BetterMaps - Analyse</title>
        </Helmet>
        <Card title="What kind of map do you want to analyse?" size="medium">
          <div className="create_card_body">
            <div className="button_container">
              <img src={printMap}></img>
              <Button type="primary" onClick={() => setShowDig(!showDig)}>
                Digital
              </Button>
            </div>
            <div className="button_container">
              <img src={digMap}></img>
              <Button type="primary" onClick={() => setShowNonDig(!showNonDig)}>
                Non-Digital
              </Button>
            </div>
          </div>
        </Card>
        <Modal isOpen={showDig}>
          <StyleAnalytics>
            <span onClick={() => setShowDig(!showDig)} className="close_button">
              &#10006;
            </span>
          </StyleAnalytics>
        </Modal>
        <Modal isOpen={showNonDig}>
          <StyleAnalytics>
            <span
              onClick={() => setShowNonDig(!showNonDig)}
              className="close_button"
            >
              &#10006;
            </span>
          </StyleAnalytics>
        </Modal>
      </div>
    );
};
