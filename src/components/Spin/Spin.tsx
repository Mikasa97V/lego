import styles from './styles.module.scss'

interface SpinProps {
    color?: string
}

export function Spin({ color }: SpinProps) {
    return (
        <span className={styles.Spin} style={{ borderColor: color }}></span>
    )
}