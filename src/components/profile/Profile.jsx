import React from 'react';
import styles from './Profile.module.css'
import Posts from './posts/Posts';
import Saved from '../saved/Saved';
import { Link } from 'react-router-dom';
import HeaderForUser from './headerForUser/HeaderForUser';


const Profile = () => {

    
    return (
        <div className={styles.profile}>
            <HeaderForUser />
            <Posts />
        </div>
    );
};

export default Profile;