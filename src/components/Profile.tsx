import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from "../styles/components/Profile.module.css"

export default function Profile() {

    const {level} = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/eldermorais.png" alt="Elder Morais"/>
            <div>
                <strong>Elder Morais</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}</p>
            </div>
        </div>
    )
}
