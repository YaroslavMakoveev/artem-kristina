import React from "react";
import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";

const Map = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Анимация будет выполнена только один раз
        threshold: 0.2 // Анимация начнется, когда элемент будет виден на 10%
    });

    return (
        <Container className={`map ${inView ? 'animate' : ''}`} ref={ref}>
            <p>Карта</p>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d479.92606785946197!2d39.678141305722065!3d56.49479466124159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ca359861c31dd%3A0xdadb665c7f577b88!2z0J3QsCDQndCw0LHQtdGA0LXQttC90L7QuQ!5e0!3m2!1sru!2sru!4v1736795373607!5m2!1sru!2sru"
                width="360"
                height="200"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="map" // Добавьте уникальный title для iframe
            ></iframe>
            <p className="textend" style={{marginTop: '20px'}}>Мы вас ждем ❤ </p>
        </Container>
    );
};

export default Map;
