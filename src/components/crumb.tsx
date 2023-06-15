import React from 'react'
import styles from './component.module.scss'

type TCrumb = {
    active: boolean,
    value?: string
}

export const Crumb: React.FC<TCrumb> = ({ active }) => {
    return (
        active
            ? <div>
                <div className={styles.crumb_active}><span>.</span></div>
            </div>
            : <div>
                <div className={styles.crumb}></div>
            </div>
    )
}

export const CrumbLine: React.FC<TCrumb> = ({ active }) => {
    return (
        active
            ? <div className={styles.crumbline_active}></div>
            : <div className={styles.crumbline}></div>
    )
}

