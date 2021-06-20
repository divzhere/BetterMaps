import React from 'react'
import {Card} from "../common/Card"
import TemplateImg from "../../images/template.png"
import {CountryDropdown} from "react-country-region-selector"
import MultiRangeSlider from "../common/MultiRangeSlider"
import {Button} from "../common/Button"
import { ReactComponent as RoboIcon } from "../../images/icons/robot.svg"
import { ReactComponent as MicIcon} from "../../images/icons/mic.svg"
import Modal from "react-modal"
import {TemplateList} from "./TemplateList"

export const WebCreator = (props) => {
    const [repeat] = React.useState([1,2,3,4])
    const [country,setCountry] = React.useState("United States")
    const [colors] = React.useState([
      "#006837",
      "#FFAB00",
      "#00B0FF",
      "#64DD17",
      "#AA00FF",
      "#424242",
      ]);
      const [showTemplates,setShowTemplates] = React.useState(false)
      const [showMap, setShowMap] = React.useState(false);
      const [ mapJson, setMapJson ] = React.useState({
        region : {},
        colorScheme : '',
        mapLink: "",
        styleName : ""
      })

    return (
      <>
        <Card size="large">
          <div className="creator_card">
            {props.children}
            <div className="title_bar">
              {console.log(mapJson)}
              <div className="title_text">Web map creator</div>
              <div className="subtitle_container">
                <span className="subtitle_text">Template ID</span>{" "}
                <span
                  className="id_text_chip"
                  onClick={() => setShowTemplates(!showTemplates)}
                >
                  MB013425786
                </span>
              </div>
            </div>
            <div className="template_section">
              {repeat.map((i) => (
                <img key={i} src={TemplateImg}></img>
              ))}
            </div>
            <div className="form_container">
              <div className="form_row">
                <div className="form_column_first">
                  <span className="subtitle_text">Entry Region</span>
                  <CountryDropdown
                    value={country}
                    onChange={setCountry}
                    className="drop_down description_text"
                    tabIndex={1000}
                  />
                </div>
                <div className="form_column_second">
                  <span className="subtitle_text">Colors scheme</span>
                  {colors.map((color, i) => (
                    <div
                      className="color_scheme_block"
                      style={{ backgroundColor: `${color}` }}
                      key={i}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="form_row">
                <div className="form_column_first">
                  <div className="subtitle_text">Style</div>
                  <input
                    type="text"
                    onChange={(e) => {
                      setStyle(e.value);
                    }}
                    value={mapJson.styleName}
                    className="input_field"
                  />
                </div>
                <div className="form_column_second">
                  <div className="subtitle_text zoom_text">Min-max Zoom</div>
                  <MultiRangeSlider
                    min={0}
                    max={1000}
                    style={{ marginLeft: "10px" }}
                  />
                </div>
              </div>
            </div>
            <div className="bottom_row">
              <Button className="robo_mic_button">
                <RoboIcon />
                <MicIcon />
              </Button>
              <Button
                className="create_map_button subtitle_text"
                onClick={() => setShowMap(!showMap)}
                disabled={mapJson.mapLink ? false : true}
              >
                Create Map
              </Button>
            </div>
          </div>
        </Card>
        <Modal isOpen={showTemplates}>
          <Card size={"large"} className="template_card_container">
            <div className="templates_card">
              <div className="title_bar">
                <div className="title_text">Select a template to use:</div>
                <span
                  onClick={() => setShowTemplates(!showTemplates)}
                  className="close_button"
                >
                  &#10006;
                </span>
              </div>

              <div className="templates_container">
                {TemplateList.map((template, i) => (
                  <div
                    key={i}
                    className="template"
                    onClick={() => {
                      setMapJson({
                        ...mapJson,
                        mapLink: template.link,
                        styleName: template.name,
                      });
                      setShowTemplates(!showTemplates);
                    }}
                  >
                    <img src={template.img}></img>
                    <span>{template.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </Modal>
        <Modal isOpen={showMap}>
          <div className="iframe_container">
            <span
              onClick={() => {
                setShowMap(!showMap);
                setMapJson({
                  ...mapJson,
                  mapLink: "",
                  styleName: "",
                });
              }}
              className="back_button"
            >
              &#60; Back
            </span>
            <iframe width="1060" height="600" src={mapJson.mapLink}></iframe>
          </div>
        </Modal>
      </>
    );
}
