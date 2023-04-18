import { nextTick } from 'vue'
import '@/assets/style/toast.scss'

export default (text: string) => {
  const bodys: Element = document.body
  const div = document.createElement('div')
  div.className = 'block-toast'
  div.innerHTML = `<div class="block-toast-in">${text}</div>`
  bodys.insertBefore(div, bodys.childNodes[0])
  nextTick(() => {
    setTimeout(() => {
      const el = document.querySelector('.block-toast')
      el && el.parentNode?.removeChild(el)
    }, 1800)
  })
}
