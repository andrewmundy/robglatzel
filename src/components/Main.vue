<template>
    <div class="">
      <div class="header">
        <div class="title hidden hidden-left" v-infocus="'showElement'">
          
        <!-- LOGO -->
          <img class="logo" alt="logo" src="../assets/AM_logo.svg"> 
        <!-- LOGO -->

        <!-- NAME -->
          <span class="name">ROBERT <br> GLATZEL</span>
        <!-- NAME -->

        </div>
        <div class="headline"> 
          <span class="hidden hidden-left-fast" v-infocus="'showElement'">{{fireInfo.headline1}}</span>
          <span class="hidden hidden-right" v-infocus="'showElement'">{{fireInfo.headline2}}</span>
          <span class="hidden hidden-left" v-infocus="'showElement'">{{fireInfo.headline3}}</span>
        </div>
        <button class="schedule" @click="scrollMeTo('contact')">Contact</button>
        <div class="spacer"></div>
        <img class="profile-logo" src="../assets/Avatar.svg"> 
        <h2 class="hidden hidden-up genre-quote" v-infocus="'showElement-slow'">
          {{fireInfo.intro}}
        </h2>
      </div>
      
      <div class="spacer"></div>
      
      <img class="hidden hidden-right squiggle" v-infocus="'showElement-slow'" src="../assets/squiggle.svg">
      
      <!-- //////////
      /// PROJECT ///
      //////////////////////////////// -->
      <projects 
        v-bind="{
          fireGenres,
          genres
        }"
      />

      <project 
        :style="{display:'none'}"
        v-bind="{
          genres,
          fireInfo
        }"
      />

      <div class="spacer"></div>

      <!-- //////////
      /// CONTACT ///
      //////////////////////////////// -->
      <contact 
        v-bind="{
          fireInfo,
          fireSocial
        }"
      />

    <!-- <img class="alt-bg" src="../assets/background1:2.svg">
    <img class="alt-bg1" src="../assets/first ball.svg"> -->
    <img class="alt-bg" src="../assets/background1-bw.svg">
    <!-- <img class="alt-bg1" src="../assets/first-ball-bw.png"> -->
    </div>
</template>

<script>
import Vue from 'vue'
import firebase from 'firebase'
import VueFire from 'vuefire'
let config = {
  apiKey: 'AIzaSyC1Xjh9OhjU5uob_f9-6q-c0JiiPCZWjPs',
  authDomain: 'robglatzel-5b152.firebaseapp.com',
  databaseURL: 'https://robglatzel-5b152.firebaseio.com/',
  projectId: 'robglatzel-5b152',
  storageBucket: 'robglatzel-5b152.appspot.com',
  // messagingSenderId: '862963492633'
}

Vue.use(VueFire)
// Vue.use(VueResource)
let app = firebase.initializeApp(config)
let db = app.database()
// let storage = firebase.storage()
export default {
  name: 'Main',
  data () {
    return {
      msg: 'Main Page',
      genres: [],
      projects: {}
    }
  },
  methods: {
    firebaseData () {
      let ref = db.ref('genres')
      let self = this
      ref.on('value', function (snapshot) {
        let entries = Object.entries(snapshot.val())
        self.genres = entries
      }, function (errorObject) {
        console.log('The read failed: ' + errorObject.code)
      })
    },
    consoleStyle () {
      let message = 'Hey there 👋! Feel free to dig around 🕳, if something catches your eye 👁 or youre curious how I did a thing 🤔, peep my source code at https://github.com/andrewmundy/AndrewMundy2.0 🖥 or send me a message 📬!'
      let styles = [
        'font-family: arial',
        'border:solid #00ffb7 1px',
        'font-size:20px',
        'border-radius:10px',
        'margin:10px',
        'color: white',
        'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)',
        'text-align: center',
        'display: block',
        'padding:25px'
      ].join(';')

      return console.info(`%c${message} `, styles)
    },
    scrollMeTo (refName) {
      // var element = this.$refs[refName]
      // var top = element.offsetTop
      window.scrollTo(0, 20000)
    }
  },
  firebase: {
    fireSocial: {
      source: db.ref('socials')
    },
    fireInfo: {
      source: db.ref('info'),
      asObject: true
    },
    fireGenres: {
      source: db.ref('genres'),
      asObject: true
    }
  },
  mounted: function () {
    this.firebaseData()
    this.consoleStyle()
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