export interface IUser {
  firstName: string
  lastName: string
  email: string
  city: string
  street: string
  houseNumber: string
  zipCode: string
}

export interface IUserEntity extends IUser {
  coordinates: Object
  id: string
}
