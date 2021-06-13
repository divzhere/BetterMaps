import React from 'react'
import {Card} from "../common/Card"
import TemplateImg from "../../images/template.png"
import {CountryDropdown} from "react-country-region-selector"
import {Button} from "../common/Button"
import { ReactComponent as RoboIcon } from "../../images/icons/robot.svg"
import { ReactComponent as MicIcon} from "../../images/icons/mic.svg"
import Modal from "react-modal"
import {Templates} from "./Templates"
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';

const SizeOptions = [
  { value: 'centimeter', label: 'cm' },
  { value: 'meter', label: 'm' },
  { value: 'feet', label: 'ft' }
]

const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

function valuetext(value) {
  return `${value}`;
}

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
      const [length,setLength] = React.useState('')
      const [width,setWidth] = React.useState('')
      const [zoom, setZoom] = React.useState(30);
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
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
                  <div style={{ marginBottom: "25px" }}>
                    <span className="subtitle_text">Entry Region</span>
                    <CountryDropdown
                      value={country}
                      onChange={setCountry}
                      className="drop_down description_text"
                      tabIndex={1000}
                    />
                  </div>
                  <div>
                    <span className="subtitle_text">Accent</span>
                    <select className="drop_down description_text">
                      <option value="grapefruit">Elegant</option>
                      <option value="lime">Dark</option>
                      <option selected value="coconut">
                        Light
                      </option>
                      <option value="mango">Mango</option>
                    </select>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span className="subtitle_text">Colors scheme</span>
                    {colors.map((color, i) => (
                      <div
                        className="color_scheme_block"
                        style={{ backgroundColor: `${color}` }}
                        key={i}
                      ></div>
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span className="subtitle_text">Zoom</span>
                  <div className="zoom_slider_container" style={{width:'250px',marginLeft:'70px'}}>
                  <PrettoSlider
                      defaultValue={30}
                      aria-labelledby="discrete-slider"
                      getAriaValueText={valuetext}
                      valueLabelDisplay="auto"
                      step={10}
                      marks={true}
                      min={10}
                      max={110}
            
                    />
                  </div>
                 
                  </div>
                 
                  <div className="size_wrapper">
                    <span className="subtitle_text">Size</span>
                    <select className="drop_down description_text size_drop_down">
                      <option selected value="centimeter">
                        cm
                      </option>
                      <option value="meter">m</option>
                      <option value="feet">ft</option>
                      <option value="mango">Mango</option>
                    </select>
                    <div className="size_input_container">
                      <input
                        type="number"
                        onChange={(e) => setLength(e.value)}
                        value={length}
                        className="input_field"
                      />
                      <span>X</span>
                      <input
                        type="number"
                        onChange={(e) => setWidth(e.value)}
                        id="width"
                        value={width}
                        className="input_field"
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span className="subtitle_text">Resolution</span>
                    <input
                      type="number"
                      onChange={(e) => setLength(e.value)}
                      value={length}
                      className="input_field"
                      style={{ width: "80px", marginLeft: "25px" }}
                    ></input>
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
