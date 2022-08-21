import { User } from '../entities/user-entity'

export class UserRepository {
  user: User[] = []

  async findByUsername(username: string) {
    return this.user.find((user) => user.username === username)
  }

  async save(data: User) {
    this.user.push(data)
    return data
  }
}
