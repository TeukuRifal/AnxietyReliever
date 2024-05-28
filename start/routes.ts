import { middleware } from './kernel.js'
import router from '@adonisjs/core/services/router'

const AccountsController = () => import('#controllers/accounts_controller')
const PagesController = () => import('#controllers/pages_controller')
const UsersController = () => import('#controllers/users_controller')


router.get('/beranda', [PagesController, 'beranda'])



router.get('/', [PagesController, 'beranda'])
router.get('/anxiety', [PagesController, 'anxiety'])
router.get('/about', [PagesController, 'about'])
router.get('/quiz', [PagesController, 'quiz'])
router.get('/question', [PagesController, 'question'])
router.get('/crud', [PagesController, 'crud'])





// router.get('/register', [AccountsController, 'create'])
