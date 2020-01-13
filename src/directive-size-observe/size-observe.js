import ResizeObserve from 'resize-observer-polyfill'

class SizeObserve {
  constructor({ el, options }) {
    if (el instanceof HTMLElement) {
      this.el = el
    } else if (typeof el === 'string') {
      this.el = document.querySelector(el)
    }
    this.options = {
      wait: 0,
      immediate: true,
      ...options
    }
    this.el.$sizeObserve = this
  }

  timer = null

  init () {
    let firstFlag = this.options.immediate
    const sizeChange = document.createEvent('HTMLEvents')
    sizeChange.initEvent('sizeChange', false, false)
    const callback = (e) => {
      if (!firstFlag) {
        firstFlag = true
        return
      }
      if (this.timer !== null) clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        const { contentRect } = e && e[0]
        sizeChange.contentRect = contentRect
        this.el.dispatchEvent(sizeChange)
      }, this.options.wait)
    }
    this.instance = new ResizeObserve(callback)
    this.instance.observe(this.el)
  }

  destroy () {
    this.instance.unobserve(this.el)
  }
}

export default {
  install (Vue, userOptions) {
    Vue.directive('scroll', {
      inserted (el, binding) {
        const { value } = binding
        const customGlobalOptions = userOptions || {}
        const options = {
          ...customGlobalOptions,
          ...value
        }
        const resizeObserve = new SizeObserve({ el, options })
        resizeObserve.init()
      },
      unbind (el) {
        el.$sizeObserve && el.$sizeObserve.destroy()
      }
    })
  },
  inserted (el, binding) {
    const { value } = binding
    const options = {
      ...value
    }
    const resizeObserve = new SizeObserve({ el, options })
    resizeObserve.init()
  },
  unbind (el) {
    el.$sizeObserve && el.$sizeObserve.destroy()
  }
}

export { SizeObserve }
