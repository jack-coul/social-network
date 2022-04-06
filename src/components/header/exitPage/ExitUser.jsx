import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../../images/660350.png'
import styles from './Exit.module.css'

const ExitUser = () => {
    const dispatch = useDispatch();

    const hundleExit = () => {
        dispatch({ type: "exitUser"})
    }
    return (
        <Link to='/' onClick={hundleExit} className={styles.exit} >
            <img width={24} height={24} src={logo} alt="" />
        </Link>
    );
};

export default ExitUser;