import React, { useState } from 'react';
import '../index.css'

function Services(){
    return(<div className='service'>
        <h1>Our services</h1>
        <div className="service-box">
            <div className='service-box-item1'>
                <h1>
                    Driver
                </h1>
                <p>
                Experience the epitome of convenience with our professional driver services. Whether you're heading to a crucial business meeting, a special event, or simply want a stress-free ride, our skilled and courteous drivers are at your service. Rest assured, safety is our top priority, and our drivers are well-trained to navigate the roads with precision and care. Sit back, relax, and enjoy the journey while we take care of the driving.
                </p>
            </div>
            <div className='service-box-item2'>
                <h1>FUELING</h1>
                <p>Streamline your operations with our efficient fueling services. We offer a hassle-free solution to keep your fleet fueled and ready for the road. Our strategically located fuel stations provide quality fuel, and our automated systems ensure a quick and seamless process. Save time and resources with our fueling services, allowing you to focus on what matters most—your business.</p>
            </div>
            <div className='service-box-item3'>
                <h1>MAINTENCE</h1>
                <p>Keep your vehicles in top-notch condition with our comprehensive maintenance services. Our team of certified technicians is dedicated to ensuring your fleet operates smoothly and efficiently. From routine inspections to major repairs, we've got you covered. We understand the importance of minimizing downtime, so our services are prompt and thorough, helping you maintain peak performance and extend the lifespan of your vehicles.</p>
            </div>
        </div>
    
    </div>)
}
export default Services