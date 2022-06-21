import { IUserEntity } from './interfaces'

const LOCAL_STORAGE_KEYS = {
  USERS: 'crm-users',
}

export const getObject = (key: string) => {
  const value = localStorage.getItem(key)
  return value ? JSON.parse(value) : []
}

export const setObject = (key: string, value: any) => {
  if (value) {
    localStorage.setItem(key, JSON.stringify(value))
  } else {
    localStorage.removeItem(key)
  }
}

const getUsers = () => getObject(LOCAL_STORAGE_KEYS.USERS)

const addNewUser = (user: IUserEntity) => {
  const users = [...getUsers(), user]
  setObject(LOCAL_STORAGE_KEYS.USERS, users)
}

export const storage = {
  getUsers,
  addNewUser,
}
