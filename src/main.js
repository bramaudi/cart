import { render } from '../minite/src/index'
import router from '../minite/router/src/index'
import Home from './pages/home'
import NotFound from './pages/404'

const r = new router({
  render,
  mount: '#app'
})

r.add('/', Home)
r.add('/menu', () => import('./pages/menu/index'))
r.add('', NotFound)

r.listen()

if (module.hot) {
  module.hot.accept()
}
