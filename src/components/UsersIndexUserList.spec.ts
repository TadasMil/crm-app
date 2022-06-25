import { render } from '@testing-library/vue'
import { IUserEntity } from 'src/helpers/interfaces'
import { describe, expect, it } from 'vitest'

import UsersIndexUserList from './UsersIndexUserList.vue'

describe('UsersIndexUserList.spec.js', () => {
  it('should render the component', () => {
    const user: IUserEntity = {
      firstName: 'Tadas123',
      lastName: 'Tadas12',
      email: 'ga@test.com',
      city: 'Vilnius',
      street: 'Zirmunu',
      houseNumber: '141',
      zipCode: 'LT-06612',
      id: '2adff068-f113-45d0-9a95-145d7b2d24e8',
      coordinates: { lat: { lat: 54.723772, lng: 25.297623 } },
    }

    const { html } = render(UsersIndexUserList, {
      props: {
        users: [user],
      },
      global: {
        stubs: ['router-link'],
      },
    })

    expect(html()).toMatchSnapshot()
  })

  it('should render the no data component given empty users list', () => {
    const { html } = render(UsersIndexUserList, {
      props: {
        users: [],
      },
      global: {
        stubs: ['router-link'],
      },
    })

    expect(html()).toMatchSnapshot()
  })
})
