import { UnimplementedError } from '../../core/errors'

class IUserRepository {
  getAllUsers() {
    throw new UnimplementedError()
  }

  getUserById(_id) {
    throw new UnimplementedError()
  }

  createUser(_domainUser) {
    throw new UnimplementedError()
  }

  updateUser(_id, _updatedFields) {
    throw new UnimplementedError()
  }

  deleteUser(_id) {
    throw new UnimplementedError()
  }
}

export default IUserRepository
