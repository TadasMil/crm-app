import { render, screen } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'

import BaseButton from './BaseButton.vue'

describe('BaseButton.spec.js', () => {
  it('should render primary button', () => {
    const { html } = render(BaseButton, {
      props: {
        buttonType: 'primary',
      },
    })

    expect(html()).toMatchSnapshot()
  })

  it('should render success button', () => {
    const { html } = render(BaseButton, {
      props: {
        buttonType: 'success',
      },
    })

    expect(html()).toMatchSnapshot()
  })

  it('should render default slot', () => {
    const wrapper = render(BaseButton, {
      slots: {
        default: '<h2>default</h2>',
      },
    })

    const buttonDefaultSlotText = screen.findByText('default')

    expect(wrapper).toContain(buttonDefaultSlotText)
  })

  it('should render icon slot', () => {
    const { html } = render(BaseButton, {
      slots: {
        icon: '<div>icon</div>',
      },
    })

    expect(html()).toContain('icon')
  })

  it('should emit click event', async () => {
    const { emitted } = render(BaseButton, {
      slots: {
        default: '<h2>default</h2>',
      },
    })

    const user = userEvent.setup()
    const button = screen.getByRole('button')
    await user.click(button)

    expect(emitted().click).toBeTruthy()
    expect(emitted().click.length).toBe(1)
  })
})
