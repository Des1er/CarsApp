import React, { Fragment, useState } from "react";
import data from './DRIVER_MOC.json';
import { Link, useLocation } from "react-router-dom";
import "./driver.css";
import { IoIosSend } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import axios from "axios";





function Car  (prop){
    return(<div className="car">
        <p> Mark of car: {prop.car.mark} Year:{prop.car.year} Plate:{prop.car.plate}</p>
    </div>);
};

function Driver(props){

    const [routesHistory, setRoutesHistory] = useState(data.routes_history);

    const [activeRoute,setActiveRoute] = useState(data.active_route);
    const [assignStatus, setAssignStatus] = useState("notSelected");

    const [assignedRoutes, setAssignedRoutes] = useState(data.assigned_routes);
    
    const [allRoutes, setAllRoutes] = useState("1");

    const [chatMessages, setChatMessages] = useState([]);
    const [message, setMessage] = useState("");
    const location = useLocation();

    const [searchRoute, setSearchRoute] = useState("");
    const [searchRouteDate, setSearchRouteDate] = useState("");
    const [searchRouteEnd, setSearchRouteEnd] = useState("");
    const [searchRouteStatus, setSearchRouteStatus] = useState("");
    const use = 1;

    // const routesHistory = data.routes_history

   const user = location.state;

   const login =  async() => {
   
    const response = await axios.get("http://127.0.0.1:8000/tasks");


    const rout = response.data


    setAllRoutes(rout);
    setAssignedRoutes(rout);
    
    
    const temp = rout.filter(i => !!i.status);
   
    setRoutesHistory(temp);

    const temp1 = rout.filter(i => !i.status);

    setActiveRoute(temp1[0]);

    };

    if (allRoutes === "1"){
        login();
    }

    // const token = response.data.token;

    //

    const completeRout = async(e) => {

        const id = activeRoute.id
        console.log(id);
        if (activeRoute){
        const response = await axios.put(`http://127.0.0.1:8000/tasks/${id}`, {
   
            "origin": `${activeRoute.origin}`,
            "destination": `${activeRoute.destination}`,
            "status": `${assignStatus}`,
            "driver": "1"
        });
    }

 
        // activeRoute.status = assignStatus;
        // if(assignStatus === 'completed'){

        // // setRoutesHistory((prev) => [...prev, activeRoute]);
        // }
    }

    function filter_by(searchRoute,items){

        return items.filter(routesHistory => routesHistory.origin.includes(searchRoute))
        .filter(routesHistory => routesHistory.destination.includes(searchRouteEnd))
        .filter(routesHistory => routesHistory.status.includes(searchRouteStatus))
        .filter(routesHistory => routesHistory.created_time.includes(searchRouteDate));
    }

    const filtered = filter_by(searchRoute,routesHistory);

    function sendMessage(e){
        e.preventDefault();
        setChatMessages((prev) => [...prev, message]);
        setMessage("");
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

        <div className="personal-details box-1">
            <img src={require("../../ic/driver_avatar.jpg")} alt="avatar"  className="avatar"/>
            <div className='personal-info'>
                <h4 className='name-surname'>Michael Shuma</h4>
                <p className='role'> Role: Driver</p>

                <p className="info">email: driver@mail.com  |  Id: 1234 |   Phone number: +1111111 |  Driving id: 21</p>
            </div>

        </div>
        {/* <div className="personal-details box-1">
            <img src={require("../../ic/driver_avatar.jpg")} alt="avatar"  className="avatar"/>
            <div className='personal-info'>
                <h4 className='name-surname'>{data.firstname} {data.secondname}</h4>
                <p className='role'> Role: {data.role}</p>

                <p className="info">email: {data.email} |   Id: {data.government_id}    | Phone number: {data.phone_number}    | Driving id: {data.driving_license_id}</p>
            </div>

        </div> */}



        <div className="routes">

{/* 
        class Route(models.Model):
    origin = models.CharField('origin', max_length=255)
    destination = models.CharField('origin', max_length=255)
    start_time = models.DateTimeField('start_time', default=datetime.now())
    end_time = models.DateTimeField('end_time', null= True, blank=True)
    created_time = models.DateTimeField('created_time', default= datetime.now())
    status = models.CharField('status', max_length=50, null=True, blank=True)
    driver = models.ForeignKey(CustomUser, on_delete=models.CASCADE) */}

            <div className="route-list box-1">
                <h1>ASSIGNED ROUTES</h1>
                <ul >
                {/* {"origin":"atyrau","destination":"aktau","total_distance_inkm":870,"date":"10-08-2003","status":"canceled"} */}
                        {assignedRoutes.map((route) => (
                            <li key={route.created_time}>
                                <h4> From: {route.origin}</h4>
                                <h4>To: {route.destination}</h4>
                                <p>Date:{route.created_time}</p>
                                <p className="assigned-route-status"> Status: {route.status}</p>
                                <Link
                                    to={{
                                    pathname: "/route-det",
                                        state: route ,
                                    }}
                                >
                                    <p className="link-to-route-detail">See route detailes</p>
                                </Link>
                            </li>
                        ))}
                </ul>
            </div>







            <div className="active-route box-1">
                <h1>ACTIVE ROUTE</h1>
                {activeRoute ? <div className="active-route-info">
                    
                    <h4>From: {activeRoute.origin}</h4>
                    <h4>To: {activeRoute.destination}</h4>
                    <p>Date:{activeRoute.created_time}</p>
                
{/* how to change status? */}
                    <div className="active-rout-status">
                        <form >
                            <label htmlFor="status">Status:</label>
                            <select id="status" name="status" onChange={(e)=>(setAssignStatus(e.target.value))}>
                            <option value="notSelected">Select</option>
                                <option value="completed">completed</option>
                                <option value="canceled">canceled</option>
                                <option value="delayed">delayed</option>
                            </select>
                            <button onClick={completeRout}>Change Status</button>
                        </form>
                    </div>
                    <Link
                        to={{
                        pathname: "/route-det",
                            state: activeRoute ,
                        }}
                    >
                        <p className="link-to-route-detail">See route detailes</p>
                    </Link>
                </div> : <p>No active route</p>}
                
            </div>









            <div className="routes-history box-1">
                <h1>ROUTES HISTORY</h1>
                    <div className="search-bar">
                        <div className="search-bar-attribute">
                            <label htmlFor="">Search by Start Point:</label>
                            <input type="text" onChange={(e) =>(setSearchRoute(e.target.value))}/>
                        </div>
                        <div className="search-bar-attribute">
                            <label htmlFor="">Search by End Point:</label>
                            <input type="text" onChange={(e) =>(setSearchRouteEnd(e.target.value))}/>
                        </div>
                        <div className="search-bar-attribute">
                            <label htmlFor="">Search Date:</label>
                            <input type="text" onChange={(e) =>(setSearchRouteDate(e.target.value))}/>
                        </div>
                        <div className="search-bar-attribute">
                            <label htmlFor="">Search Status:</label>
                            <input type="text" onChange={(e) =>(setSearchRouteStatus(e.target.value))}/>
                        </div>
                            
                    </div>
                    <div className="rout-list">
                        <ul>
                            {filtered.map((route) => (
                                <li key = {route.created_time}>
                                    <h4>From: {route.origin}</h4>
                                    <h4>To: {route.destination}</h4>
                                    <p>Date:{route.created_time}</p>
                                    <p className="routes-history-status"> Status: {route.status}</p>
                                    <Link
                                        to={{
                                        pathname: "/route-det",
                                         state: route ,
                                        }}
                                    >
                                        <p className="link-to-route-detail">See route detailes</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
            </div>



            <div className="communication box-1">
            <h1>Chat with Dispatcher</h1>
                <div className="chat">
                
                    <div className="messages-box">
                        
                        <ul>
                                {chatMessages.map((message)=>(
                                    <li key = {message}>
                                        <p>{message}: {data.firstname}</p>
                                        
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <div className="send-message">
                        <form action=""  onSubmit={sendMessage}>
                        <input type="text" value={message} onChange = {(e) => (setMessage(e.target.value))}></input>
                        <button className="send-message-button"><IoIosSend /></button>
                        </form>
                        
                    </div>
                </div>
                <div className="call-box"><a href="tel:+1234567" className="call"> Call <IoIosCall /></a></div>
                
                   
                
            </div>
           
        </div>
    </div>)
}

export default Driver