import { v4 as uuidv4 } from 'uuid'

type IUser = {
  name: string
  password: string
  username: string
}

export class User {
  name: string
  password: string
  username: string
  id: string
  isAdmin: boolean

  private constructor(props: IUser) {
    this.name = props.name
    this.username = props.username
    this.password = props.password
    this.id = uuidv4()
    this.isAdmin = false
  }

  static create(props: IUser) {
    const user = new User(props)
    return user
  }
}
