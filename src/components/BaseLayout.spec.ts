import { render } from '@testing-library/vue'
import { describe, expect, it, vi } from 'vitest'

import BaseLayout from './BaseLayout.vue'

vi.mock('vue-router', () => ({
  useRoute: vi.fn(() => ({ meta: { pageName: 'Home' } })),
}))

describe('BaseLayout.spec.js', () => {
  it('should render the component with pageName', () => {
    const { html } = render(BaseLayout)

    expect(html()).toMatchSnapshot()
  })
})
