<template>
    <div>
        <div class="name">
            <h1 class="title hidden hidden-left" v-infocus="'showElement'">Hello {{ this.parseUrl() }}! 👋</h1>
            <img class="hidden hidden-right squiggle" v-infocus="'showElement-slow'" src="../assets/squiggle.svg">
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Name',
    data () {
      return {
        msg: 'Name',
        name: this.$route.params.name
      }
    },
    methods: {
      parseUrl () {
        let string = this.name
        let name = string.split('-')
        let arr = []

        for (var i = 0; i < name.length; i++) {
          arr.push(name[i].charAt(0).toUpperCase() + name[i].slice(1))
        }
        return arr.join(' ')
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

<style lang="scss">
    .name{
        height: 100vh;
        padding: 1rem;
    }
  .squiggle {
    width: 300px;
    padding: 3rem;
  }
  .hidden {
    opacity: 0;
  }

  .hidden-right {
    transform: translate(50px, 0);
  }
  .hidden-right-fast {
    transform: translate(30px, 0);
  }
  .hidden-up {
    transform: translate(0, 50px);
  }
  .hidden-up-fast {
    transform: translate(0, 30px);
  }
  .hidden-left {
    transform: translate(-50px, 0);
  }
  .hidden-left-fast {
    transform: translate(-30px, 0);
  }

  .showElement {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 0.5s ease-out;
  }
  .showElement-fast {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 1s ease-out;
  }
  .showElement-slow {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 1.3s ease-out;
  }
</style>