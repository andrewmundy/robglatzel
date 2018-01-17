<template>
  <div>
    <div class="name">
      <div class="header">
        <h1 class="title hidden hidden-left" v-infocus="'showElement'">Hello {{ this.parseUrl() }}!
          <span class="hvr-shake">👋</span>
        </h1>
        <img class="hidden hidden-right squiggle" v-infocus="'showElement-slow'" src="../assets/squiggle.svg">
        <br>
        <a class="schedule back" href="/"> back </a>
      </div>
    </div>
    <div class="spacer"></div>
    <contact/>
    <img class="alt-bg" src="../assets/background1:2.svg">
    <img class="alt-bg1" src="../assets/first ball.svg">
  </div>
</template>

<style>
  .back {
    margin: 2rem;
  }

  .genre-quote {
    padding: 2rem;
    color: white;
    font-weight: 500;
    font-style: normal;
    font-family: medium-content-serif-font, Georgia, Cambria, "Times New Roman", Times, serif;
    font-size: 32px;
    width: 50vw;
    margin: auto;
  }

  @media screen and (max-device-width: 1024px) {
    .genre-quote {
      font-size: 20px;
      width: 85vw;
      padding: 0.5rem;
    }
    .title {
      font-size: 5rem;
    }
    .squiggle {
      padding: 3rem 0;
    }
  }

</style>

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


</style>

