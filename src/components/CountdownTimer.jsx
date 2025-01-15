import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import dateImage from '../uploads/date.svg';

const CountdownTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
    const [ref, inView] = useInView({
        triggerOnce: true, // Анимация будет выполнена только один раз
        threshold: 0.4 // Анимация начнется, когда элемент будет виден на 60%
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        return () => clearTimeout(timer);
    });

    const getLabel = (value, labels) => {
        const lastDigit = value % 10;
        const lastTwoDigits = value % 100;

        if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
            return labels[2];
        }

        switch (lastDigit) {
            case 1:
                return labels[0];
            case 2:
            case 3:
            case 4:
                return labels[1];
            default:
                return labels[2];
        }
    };

    return (
        <Container className={`date ${inView ? 'animate' : ''}`} ref={ref}>
            <img src={dateImage} alt="date" />
            <p style={{fontSize: 'clamp(20px, 13vw, 60px)', marginBottom: '-10px'}}>Через:</p>
            <div className="timer">
                <div className="timer-section">
                    <div className="timer-number">{timeLeft.days}</div>
                    <div className="timer-label">{getLabel(timeLeft.days, ["День", "Дня", "Дней"])}</div>
                </div>
                <div className="timer-section">
                    <div className="timer-number">{timeLeft.hours}</div>
                    <div className="timer-label">{getLabel(timeLeft.hours, ["Час", "Часа", "Часов"])}</div>
                </div>
                <div className="timer-section">
                    <div className="timer-number">{timeLeft.minutes}</div>
                    <div className="timer-label">{getLabel(timeLeft.minutes, ["Минута", "Минуты", "Минут"])}</div>
                </div>
            </div>
        </Container>
    );
};

const calculateTimeLeft = (targetDate) => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
        };
    }

    return timeLeft;
};

const DateComponent = () => {
    const targetDate = new Date("2025-08-02T15:00:00"); // Замените на дату свадьбы
    return <CountdownTimer targetDate={targetDate} />;
};

export default DateComponent;