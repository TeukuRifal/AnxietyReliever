import Role from '#models/role'
import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'

export default class AccountsController {
  async index({ view }: HttpContext) {
    return view.render('pages/auth/login')
  }

  async login({ request, response, session, auth }: HttpContext) {
    const data = request.only(['email', 'password'])

    try {
      const user = await User.query().where('email', data.email).first()

      if (user) {
        if (user.roleId === 1) {
          session.flash({ status: 'Login successful' })
          return response.redirect('/beranda')
        } else if (user.roleId === 2) {
          session.flash({ status: 'Login successful' })
          return response.redirect('/home')
        }
      }
    } catch (error) {
      session.flash({ error: 'Invalid credentials' })
      return response.redirect('back')
    }
  }

  async logout({ auth, response, session }: HttpContext) {
    await auth.use('web').logout()
    session.flash({ status: 'Logout successful' })
    return response.redirect('/login')
  }

  async create({ view }: HttpContext) {
    const roles = await Role.all()
    return view.render('pages/auth/register', { roles: roles })
  }

  async store({ request, response, session }: HttpContext) {
    const data = request.only(['email', 'password', 'roleId', 'fullName'])

    const existingUser = await User.findBy('email', data.email)
    if (existingUser) {
      session.flash({ error: 'Email already exists' })
      return response.redirect('back')
    }

    await User.create(data)

    session.flash({ success: 'Registration successful' })
    return response.redirect('/login')
  }

  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  // async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
