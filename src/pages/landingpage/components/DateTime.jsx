import { useState, useEffect } from "react";

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function DateTime() {

    const [date, setDate] = useState(new Date());


    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000)
        return () => clearInterval(intervalId);
    }, [])

    return (<div className="date-time-container" style={{ color: "white", fontSize:"30px", marginLeft:"20px" }}>
        <div className="time">{date.toLocaleTimeString()}</div>
        <div className="date">{
            monthNames[date.getMonth()] + " " + date.getDay() + "," + dayNames[date.getDay()]
        }</div>

    </div>);

}

export default DateTime;


