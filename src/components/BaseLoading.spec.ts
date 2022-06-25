import { render } from '@testing-library/vue'
import { describe, expect, it, vi } from 'vitest'

import BaseLoading from './BaseLoading.vue'

describe('BaseLoading.spec.js', () => {
  it('should render the component', () => {
    const { html } = render(BaseLoading)

    expect(html()).toMatchSnapshot()
  })

  it('should render the component with custom title', () => {
    const { html } = render(BaseLoading, {
      props: {
        title: 'Hello, please wait we are loading',
      },
    })

    expect(html()).toContain('Hello, please wait we are loading')
  })
})
