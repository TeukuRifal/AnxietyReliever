import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async create({ request, response, session }: HttpContext) {
    const data = request.only(['fullName', 'email', 'password'])
    const role = request.only(['role'])
    const roleData = role.role.split(' - ')
    const roleId = roleData[0]

    const user = await User.create({
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      roleId: roleId,
    })

    if (user) {
      session.flash({ status: 'User created successfully' })
      return response.redirect('/beranda')
    } else {
      session.flash({ error: 'User failed to create' })
      return response.redirect('/crud')
    }
  }

  async show({ params, view }: HttpContext) {
    const user = await User.find(params.id)
    return view.render('pages/admin/user', { user: user })
  }

  async store({ request, response, session }: HttpContext) {
    const data = request.only(['fullName', 'email', 'password'])
    const role = request.only(['role'])
    const roleData = role.role.split(' - ')
    const roleId = roleData[0]
  
    const user = await User.create({
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      roleId: roleId,
    })
  
    if (user) {
      session.flash({ status: 'User created successfully' })
      return response.redirect('/beranda')
    } else {
      session.flash({ error: 'User failed to create' })
      return response.redirect('/crud')
    }
  }
  

  async edit({ params, request, response, session }: HttpContext) {
    const data = request.only(['fullName', 'email', 'password'])
    // validate password not null
    const user = await User.find(params.id)
    if (!data.password) {
      session.flash({ error: 'Password cant be null' })
      return response.redirect('/user/' + params.id)
    }
    // check if user not null
    if (user) {
      user.fullName = data.fullName
      user.email = data.email
      user.password = data.password
      const update = await user.save()
      if (update) {
        session.flash({ status: 'User updated successfully' })
        return response.redirect('/beranda')
      } else {
        session.flash({ status: 'User cant updated' })
        return response.redirect('/beranda')
      }
    }
  }
  /**
   * Delete record
   */
  async destroy({ params, response, session }: HttpContext) {
    const user = await User.find(params.id)
    if (user) {
      console.log(user)
      await user.delete()
      session.flash({ status: 'User deleted successfully' })
      return response.redirect('/beranda')
    }
  }
}
