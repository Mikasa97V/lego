import { ReactNode } from 'react'

import styles from './styles.module.scss'

interface NotificationsProps {
    helpInfo?: ReactNode
    notificationInfo?: ReactNode
    messanger?: ReactNode
}

export function Notifications({ helpInfo, notificationInfo, messanger }: NotificationsProps) {
    function handleClickHelpIcon() {
        return helpInfo
    }


    return (
        <div className={styles.Notifications}>
            {messanger && (
                <div className={styles.Notifications__Icon} onClick={handleClickHelpIcon}>
                    <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '2px' }}>
                        <path d="M21.0039 12C21.0039 16.9706 16.9745 21 12.0039 21C9.9675 21 3.00463 21 3.00463 21C3.00463 21 4.56382 17.2561 3.93982 16.0008C3.34076 14.7956 3.00391 13.4372 3.00391 12C3.00391 7.02944 7.03334 3 12.0039 3C16.9745 3 21.0039 7.02944 21.0039 12Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            )}
            {notificationInfo && (
                <div className={styles.Notifications__Icon} onClick={handleClickHelpIcon}>
                    <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_15_159)">
                            <path d="M9.5 19C8.89555 19 7.01237 19 5.61714 19C4.87375 19 4.39116 18.2177 4.72361 17.5528L5.57771 15.8446C5.85542 15.2892 6 14.6774 6 14.0564C6 13.2867 6 12.1434 6 11C6 9 7 5 12 5C17 5 18 9 18 11C18 12.1434 18 13.2867 18 14.0564C18 14.6774 18.1446 15.2892 18.4223 15.8446L19.2764 17.5528C19.6088 18.2177 19.1253 19 18.382 19H14.5M9.5 19C9.5 21 10.5 22 12 22C13.5 22 14.5 21 14.5 19M9.5 19C11.0621 19 14.5 19 14.5 19" stroke="#ffffff" stroke-linejoin="round"/>
                            <path d="M12 5V3" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                    </svg>
                </div>
            )}
            {helpInfo && (
                <div className={styles.Notifications__Icon} onClick={handleClickHelpIcon}>?</div>
            )}
        </div>
    )
}