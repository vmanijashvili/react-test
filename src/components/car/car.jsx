import React from "react";

const Car = (props) => {


    const car_info = props.info;

    return (<div className='cat-info' >
        {car_info.images.length > 0 ? <img src={car_info.images[0]} alt='car' /> : ''}
        <div className='content'>
            <div className='client-name'>{car_info.client_name}</div>
            <div className='date'>{car_info.order_date}</div>
            <div className='description'>{car_info.car_desc}</div>
        </div>
    </div>);


}

export default Car;