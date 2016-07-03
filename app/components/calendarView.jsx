import React, { Component, PropTypes } from 'react';
import { Calendar } from 'react-widgets';

class DayComponent extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { date, label } = this.props;
        const color = date.toDateString() === (new Date()).toDateString() ? "blue" : "yellow";
        const imgStyle = {
            width: 20,
            heigth: 20
        };
        const style = { 
            backgroundColor : color
        }; 

        return (
            <div style={style}>
                {label}
                <img style={imgStyle} src='http://res.cloudinary.com/urbandictionary/image/upload/a_exif,c_fit,h_200,w_200/v1395185546/l2jr1d64b57htqmsnqhp.jpg' alt='wtf' />
            </div>
        );
    }
}

export default class CalendarView extends Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        const { dateChanged } = this.props;

        const changeHandler = (name) => {
            return (date) => console.log(`${name} => ${date}`);
        };

        return <Calendar 
            defaultValue={new Date()}
            dayComponent={DayComponent}
            footer={true}
            onCurrentDateChange={dateChanged} />
    }
}

