import { render, fireEvent } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import '../modules/useVeeValidations.js'

import BaseInput from './BaseInput.vue'

describe('BaseInput.spec.js', () => {
  it('should render correct component', () => {
    const { html } = render(BaseInput, {
      props: {
        label: 'First Name',
        modelValue: '',
        name: 'name',
        rules: 'required',
      },
    })

    expect(html()).toMatchSnapshot()
  })

  it('should emit movelValue update for input', async () => {
    const { getByRole, emitted } = render(BaseInput, {
      props: {
        label: 'First Name',
        modelValue: '',
        name: 'name',
        rules: 'required',
      },
    })

    const input = getByRole('textbox')
    const user = userEvent.setup()

    await user.type(input, 'my name')

    const lastEmittedValue = emitted()['update:modelValue'].pop()

    expect(emitted()['update:modelValue']).toBeTruthy()
    expect(lastEmittedValue).toStrictEqual(['my name'])
  })

  it('should display required error message given the field is left empty', async () => {
    const { html, getByRole } = render(BaseInput, {
      props: {
        label: 'First Name',
        modelValue: 'My name',
        name: 'name',
        rules: 'required',
      },
    })

    const input = getByRole('textbox')
    const user = userEvent.setup()

    await user.clear(input)

    expect(html()).toContain('This field is required.')
  })

  it('should display email error message given the email with incorrect format', async () => {
    const { html, getByRole } = render(BaseInput, {
      props: {
        label: 'Email',
        modelValue: '',
        name: 'email',
        rules: 'email',
      },
    })

    const input = getByRole('textbox')
    const user = userEvent.setup()

    await user.type(input, 'email')
    await fireEvent.blur(input)

    expect(html()).toContain('This field must be a valid email.')
  })

  it('should display minimum length error message given the input with not enough characters', async () => {
    const { html, getByRole } = render(BaseInput, {
      props: {
        label: 'First Name',
        modelValue: '',
        name: 'name',
        rules: 'min',
      },
    })

    const input = getByRole('textbox')
    const user = userEvent.setup()

    await user.type(input, 'na')
    await fireEvent.blur(input)

    expect(html()).toContain('This field must be at least 3 characters long.')
  })

  it('should display zipcode field error message given the zipcode is not in Lithuanian format', async () => {
    const { html, getByRole } = render(BaseInput, {
      props: {
        label: 'Zip Code',
        modelValue: '',
        name: 'zipcode',
        rules: 'zipcode',
      },
    })

    const input = getByRole('textbox')
    const user = userEvent.setup()

    await user.type(input, 'na')
    await fireEvent.blur(input)

    expect(html()).toContain('This field must be a valid zip code.')
  })
})
