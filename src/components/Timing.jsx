import React from "react";
import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";

import timing from '../uploads/timing.svg'


const Timing = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    return (
        <Container className={`timing ${inView ? 'animate' : ''}`} ref={ref}>
            <p>Тайминг</p>
            <img src={timing} alt="timing" />
        </Container>
    );
};

export default Timing;
