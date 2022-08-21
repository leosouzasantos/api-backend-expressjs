import { User } from '../../entities/user-entity'
import { UserRepository } from '../../repositories/user-repository'

type UserRequest = {
  name: string
  username: string
  password: string
}

export class CreateUserUseCase {
  async execute(data: UserRequest) {
    const userRepository = new UserRepository()

    if (!data.username || !data.password) {
      throw new Error('Usarname/passsword is required.')
    }

    const existUser = await userRepository.findByUsername(data.username)

    if (existUser) {
      throw new Error('Username already exists')
    }

    const user = User.create(data)

    const userCreated = await userRepository.save(user)
    return userCreated
  }
}
