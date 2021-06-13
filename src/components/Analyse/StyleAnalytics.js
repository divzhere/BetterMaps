import React from 'react'
import {Card} from "../common/Card"
import TemplateImg from "../../images/template.png"
import {CountryDropdown} from "react-country-region-selector"
import {Button} from "../common/Button"
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#C9C9C9",
    width: "66px",
    boxShadow: 'none',
    marginLeft: '7px'
  },
}));

export const StyleAnalytics = (props) => {
    const classes = useStyles();
    const [country,setCountry] = React.useState("United States")
    return (
      <>
        <Card size="large">
          <div className="creator_card">
            {props.children}
            <div className="title_bar">
              <div className="title_text">Style Analytics</div>
              <div className="subtitle_container">
                <span className="subtitle_text">Style ID</span>{" "}
                <span>MB013425786</span>
              </div>
            </div>
            <div className="form_container">
              <div className="form_row">
                <div className="form_column_first form_column_first_print form_column_first_analyse">
                  <div>
                    <span className="subtitle_text">Entry Region</span>
                    <CountryDropdown
                      value={country}
                      onChange={setCountry}
                      className="drop_down description_text"
                      tabIndex={1000}
                    />
                  </div>

                  <div className="analyse_form_row">
                    <div>
                      <div className="subtitle_text">Nr of Groups</div>
                      <Paper className={classes.paper} />
                    </div>
                    <div>
                      <div className="subtitle_text">Nr of Groups</div>
                      <Paper className={classes.paper} />
                    </div>
                  </div>
                  <div className="analyse_form_row">
                    <div>
                      <div className="subtitle_text">Nr of Layers</div>
                      <Paper className={classes.paper} />
                    </div>
                    <div>
                      <div className="subtitle_text">Nr of Layers</div>
                      <Paper className={classes.paper} />
                    </div>
                  </div>
                  <div className="analyse_form_row">
                    <div>
                      <div className="subtitle_text">Nr of Colors</div>
                      <Paper className={classes.paper} />
                    </div>
                    <div>
                      <div className="subtitle_text">Nr of Colors</div>
                      <Paper className={classes.paper} />
                    </div>
                  </div>
                  <div className="analyse_form_col">
                    <div>
                      <div className="subtitle_text">Glyph URL</div>
                      <Paper className={classes.paper} />
                    </div>
                    <div>
                      <div className="subtitle_text">Nr of Layers</div>
                      <Paper className={classes.paper} />
                    </div>
                    <div>
                      <div className="subtitle_text">Nr of Colors</div>
                      <Paper className={classes.paper} />
                    </div>
                  </div>
                </div>
                <div className="analyse_img">
                  <img src={TemplateImg}></img>
                </div>
              </div>
            </div>
            <div className="bottom_row" style={{ alignItems: "flex-end" }}>
              <div rows="4" cols="50" className="analyse_textarea">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem…
              </div>
              <Button className="create_map_button subtitle_text">
                Download JSON
              </Button>
            </div>
          </div>
        </Card>
      </>
    );
}
