import { ReactNode } from 'react'

import styles from './styles.module.scss'


interface LayoutProps {
    leftSide?: ReactNode
    rightSide?: ReactNode
}

export function Layout({ leftSide, rightSide }: LayoutProps) {
    
    return (
        <div className={styles.Layout}>
            <div className={styles.Layout__LeftContainer}>{leftSide}</div>
            <div className={styles.Layout__RightContainer}>{rightSide}</div>
        </div>
    )
}