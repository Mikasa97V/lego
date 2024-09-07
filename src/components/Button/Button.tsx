import cn from "classnames";

import { Spin } from "../Spin/Spin";

import styles from './styles.module.scss'

interface ButtonProps {
    title?: string
    type?: 'primary' | 'secondary' | 'bordered'
    loading?: {
        isLoading?: boolean
        loadingText?: string
        color?: string
    }
    onClick?: () => void
}

export function Button({ title, type = 'primary', loading, onClick, ...otherProps}: ButtonProps) {

    const ButtonClass = cn(styles.Button, {
        [styles[`Button_${type}`]]: type,
        [styles[`Button_${type}_${loading?.isLoading ? 'loading' : ''}`]]: loading?.isLoading,
    })

    return (
        <div className={ButtonClass} onClick={onClick} {...otherProps}>
            {loading?.isLoading ? (
                <div className={styles.Button__LoadingWrapper}>
                    <Spin color={loading?.color} />
                    { loading?.loadingText ?? 'Loading'}
                </div>
            ) : (
                <div>
                    {title ?? 'Click me'}
                </div>
            )}
        </div>
    )
}