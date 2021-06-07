import React from 'react'
import {Card} from "../common/Card"
import TemplateImg from "../../images/web_map.png"
export const Templates = (props) => {
    const [repeat] = React.useState([1,2,3,4,5,6,7,8])
    return (
      <>
        <Card size={"large"}>
          <div className="templates_card">
            {props.children}
            <div className="templates_container">
              {repeat.map((i) => (
                <div key={i} className="template">
                  <img src={TemplateImg}></img>
                  <span>Template Name</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </>
    );
}
