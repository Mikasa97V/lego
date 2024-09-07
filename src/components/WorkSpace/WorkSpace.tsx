import { ReactNode } from 'react'
import { Header } from '../Header/Header'

import { ConfigType } from '../../configTypes'

import styles from './styles.module.scss'

interface Props {
    children?: ReactNode
    componentConfig?: ConfigType
}

export function WorkSpace({ children, componentConfig }: Props) {    
    return (
        <div className={styles.WorkSpace}>
            <Header helpInfo={componentConfig?.helpInfo} notificationInfo={componentConfig?.notificationInfo} messanger={componentConfig?.messanger} userData={componentConfig?.userData}/>
            <div className={styles.WorkSpace__Conatiner}>
                {children}
            </div>
        </div>
    )
}