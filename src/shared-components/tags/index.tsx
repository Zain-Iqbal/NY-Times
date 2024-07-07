import React from "react";

import './styles.scss'
const Tags = ({list=[]}) => {

    return  <div className={'tag-container'}>
        {list.map((item , index)=>  <p key={`tag${index}`} className={'tag'}>{item}</p>)}
    </div>
}

export default Tags
