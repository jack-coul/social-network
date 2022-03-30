import React from 'react';
import styles from './LogoHomePage.module.css'

const LogoHomePage = () => {
    return (
        <>
            <img className={styles.imgLogo} width={103} height={39} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" alt="" />
        </>
    );
};

export default LogoHomePage;