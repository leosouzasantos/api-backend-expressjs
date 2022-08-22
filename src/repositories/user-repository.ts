import { User } from '../entities/user-entity'

export class UserRepository {
  user: User[]

  private static instance: UserRepository

  constructor() {
    this.user = []
  }

  static getInstance() {
    if (!UserRepository.instance) {
      UserRepository.instance = new UserRepository()
    }

    return UserRepository.instance
  }

  async findByUsername(username: string) {
    return this.user.find((user) => user.username === username)
  }

  async save(data: User) {
    this.user.push(data)
    return data
  }
}
