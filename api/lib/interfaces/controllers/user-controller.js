import HttpResponse from '../core/http-response'

class UserController {
  constructor(useCases) {
    this.useCases = useCases
  }

  async getAllUsers(_req) {
    try {
      const { getAllUsersUseCase } = this.useCases
      const users = await getAllUsersUseCase.execute()

      if (users.length == 0) {
        return HttpResponse.ok({ message: 'No users found' })
      } else {
        return HttpResponse.ok({ message: 'Users retrieved', users })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }

  async getUser(req) {
    const { id } = req.params

    try {
      const { getUserUseCase } = this.useCases
      const user = await getUserUseCase.execute(id)

      if (!user) {
        return HttpResponse.ok({ message: 'Cannot find user' })
      } else {
        return HttpResponse.ok({ message: 'User retrieved', user })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }

  async createUser(req) {
    const { name, email } = req.body

    if (!name || !email) {
      return HttpResponse.badRequest('Please provide the fields to create user')
    }

    try {
      const { createUserUseCase } = this.useCases
      const user = await createUserUseCase.execute({ name, email })

      if (!user) {
        return HttpResponse.ok({ message: 'Cannot create user' })
      } else {
        return HttpResponse.ok({ message: 'User successfully created', user })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }

  async updateUser(req) {
    const { name, email } = req.body
    const { id } = req.params

    if (!name || !email) {
      return HttpResponse.badRequest('Please provide the fields to be updated')
    }

    try {
      const { updateUserUseCase } = this.useCases
      const user = await updateUserUseCase.execute(id, { name, email })

      if (!user) {
        return HttpResponse.ok({ message: 'Cannot find user to update' })
      } else {
        return HttpResponse.ok({ message: 'User successfully updated', user })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }

  async deleteUser(req) {
    const { id } = req.params

    try {
      const { deleteUserUseCase } = this.useCases
      const user = await deleteUserUseCase.execute(id)

      if (!user) {
        return HttpResponse.ok({ message: 'User does not exist', id })
      } else {
        return HttpResponse.ok({ message: 'User deleted', id })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }
}

export default UserController
