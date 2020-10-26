import React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../styles/theme'
// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"

const Providers: React.ComponentType = ({ children }): JSX.Element => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

const customRender = (
  ui: React.ReactElement,
  options: Omit<RenderOptions, 'queries'> = {}
) => render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
