<template>
    <div>
        <h2 class="quote quote-cl">
            "I look forward to applying my skills as a Front-End Engineer and UI/UX designer to do my very best work as a {{position}} at {{job}}."
        </h2>
        <p class="cover-text">
            <b>Hello there 👋</b> <br><br>
        Although I have experience as a developer, designer, and a product designer, I am seeking this position as a {{position}} to further my abilities and push the boundaries of my career. 

        <br><br>
        So in addition to enthusiastically utilizing my design, development, and leadership skills, I look forward to providing my skills as a {{position}} to further contribute to the fun, upbeat, culture and style of {{job}}” 
        <br><br>
        Why do I want to work at {{job}}? Well, {{job}} {{description}}
        <br><br>
        <br><br>
        I look forward to contributing to {{job}} the next great project.
        </p>
    </div>
</template>

<script>
  export default {
    name: 'CoverText',
    data () {
      return {
        msg: 'Coverletter',
        name: this.$route.params.string
      }
    },
    methods: {
      parseUrl () {
        if (this.name) {
          let urlString = this.name
          let name = urlString.split('-')
          let arr = []

          for (var i = 0; i < name.length; i++) {
            arr.push(name[i].charAt(0).toUpperCase() + name[i].slice(1))
          }
          return arr.join(' ')
        } else {
          return null
        }
      }
    },
    directives: {
      infocus: {
        isLiteral: true,
        inserted: (el, binding, vnode) => {
          let f = () => {
            let rect = el.getBoundingClientRect()
            let inView = (
              rect.width > 0 &&
              rect.height > 0 &&
              rect.top >= 0 &&
              rect.bottom <= (window.innerHeight - 50 || document.documentElement.clientHeight)
            )
            if (inView) {
              el.classList.add(binding.value)
              window.removeEventListener('scroll', f)
            }
          }
          window.addEventListener('scroll', f)
          f()
        }
      }
    }
  }
</script>