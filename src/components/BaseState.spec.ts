import { render, screen } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'

import BaseState from './BaseState.vue'

describe('BaseState.spec.js', () => {
  it('should render the component with idle state', () => {
    const { html } = render(BaseState, {
      global: {
        provide: {
          state: {
            value: 'IDLE',
          },
        },
      },
      slots: {
        default: '<div>im idle slot</div>',
      },
    })

    expect(html()).toMatchSnapshot()
  })

  it('should render the component with loading state', () => {
    const { html } = render(BaseState, {
      global: {
        stubs: ['BaseLoading'],
        provide: {
          state: {
            value: 'LOADING',
          },
        },
      },
    })

    expect(html()).toMatchSnapshot()
  })

  it('should render the component with loading state and loading slot', () => {
    const { html } = render(BaseState, {
      global: {
        stubs: ['BaseLoading'],
        provide: {
          state: {
            value: 'LOADING',
          },
        },
      },
      slots: {
        loading: '<div>im loading slot</div>',
      },
    })

    expect(html()).toMatchSnapshot()
  })

  it('should render the component with success state', () => {
    const { html } = render(BaseState, {
      global: {
        stubs: ['BaseSuccess'],
        provide: {
          state: {
            value: 'SUCCESS',
          },
        },
      },
    })

    expect(html()).toMatchSnapshot()
  })

  it('should render the component with success state', () => {
    const { html } = render(BaseState, {
      global: {
        stubs: ['BaseSuccess'],
        provide: {
          state: {
            value: 'SUCCESS',
          },
        },
      },
    })

    expect(html()).toMatchSnapshot()
  })

  it('should render the component with success state and success slot', () => {
    const { html } = render(BaseState, {
      global: {
        stubs: ['BaseSuccess'],
        provide: {
          state: {
            value: 'SUCCESS',
          },
        },
      },
      slots: {
        success: '<div>success slot</div>',
      },
    })

    expect(html()).toMatchSnapshot()
  })
})
