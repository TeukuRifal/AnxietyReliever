import Role from '#models/role'
import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'

export default class PagesController {
  async beranda({ view }: HttpContext) {
    return view.render('pages/home')
  }

  async about({ view }: HttpContext) {
    return view.render('pages/about')
  }

  async quiz({ view }: HttpContext) {
    return view.render('pages/quiz')
  }

  async question({ view }: HttpContext) {
    return view.render('pages/question')
  }

  async crud({ view }: HttpContext) {
    const roles = await Role.all()
    return view.render('pages/auth/register', { roles: roles })
  }
}
