import { RefObject, RefCallback, ReactNode, MouseEvent } from 'react'
import { LinkProps } from 'next/link'

export type ReferenceType =
  | RefCallback<HTMLAnchorElement>
  | RefObject<HTMLAnchorElement>
  | null

export interface NextComposedProps extends LinkProps {
  className?: string
  ref?: ReferenceType
  children: ReactNode
}

export type TypographyColorType =
  | 'initial'
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'textPrimary'
  | 'textSecondary'
  | 'error'

export interface CustomLinkProps extends LinkProps {
  activeClassName?: string
  className?: string
  naked?: boolean
  prefetch?: boolean
  innerRef?: ReferenceType
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
  children: ReactNode
  color?: TypographyColorType
}
