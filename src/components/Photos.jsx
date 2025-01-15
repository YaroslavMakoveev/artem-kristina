import React from "react";
import { Container } from "react-bootstrap";
import { motion } from 'framer-motion';
import photos from '../uploads/photos.png';

const Photos = () => {
    return (
        <Container className='photos'>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2 }}
            >
                <img src={photos} alt="photos" />
            </motion.div>
            <motion.p
                className="text"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2 }}
            >
                Артем
            </motion.p>
            <motion.p
                className="text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >
                +
            </motion.p>
            <motion.p
                className="text"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2 }}
            >
                Кристина
            </motion.p>
        </Container>
    );
}

export default Photos;
