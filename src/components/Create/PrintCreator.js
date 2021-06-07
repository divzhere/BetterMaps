import React from 'react'
import {Card} from "../common/Card"
import TemplateImg from "../../images/template.png"
import {CountryDropdown} from "react-country-region-selector"
import MultiRangeSlider from "../common/MultiRangeSlider"
import {Button} from "../common/Button"
import { ReactComponent as RoboIcon } from "../../images/icons/robot.svg"
import { ReactComponent as MicIcon} from "../../images/icons/mic.svg"
import Modal from "react-modal"
import {Templates} from "./Templates"
export const PrintCreator = (props) => {
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
      const [style,setStyle] = React.useState("")
      const [showTemplates,setShowTemplates] = React.useState(false)
    return (
      <>
        <Card size="large">
          <div className="creator_card">
            {props.children}
            <div className="title_bar">
              <div className="title_text">Print map creator</div>
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
            <div className="form_container">
              <div className="form_row">
                <div className="form_column_first form_column_first_print">
                  <div style={{marginBottom:"20px"}}>
                    <span className="subtitle_text">Entry Region</span>
                    <CountryDropdown
                      value={country}
                      onChange={setCountry}
                      className="drop_down description_text"
                      tabIndex={1000}
                    />
                  </div>
                  <div  style={{marginBottom:"20px", display:'flex'}}>
                  <span className="subtitle_text">Colors scheme</span>
                  {colors.map((color, i) => (
                    <div
                      className="color_scheme_block"
                      style={{ backgroundColor: `${color}` }}
                      key={i}
                    ></div>
                  ))}
                  </div>
                  <div  style={{marginBottom:"20px"}}>
                  <div className="subtitle_text zoom_text">Min-max Zoom</div>
                  <MultiRangeSlider
                    min={0}
                    max={1000}
                    style={{ marginLeft: "10px" }}
                  />
                  </div>
                </div>
                <div className="form_column_second print_img">
                  <img src={TemplateImg}></img>
                </div>
              </div>
            </div>

            <div className="bottom_row">
              <Button className="robo_mic_button">
                <RoboIcon />
                <MicIcon />
              </Button>
              <Button className="create_map_button subtitle_text">
                Create Map
              </Button>
            </div>
          </div>
        </Card>
        <Modal isOpen={showTemplates}>
          <Templates>
            <div className="title_bar">
              <div className="title_text">Select a template to use:</div>
              <span
                onClick={() => setShowTemplates(!showTemplates)}
                className="close_button"
              >
                &#10006;
              </span>
            </div>
          </Templates>
        </Modal>
      </>
    );
}
