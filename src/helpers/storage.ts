import { IUserEntity } from './interfaces'

export const LOCAL_STORAGE_KEYS = {
  USERS: 'crm-users',
}

export const getObject = (key: string) => {
  const value = localStorage.getItem(key)
  return value ? JSON.parse(value) : []
}

export const setObject = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const getUsers = () => getObject(LOCAL_STORAGE_KEYS.USERS)

const addNewUser = (user: IUserEntity) => {
  const users = [...getUsers()]

  const foundUser = users.find((currentUser) => currentUser.id === user.id)

  if (!foundUser) {
    setObject(LOCAL_STORAGE_KEYS.USERS, [...users, user])
  } else {
    setObject(LOCAL_STORAGE_KEYS.USERS, [
      ...users.filter((x) => x.id !== user.id),
      user,
    ])
  }
}

export const storage = {
  getUsers,
  addNewUser,
}
