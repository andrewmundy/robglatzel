<template>
    <section ref="contact" id="contact" class="contact">
        <div class="spacer"></div>
        <h2 class="hidden hidden-up genre-quote-white" v-infocus="'showElement'">
          {{fireInfo.outro}}
        </h2>
        <div class="schedule-div">
          <a class="schedule" href="" onclick="Calendly.showPopupWidget('https://calendly.com/andrewmundy/60min');return false;">
            Take a Look at my Schedule
          </a>
          <p> <h1 class="hvr-bob">👆</h1> </p>
        </div>
        <message/>

        <div class="socials">
          <a href="https://github.com/andrewmundy" alt="github"><img class="hidden hidden-up" v-infocus="'showElement-fast'" src="../assets/icons/github.svg"></a>
          <a href="https://codepen.io/andrewmundy/" alt="codepen"><img class="hidden hidden-up-fast" v-infocus="'showElement'" src="../assets/icons/codepen.svg"></a>
          <a href="https://www.behance.net/andrewmundy" alt="behance"><img class="hidden hidden-up" v-infocus="'showElement'" src="../assets/icons/behance.svg"></a>
          <a href="https://dribbble.com/andrewmundy" alt="dribble"><img class="hidden hidden-up-fast" v-infocus="'showElement'" src="../assets/icons/dribbble.svg"></a>
          <a href="https://twitter.com/andrewmundy" alt="twitter"><img class="hidden hidden-up" v-infocus="'showElement-fast'" src="../assets/icons/twitter.svg"></a>
          <a href="https://www.linkedin.com/in/andrew-mundy/" alt="linkedin"><img class="hidden hidden-up" v-infocus="'showElement'" src="../assets/icons/linkedin.svg"></a>
        </div>

        <h5 class="copywrite">created with 🍹 by Andrew Mundy</h5>
        <a href="https://github.com/andrewmundy/andrewmundy2">
          <h5 class="repo">
            <img src="../assets/icons/github.svg">
            VueJS & Webpack
          </h5>
        </a>
      </section>
</template>

<script>
export default {
  name: 'Contact',
  props: [
    'fireInfo',
    'fireSocial'
  ],
  data () {
    return {
      msg: 'Main Page'
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
