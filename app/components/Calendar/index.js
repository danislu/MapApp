import React, { Component, PropTypes } from 'react';
import { Calendar } from 'react-widgets';

import 'react-widgets/lib/scss/react-widgets.scss';

const DayComponent = ({ date, label }) => {
    const color = date.toDateString() === (new Date()).toDateString() ? "blue" : "yellow",
    imgStyle = {
        width: 20,
        heigth: 20
    },
    style = { 
        backgroundColor : color
    }; 

    return (
        <div style={style}>
            {label}
            <img style={imgStyle} src='http://res.cloudinary.com/urbandictionary/image/upload/a_exif,c_fit,h_200,w_200/v1395185546/l2jr1d64b57htqmsnqhp.jpg' alt='wtf' />
        </div>
    );
}

const CalendarView = ({ dateChanged }) => {
    const changeHandler = (name) => {
        return (date) => console.log(`${name} => ${date}`);
    };

    return <Calendar 
        defaultValue={new Date()}
        dayComponent={DayComponent}
        footer={true}
        onCurrentDateChange={dateChanged} />    
}

CalendarView.displayName = 'Calender';

export default CalendarView;

