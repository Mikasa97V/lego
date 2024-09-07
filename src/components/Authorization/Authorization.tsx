import { ReactNode, useState } from "react"

import styles from './styles.module.scss'

interface AuthorizationProps {
    avatarLogo?: ReactNode
    user?: {
        name: string
        email: string
    }
}

export function Authorization({ avatarLogo, user }: AuthorizationProps) {
    const [isOpenAuthModal, setIsOpenAuthModal] = useState(false)

    const defaultUser = {
        name: 'Иван Иванов',
        email: 'test.email@mail.ru'
    }

    function handleClick() {
        setIsOpenAuthModal((prev) => !prev)
    }

    return (
        <div className={styles.Authorization}>
            {avatarLogo ?? (
                <div className={styles.Authorization__Avatar}>
                    {user?.name[0] ?? defaultUser?.name[0]}
                </div>
            )}
            <div className={styles.UserWrapper} onClick={handleClick}>
                <div className={styles.UserWrapper__Name}>{user?.name ?? defaultUser?.name}</div>
                <div className={styles.UserWrapper__Email}>{user?.email ?? defaultUser?.email}</div>
                {isOpenAuthModal && (
                    <div className={styles.UserWrapper__ExitModal}>
                        <div className={styles.UserWrapper__ExitButton}>Выход</div>
                    </div>
                )}
            </div>
        </div>
    )
}