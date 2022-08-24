import { User } from '../../entities/user-entity'
import { ParameterRequiredError } from '../../errors/parameter-required.error'
import { UserRepository } from '../../repositories/user-repository'

type UserRequest = {
  name: string
  username: string
  password: string
}

export class CreateUserUseCase {
  async execute(data: UserRequest) {
    const userRepository = UserRepository.getInstance()

    if (!data.username || !data.password) {
      throw new ParameterRequiredError('Usarname/passsword is required.')
    }

    const existUser = await userRepository.findByUsername(data.username)

    if (existUser) {
      throw new ParameterRequiredError('Username already exists')
    }

    const user = User.create(data)

    const userCreated = await userRepository.save(user)
    return userCreated
  }
}
