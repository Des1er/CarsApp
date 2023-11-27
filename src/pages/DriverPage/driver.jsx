import React, { Fragment, useState } from "react";
import data from './DRIVER_MOC.json';
import "./driver.css";

function Car  (prop){
    return(<div className="car">
        <p> Mark of car: {prop.car.mark} Year:{prop.car.year} Plate:{prop.car.plate}</p>
    </div>);
};

function Driver(){
    const [car,setCar] = useState(data.cars);
    const [routesHistory, setRoutesHistory] = useState(data.routes_history);
    const [activeRoute,setActiveRoute] = useState(data.active_route);
    const [assignedRoutes, setAssignedRoutes] = useState(data.assigned_routes)


    function completeRout(e){
        e.preventDefault();
        console.log(e.target.value)
        setRoutesHistory((prev) => [...prev, activeRoute]);
    }

// email = models.EmailField()
// government_id = models.IntegerField()
// firstname = models.CharField()
// secondname = models.CharField()
// phone_number = models.CharField()
// photo = models.ImageField()
// role = models.CharField()
// driving_license_id = models.IntegerField()

    return (<div className="driver">
        <div className="personal-details box">
            <img src={require("./driver_avatar.jpg")} alt="avatar"  className="avatar"/>
            <div className='personal-info'>
                <h4 className='name-surname'>{data.firstname} {data.secondname}</h4>
                <p className='role'> Role: {data.role}</p>
                {/* <p className="info">{date.email} {date.government_id}{date.phone_number}{date.photo}{date.role}{date.driving_license_id}</p> */}
            </div>

        </div>
        <div className="routes">



            <div className="route-list box">
                <h1>ASSIGNED ROUTES</h1>
                <ul >
                {/* {"start_point":"atyrau","end_point":"aktau","total_distance_inkm":870,"date":"10-08-2003","status":"canceled"} */}
                        {assignedRoutes.map((route) => (
                            <li key={route.date}>
                                <h4> From: {route.start_point}</h4>
                                <h4>To: {route.end_point}</h4>
                                <p>Distance:{route.total_distance_inkm}km date:{route.date}</p>
                                <p className="assigned-route-status"> Status: {route.status}</p>
                            </li>
                        ))}
                </ul>
            </div>







            <div className="active-route box">
                <h1>ACTIVE ROUTE</h1>
                <div className="active-route-info">
                    <h4>From: {activeRoute.start_point}</h4>
                    <h4>To: {activeRoute.end_point}</h4>
                    <p>Distance: {activeRoute.total_distance_inkm} date:{activeRoute.date}</p>
                
{/* how to change status? */}
                <div className="active-rout-status">
                     <form >
                        <label htmlFor="status">Status:</label>
                        <select id="status" name="status" onSubmit={completeRout}>
                            <option value="completed">completed</option>
                            <option value="canceled">canceled</option>
                            <option value="delayed">delayed</option>
                        </select>
                        <button >Change Status</button>
                    </form>
                </div>
                </div>
            </div>









            <div className="routes-history box">
                <h1>ROUTES HISTORY</h1>
                    <div className="search-bar">

                    </div>
                    <div className="rout-list">
                        <ul>
                            {routesHistory.map((route) => (
                                <li key = {route.date}>
                                    <h4>{route.start_point}</h4>
                                    <h4>{route.end_point}</h4>
                                    <p>Distance:{route.total_distance_inkm}km date:{route.date}</p>
                                    <p className="routes-history-status"> Status: {route.status}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
            </div>



            <div className="communication box">
                <div className="chat">
                
                </div>
                <div className="call">
                    
                </div>
            </div>
           
        </div>
    </div>)
}

export default Driver