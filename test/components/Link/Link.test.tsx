import React from 'react'
import { render, cleanup } from '../../utils'

import Link from '../../../src/components/Link/Link'
import { CustomLinkProps } from '../../../src/components/Link/Link.types'

describe('Link', () => {
  let props: Omit<CustomLinkProps, 'children'>

  beforeEach(() => {
    props = {
      href: 'https://demo.com',
      color: 'secondary',
    }
  })

  afterEach(cleanup)

  const renderComponent = () => render(<Link {...props}>CustomLink</Link>)

  it('should match the snapshot', () => {
    const { asFragment } = renderComponent()
    expect(asFragment).toMatchSnapshot()
  })
})
