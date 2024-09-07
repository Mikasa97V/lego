import { ReactNode } from 'react';
import cn from "classnames";

import styles from './styles.module.scss'
import { Button } from '../Button/Button';

interface ModalProps {
    title?: string
    children?: ReactNode
    buttonText?: string
    onSubmit?: () => void
    onClose?: (value: boolean) => void
    size?: 's' | 'm' | 'l'
}

export function Modal({ title, children, buttonText, onSubmit, onClose, size = 's' }: ModalProps) {
    const TopContainerClass = cn(styles.ModalWindow__TopContainer, {
        [styles[`ModalWindow__TopContainer_${size}`]]: size
    })

    function handleClick() {
        onClose?.(false)
    }

    return (
        <div className={styles.Modal} onClick={handleClick}>
            <div className={styles.ModalWindow}>
                <div className={TopContainerClass}>
                    {title && (
                        <div className={styles.ModalWindow__Title}>{title}</div>
                    )}
                    {children}
                </div>
                {buttonText && (
                    <div className={styles.ModalWindow__Footer}>
                        <Button title={buttonText} onClick={onSubmit} />
                    </div>
                )}
            </div>
        </div>
    )
}