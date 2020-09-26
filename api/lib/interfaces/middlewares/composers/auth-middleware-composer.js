import AuthMiddleware from '../auth-middleware'
import VerifyTokenUseCase from '../../../application/use-cases/auth/verify-token-use-case'

class AuthMiddlewareComposer {
  static compose() {
    const verifyTokenUseCase = new VerifyTokenUseCase()

    return new AuthMiddleware({ verifyTokenUseCase })
  }
}

export default AuthMiddlewareComposer
