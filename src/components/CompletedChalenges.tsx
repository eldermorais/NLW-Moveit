import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/CompletedChalenges.module.css'

export default function CompletedChalenges() {

    const {challengesCompleted} = useContext(ChallengesContext)


    return (
        <div className={styles.completedChalengesContainer}>
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}
