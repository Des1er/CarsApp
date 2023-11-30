import React, { Fragment, useState } from "react";

import { Link, useLocation } from "react-router-dom";
import "../DriverPage/driver.css"

function Fueling(props){
    const user = props.location.state;
    return(<div>
        <div className="personal-details box-1">
            <img src={require("../../ic/driver_avatar.jpg")} alt="avatar"  className="avatar"/>
            <div className='personal-info'>
                <h4 className='name-surname'>{user.firstname} {user.secondname}</h4>
                <p className='role'> Role: {user.role}</p>
                {/* {data.photo} */}
                <p className="info">Email: {user.email}   | Id: {user.government_id}  |  Phone number: {user.phone_number}</p>
            </div>

        </div>
    </div>)
}

export default Fueling;
