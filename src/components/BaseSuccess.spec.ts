import { render } from '@testing-library/vue'
import { describe, expect, it, vi } from 'vitest'

import BaseSuccess from './BaseSuccess.vue'

describe('BaseSuccess.spec.js', () => {
  it('should render the component', () => {
    const { html } = render(BaseSuccess)

    expect(html()).toMatchSnapshot()
  })

  it('should render the component with custom title', () => {
    const { html } = render(BaseSuccess, {
      props: {
        title: 'Hello, please wait we are loading',
      },
    })

    expect(html()).toContain('Hello, please wait we are loading')
  })
})
