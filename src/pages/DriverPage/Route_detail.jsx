import React, { Fragment, useState } from "react";

import "./driver.css";
import { Link, useLocation } from "react-router-dom";

function Route_details(props){
    const location = useLocation();
    const { state } = props.location;
 const { origin,destination,total_distance_inkm,created_time,status,start_time,end_time } = state;



    {/* 
        class Route(models.Model):
    origin = models.CharField('origin', max_length=255)
    destination = models.CharField('origin', max_length=255)
    start_time = models.DateTimeField('start_time', default=datetime.now())
    end_time = models.DateTimeField('end_time', null= True, blank=True)
    created_time = models.DateTimeField('created_time', default= datetime.now())
    status = models.CharField('status', max_length=50, null=True, blank=True)
    driver = models.ForeignKey(CustomUser, on_delete=models.CASCADE) */}
    return(<div className="route-detail">
            <div className="route-detail-info">
                <p>Route started at: <span className="name-of-city">{origin}</span></p>
                <p >Route final point is: <span className="name-of-city">{destination}</span></p>
                <p className="times-of-route"> Date That route was created: <span className="time-route">{created_time}</span>  </p>
                <p className="times-of-route">Driver started route at time: <span className="time-route">{start_time} </span>  </p>
                <p className="times-of-route">Driver arrived at time: <span className="time-route">{end_time}</span> </p>
            <p> Status of route is: <span className="route-det-status">{status}</span></p>    
        </div>
        <Link
            to={{
            pathname: "/driver",
            }}
        >
            <p className="d">Go back</p>
        </Link>
        </div>
    )
}

export default Route_details;