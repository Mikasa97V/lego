import { ReactNode } from 'react'

export interface ConfigType {
    userData?: {
        avatarLogo?: ReactNode
        user?: {
            name: string
            email: string
        }
    }
    helpInfo?: ReactNode
    notificationInfo?: ReactNode
    messanger?: ReactNode
}