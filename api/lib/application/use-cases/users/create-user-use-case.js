class CreateUserUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository
  }

  async execute(domainUser) {
    return await this.userRepository.createUser(domainUser)
  }
}

export default CreateUserUseCase
