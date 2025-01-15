import React from "react";
import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";

const Text = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Анимация будет выполнена только один раз
        threshold: 0.2 // Анимация начнется, когда элемент будет виден на 10%
    });

    return (
        <Container className={`text2 ${inView ? 'animate' : ''}`} ref={ref}>
            <p style={{ fontSize: '50px' }}>Дорогие гости!</p>
            <p>С радостью приглашаем вас на наше свадебное торжество, которое состоится в кафе “На набережной” в городе Юрьев-Польский. Мы будем счастливы разделить с вами этот особенный день, полный любви и радости.</p>
            <p>Просим вас подтвердить ваше присутствие. <br />
                С нетерпением ждем встречи с вами! <br />
                С любовью, Кристина и Артем
            </p>
        </Container>
    );
};

export default Text;
