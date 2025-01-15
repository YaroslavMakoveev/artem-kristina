import React from "react";
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import flowersNAV from '../uploads/flowersNAV.svg';

const NavBar = () => {
    return (
        <Container className="background">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2}}
            >
                <img src={flowersNAV} alt="flowers" />
                <p className="header">Приглашение</p>
            </motion.div>
        </Container>
    );
}

export default NavBar;
