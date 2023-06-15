import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import styles from './component.module.scss'
import { Crumb, CrumbLine } from './crumb'

const Layout: React.FC = () => {

    const { pathname } = useLocation()

    return (
        <>

            <div className={styles.breadcrumbs}>
                <Crumb value='1' active={pathname === '/1' || pathname === '/2' || pathname === '/3'} />
                <CrumbLine active={pathname === '/2' || pathname === '/3'} />
                <Crumb value='2' active={pathname === '/2' || pathname === '/3'} />
                <CrumbLine active={pathname === '/3'} />
                <Crumb value='3' active={pathname === '/3'} />
            </div>
            <div className={styles.breadcrumbs}>
                <p>1</p>
                <p>2</p>
                <p>3</p>
            </div>
            <Outlet />
        </>
    )
}

export default Layout