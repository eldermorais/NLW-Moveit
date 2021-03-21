import { useContext } from "react"
import { CountDownContext } from "../contexts/CountDownContext"
import styles from "../styles/components/CountDown.module.css"


export default function CountDown() {

    const {
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        startCountDown, 
        resetCountDown
    } = useContext(CountDownContext)

    const [minuteLeft, minuteRigth] = String(minutes).padStart(2, '0').split('')
    const [secondeLeft, secondRigth] = String(seconds).padStart(2, '0').split('')

    


    return (
        <div>
            <div className={styles.countDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRigth}</span>                
                </div>

                <span>:</span>

                <div>
                    <span>{secondeLeft}</span>
                    <span>{secondRigth}</span>
                </div>
            </div>

            {hasFinished ? (
                <button 
                disabled 
                className={`${styles.countDownButton}`}
            >
                Ciclo encerrado
                <img src="icons/close.svg" alt="cancel"/>
                </button>
            ):
                <>
                {isActive ? (
                    <button 
                        type="button" 
                        className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
                        onClick={resetCountDown}
                    >
                        Abandonar ciclo
                        <img src="icons/close.svg" alt="cancel"/>
                    </button>
            ) : (
                    <button 
                        type="button" 
                        className={styles.countDownButton}
                        onClick={startCountDown}
                    >
                        Iniciar um ciclo
                    </button>
                )}
                </>
            }
        </div>
    )
}
