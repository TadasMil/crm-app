import { defineRule } from 'vee-validate'

defineRule('required', (value: string) => {
  if (!value || !value.length) {
    return 'This field is required.'
  }

  return true
})

defineRule('email', (value: string) => {
  if (!value || !value.length) {
    return true
  }

  if (!/^\S+@\S+\.\S+$/.test(value)) {
    return 'This field must be a valid email.'
  }

  return true
})

defineRule('min', (value: string, params: string[]) => {
  if (!value || !value.length) {
    return true
  }

  if (value.length < 3) {
    return 'This field must be at least 3 characters long.'
  }

  return true
})

defineRule('zipcode', (value: string) => {
  if (!value || !value.length) {
    return true
  }

  if (!/((?:LT)[\-])?(\d{5})/.test(value)) {
    return 'This field must be a valid zip code.'
  }

  return true
})
