import React, { Component, PropTypes } from 'react';
import { Calendar } from 'react-widgets';



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

const CalendarView = ({ selectedDate, dates, dateChanged, addToDate, removeImage }) => {
    const image = dates[selectedDate];

    return (
        <div>
            <Calendar 
                defaultValue={selectedDate}
                dayComponent={DayComponent}
                footer={true}
                onCurrentDateChange={dateChanged} />
            <input type="text">{image}</input>
            <button click={addToDate}>add it</button>            
        </div>);    
}

CalendarView.displayName = 'Calender';

export default CalendarView;

