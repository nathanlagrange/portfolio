import aos from 'aos'
import 'aos/dist/aos.css'

export default ({ app }) => {
  app.aos = new aos.init({
    disable: false,
    once: false
  })
}
