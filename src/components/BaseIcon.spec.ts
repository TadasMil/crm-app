import { render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'

import BaseIcon from './BaseIcon.vue'

describe('BaseIcon.spec.js', () => {
  it('should render icon', () => {
    const { html } = render(BaseIcon, {
      props: {
        icon: 'user',
      },
    })

    expect(html()).toMatchSnapshot()
  })
})
