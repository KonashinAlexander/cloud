import React, { useEffect } from 'react'
import styles from '../components/component.module.scss'
import success from '../images/Vector.svg'
import fail from '../images/Circle Cancel Filled.svg'
import close from '../images/Button Icon Transparent.svg'
import Button from './button';
import { useNavigate } from 'react-router-dom'
import { createPortal } from 'react-dom'
import Overlay from './overlay'

const modalRoot = document.querySelector('#modals') as HTMLElement;

type TModalProps = {
    data: {
        status: string,
        message: string,
    },
    setShowModal: any,
}

const Modal: React.FC<TModalProps> = ({ data, setShowModal }) => {
    const navigate = useNavigate()

    const moveToStart = () => {
        setShowModal(false)
        navigate('/', { replace: true })
    }

    useEffect(() => {
        function closeOnEsc(e: { key: string }) {
            if (e.key === "Escape" || e.key === "Esc") {
                setShowModal(false)
            }
        }

        const closeOnClick = (e: any) => {
            if (e.target.className.includes('overlay')) {
                setShowModal(false)
            }
        }

        document.addEventListener("keyup", closeOnEsc);
        document.addEventListener("click", closeOnClick);

        return () => {
            document.removeEventListener("keyup", closeOnEsc);
            document.removeEventListener("click", closeOnClick);
        };
    }, [setShowModal]);

    return createPortal(
        <>
            <div className={styles.modal}>
                {
                    data && data.status === 'success'
                        ? <>
                            <h1>{data.message}</h1>
                            <div className={styles.decor_green}>
                                <img src={success} alt='success icon'></img>
                            </div>
                            <div className={styles.footer}>
                                <Button text={'На главную'} onClick={() => { moveToStart() }} />
                            </div>

                        </>
                        : <>
                            <div className={styles.header}>
                                <h1>Ошибка</h1>
                                <img src={close} alt='close icon' onClick={() => { setShowModal(false) }}></img>
                            </div>
                            <div className={styles.decor}>
                                <img src={fail} alt='fail icon'></img>
                            </div>
                            <div className={styles.footer_right}>
                                <Button text={'Назад'} onClick={() => { setShowModal(false) }} />
                            </div>

                        </>
                }

            </div >
            <Overlay />
        </>,
        modalRoot
    )
}

export default Modal