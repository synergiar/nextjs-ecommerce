import React, { forwardRef, FC } from 'react'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import MuiLink from '@material-ui/core/Link'
import { ReferenceType, NextComposedProps, CustomLinkProps } from './Link.types'

const NextComposed: FC<NextComposedProps> = forwardRef(
  (
    { as, href, children, ...other }: NextComposedProps,
    ref?: ReferenceType
  ) => (
    <NextLink href={href} as={as}>
      <a ref={ref} {...other} data-testid="anchor">
        {children}
      </a>
    </NextLink>
  )
)
NextComposed.displayName = 'NextComposed'

const Link: FC<CustomLinkProps> = ({
  href,
  activeClassName = 'active',
  className: classNameProps,
  innerRef,
  naked,
  ...other
}) => {
  const router = useRouter()
  const pathname = typeof href === 'string' ? href : href.pathname
  const className = clsx(classNameProps, {
    [activeClassName]:
      router && router.pathname === pathname && activeClassName,
  })

  return naked ? (
    <NextComposed className={className} ref={innerRef} href={href} {...other} />
  ) : (
    <MuiLink
      component={NextComposed}
      className={className}
      ref={innerRef}
      href={`${href}`}
      {...other}
    />
  )
}

const ReferenceLink = forwardRef(
  (props: CustomLinkProps, ref: ReferenceType) => (
    <Link {...props} innerRef={ref} />
  )
)

ReferenceLink.displayName = 'ReferenceLink'

export default ReferenceLink
