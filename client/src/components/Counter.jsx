import { useEffect, useState } from "react";

export const Counter = () => {
    const calculateTimeLeft = () => {
        let day = '21'
        let month = '11'
        let year = new Date().getFullYear()
        let difference = +new Date(`${month}/${day}/${year}`) - +new Date()

        let timeLeft = {}

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            }
        }
        return timeLeft
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)
        return () => clearTimeout(timer)
    })
    const timerComponents = []

    Object.keys(timeLeft).forEach((interval, index) => {
        timerComponents.push(
            <span key={index}>
                {timeLeft[interval]} {interval}{" : "}
            </span>
        )
    })

    let display

    if (timerComponents[0] && timerComponents[1] && timerComponents[2] && timerComponents[3]) {

        let day = timerComponents[0]['props']['children'][0]
        let hour = timerComponents[1]['props']['children'][0]
        let minute = timerComponents[2]['props']['children'][0]
        let second = timerComponents[3]['props']['children'][0]

        if (timerComponents[0]['props']['children'][0] < 10) day = `0${timerComponents[0]['props']['children'][0]}`
        if (timerComponents[1]['props']['children'][0] < 10) hour = `0${timerComponents[1]['props']['children'][0]}`
        if (timerComponents[2]['props']['children'][0] < 10) minute = `0${timerComponents[2]['props']['children'][0]}`
        if (timerComponents[3]['props']['children'][0] < 10) second = `0${timerComponents[3]['props']['children'][0]}`
        display =
            <div className="timer">
                <p className="label">
                    <span>Days</span><span>:</span>
                    <span>Hours</span><span>:</span>
                    <span>Minutes</span><span>:</span>
                    <span>Seconds</span>
                </p>
                <p className="digit">
                    <span>{day}</span><span>:</span>
                    <span>{hour}</span><span>:</span>
                    <span>{minute}</span><span>:</span>
                    <span>{second}</span>
                </p>
            </div>

    }
    else display = <span className="end">Time's up!</span>

    return (
        <div className="counter">
            <div className="launch">
                <img src="images/Component 4.png" alt="timer" />
                <span>Days before launching</span>
            </div>
            <div className="">
                {display}
            </div>
        </div>
    )
}