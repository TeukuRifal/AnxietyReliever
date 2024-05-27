import { middleware } from './kernel.js'
import router from '@adonisjs/core/services/router'

const AccountsController = () => import('#controllers/accounts_controller')
const PagesController = () => import('#controllers/pages_controller')
const UsersController = () => import('#controllers/users_controller')

// // router.group(() => {
  router.get('/beranda', [PagesController, 'beranda'])
//   router.get('/', [PagesController, 'beranda'])
//   router.post('/logout', [AccountsController, 'logout'])
//   router.get('/crud', [PagesController, 'crud'])
//   router.get('/about', [PagesController, 'about'])
// // }).use(middleware.auth())


// router.post('/login', [AccountsController, 'login'])
// router.get('/login', [AccountsController, 'index'])

// router.resource('account', AccountsController)
// router.resource('user', UsersController)


router.get('/', [PagesController, 'beranda'])
router.get('/about', [PagesController, 'about'])
router.get('/quiz', [PagesController, 'quiz'])
router.get('/question', [PagesController, 'question'])
router.get('/crud', [PagesController, 'crud'])

// router.get('/register', [AccountsController, 'create'])
