import Aos from 'aos'
import 'aos/dist/aos.css'

export default ({ app }) => {
  app.Aos = new Aos.init({
    disable: window.innerWidth < 640,
    once: true
  })
}
