import React from 'react'
import {Card} from "../common/Card"
import TemplateImg from "../../images/web_map.png"
import {TemplateList} from "./TemplateList"

export const Templates = (props) => {

    return (
      <>
        <Card size={"large"}>
          <div className="templates_card">
            {props.children}
            <div className="templates_container">
              {TemplateList.map((template,i) => (
                <div key={i} className="template">
                  <img src={template.img}></img>
                  <span>{template.name}</span>
                </div>
              ))}
           </div>
          </div>
        </Card>
      </>
    );
}
