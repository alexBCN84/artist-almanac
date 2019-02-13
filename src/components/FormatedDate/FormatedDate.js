import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../../helpers';

const formatedDate = props => {

    const date = formatDate(props.date);
    const style = {
        dateCard: {
            position: "relative",
            width: "90%",
            margin: "5%",
            border: "1px solid #57B3B1",
            backgroundColor: "#57B3B1",
            boxShadow: "0 3px 15px 0 rgba(0,0,0,.09)",
            borderRadius: 4
        },
        year: {
            position: "absolute",
            right: 5,
            top: 3,
            color: "#fff",
            fontSize: 10
        },
        month: {
            backgroundColor: "#fff",
            color: "#57B3B1",
            paddingLeft: 5,
            paddingRight: 5,
            borderLeft: "1px solid rgba(0,0,0,.09)",
            borderRight: "1px solid rgba(0,0,0,.09)",
            borderRadius: 4

        },
        day: {
            position: "absolute",
            display: "inline-block",
            color: "#fff",
            fontSize: 15,
            left: 10,
            fontWeight: 800
        }
    }

    return (
        <section style={{ ...style.dateCard }}>
            <span id="day" style={{ ...style.day }}>{date.day}</span>
            <span id="month" style={{ ...style.month }}>{date.month}</span>
            <span id="year" style={{ ...style.year }}>{date.year}</span>
        </section>
    )
};

formatedDate.propTypes = {
    date: PropTypes.string.isRequired
}
export default formatedDate;