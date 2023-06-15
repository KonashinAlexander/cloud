import styles from './pages.module.scss'
import Button from '../components/button'
import { useNavigate } from 'react-router-dom'

const NotFoundPage: React.FC = () => {
    const navigate = useNavigate()
    const moveToStart = () => {
        navigate('/', { replace: true })
    }

    return (
        <div className={styles.container}>
            <h1>404</h1>
            <div className={styles.footer}>
                <Button text={'На главную'} onClick={() => { moveToStart() }} />
            </div>
        </div>
    )
}

export default NotFoundPage
