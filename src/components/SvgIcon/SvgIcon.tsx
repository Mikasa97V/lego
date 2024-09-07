import { DetailedHTMLProps, HTMLAttributes } from "react";
import cn from 'classnames'

import styles from './styles.module.scss'

export type IconName = 'message' | 'notification' | 'react'


export interface SvgIconProps extends DetailedHTMLProps<HTMLAttributes<SVGSVGElement>, SVGSVGElement> {
    name: IconName
}

export default function SvgIcon({ name, className, ...otherProps}: SvgIconProps) {
    return (
        <svg className={cn(styles.SvgIcon, className)} {...otherProps} aria-hidden='true'>
            <use href={`#icon-${name}`} />
        </svg>
    )
}