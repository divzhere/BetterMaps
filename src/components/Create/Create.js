import React from "react";
import printMap from "../../images/print_map.png";
import digMap from "../../images/web_map.png";
import { Button } from "../common/Button";
import { Card } from "../common/Card";
import Modal from 'react-modal'
import {WebCreator} from "./WebCreator"
import {PrintCreator} from "./PrintCreator"
import {Helmet } from 'react-helmet'

export const Create = () => {
  const [showWeb, setShowWeb] = React.useState(false);
  const [showPrint, setShowPrint] = React.useState(false);

  return (
    <div className="create_container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>BetterMaps - Create</title>
      </Helmet>
      <Card title="What kind of map do you want to create?" size="medium">
        <div className="create_card_body">
          <div className="button_container">
            <img src={printMap}></img>
            <Button type="primary" onClick={() => setShowWeb(!showWeb)}>
              Web Map
            </Button>
          </div>
          <div className="button_container">
            <img src={digMap}></img>
            <Button type="primary" onClick={() => setShowPrint(!showPrint)}>
              Print Map
            </Button>
          </div>
        </div>
      </Card>
      <Modal isOpen={showWeb}>
        <WebCreator>
          <span onClick={() => setShowWeb(!showWeb)} className="close_button">
            &#10006;
          </span>
        </WebCreator>
      </Modal>
      <Modal isOpen={showPrint}>
        <PrintCreator>
          <span
            onClick={() => setShowPrint(!showPrint)}
            className="close_button"
          >
            &#10006;
          </span>
        </PrintCreator>
      </Modal>
    </div>
  );
};
