
import router from '@adonisjs/core/services/router'


const PagesController = () => import('#controllers/pages_controller')



router.get('/beranda', [PagesController, 'beranda'])



router.get('/', [PagesController, 'beranda'])
router.get('/anxiety', [PagesController, 'anxiety'])
router.get('/about', [PagesController, 'about'])
router.get('/quiz', [PagesController, 'quiz'])
router.get('/question', [PagesController, 'question'])






// router.get('/register', [AccountsController, 'create'])
