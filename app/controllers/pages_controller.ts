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

  async anxiety({ view }: HttpContext) {
    return view.render('pages/anxiety')
  }

  async question({ view }: HttpContext) {
    return view.render('pages/question')
  }

}
