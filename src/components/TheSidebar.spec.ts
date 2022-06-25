import { render } from '@testing-library/vue'
import { describe, expect, it, vi } from 'vitest'

import TheSidebar from './TheSidebar.vue'

describe('TheSidebar.spec.js', () => {
  it('should render the component', () => {
    const { html } = render(TheSidebar, {
      global: {
        stubs: ['BaseIcon', 'router-link'],
      },
    })

    expect(html()).toMatchSnapshot()
  })
})
