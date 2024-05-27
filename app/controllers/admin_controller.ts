import { HttpContext } from '@adonisjs/core/http'
import Role from '#models/role'
import User from '#models/user'

export default class AdminController {
  /**
   * Display list of users for admin
   */
  async index({ view }: HttpContext) {
    const users = await User.query().orderBy('id', 'asc').preload('role')
    return view.render('admin/user_list', { users: users })
  }

  /**
   * Show individual user details
   */
  async show({ params, view }: HttpContext) {
    const user = await User.find(params.id)
    return view.render('admin/user_details', { user: user })
  }

  /**
   * Edit individual user record
   */
  async edit({ params, view }: HttpContext) {
    const user = await User.find(params.id)
    return view.render('admin/edit_user', { user: user })
  }

  /**
   * Update individual user record
   */
  async update({ params, request, response, session }: HttpContext) {
    const data = request.only(['fullName', 'email', 'password'])
    const user = await User.find(params.id)
    if (!data.password) {
      session.flash({ error: 'Password cannot be null' })
      return response.redirect(`/admin/${params.id}/edit`)
    }
    if (user) {
      user.fullName = data.fullName
      user.email = data.email
      user.password = data.password
      const update = await user.save()
      if (update) {
        session.flash({ status: 'User updated successfully' })
        return response.redirect(`/admin/${params.id}`)
      } else {
        session.flash({ error: 'User update failed' })
        return response.redirect(`/admin/${params.id}/edit`)
      }
    }
  }

  /**
   * Delete individual user record
   */
  async destroy({ params, response, session }: HttpContext) {
    const user = await User.find(params.id)
    if (user) {
      await user.delete()
      session.flash({ status: 'User deleted successfully' })
      return response.redirect('/admin')
    }
  }
}
