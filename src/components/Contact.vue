<template>
    <section ref="contact" id="contact" class="contact">
        <div class="spacer"></div>

        <h2 class="hidden hidden-up genre-quote" v-infocus="'showElement'">
          "Thanks for stopping by. Developing ones personal style, image, brand, is a lifelong and often grueling process. I am honored that you found your way to mine and I hope you enjoyed your stay." 
          <p>
          Please, reach out. Lets do great things.
          </p>
        </h2>
        <div class="schedule-div">
          <a class="schedule" href="" onclick="Calendly.showPopupWidget('https://calendly.com/andrewmundy/60min');return false;">
            Take a Look at my Schedule
          </a>
          <p>
            <h1 class="hvr-bob">
              👆
            </h1>
          </p>
        </div>
        <message/>

        <!-- <div class="spacer"></div> -->
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
