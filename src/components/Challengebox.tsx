import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import { CountDownContext } from '../contexts/CountDownContext'
import styles from '../styles/components/ChallengeBox.module.css'

export default function ChallengeBox() {

    const { activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext)
    const { resetCountDown,} = useContext(CountDownContext)
    

    function handleChallengeSucceeded(){
        completeChallenge()
        resetCountDown()

    }

    function handleChallengefailed(){
        resetChallenge()
        resetCountDown()
    }



    return (
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount}</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button 
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={handleChallengefailed}
                        >
                            Falhei
                        </button>

                        <button 
                            type="button"
                            className={styles.challengeSucceededButton}
                            onClick={handleChallengeSucceeded}

                        >
                            Completei
                        </button>

                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    Avance de level completando desafios.
                </p>
            </div>
            )}
            
        </div>
    )
}
