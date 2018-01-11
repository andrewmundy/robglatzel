<template>
    <div class="">
      <div class="header">
        <div class="title">
          <img class="logo" alt="logo" src="../assets/AM_logo.svg"> 
          <span class="name">ANDREW<br> MUNDY</span>
        </div>
        <div class="headline"> 
          <span>Product Designer</span>
          <span>Software Engineer</span>
          <span>UI/UX </span>
        </div>
        <button class="header-button" @click="scrollMeTo('contact')">Contact</button>
        <div class="spacer"></div>
        <img class="profile-logo" src="../assets/Avatar.svg"> 
        <h2 class="quote">
          "I have a passion for creating beautiful, functional, rock solid products and experiences from within small agile teams."
        </h2>
        <!-- <button class="header-button-empty">Resume</button> -->
      </div>
      <div class="spacer"></div>
      <img class="squiggle" src="../assets/squiggle.svg">
      <projects/>
      <div class="spacer"></div>
      <section ref="contact" id="contact" class="contact">
        <div class="spacer"></div>
        <h2 class="genre-quote">
          "Thanks for stopping by. Developing ones personal style, image, brand, is a lifelong and often grueling process. I am honored that you found your way to mine and I hope you enjoyed your stay." 
          <p>
          Please, reach out. Lets do great things together.
          </p>
        </h2>
        
        <div class="schedule-div">
          <a class="schedule" href="" onclick="Calendly.showPopupWidget('https://calendly.com/andrewmundy/60min');return false;">
            Lets Chat 📞 or Grab a Coffee ☕️
          </a>
        </div>
        <div class="spacer"></div>

        <div class="socials">
          <a href="https://github.com/andrewmundy" alt="github"><img src="../assets/icons/github.svg"></a>
          <a href="https://codepen.io/andrewmundy/" alt="codepen"><img src="../assets/icons/codepen.svg"></a>
          <a href="https://www.behance.net/andrewmundy" alt="behance"><img src="../assets/icons/behance.svg"></a>
          <a href="https://dribbble.com/andrewmundy" alt="dribble"><img src="../assets/icons/dribbble.svg"></a>
          <a href="https://twitter.com/andrewmundy" alt="twitter"><img src="../assets/icons/twitter.svg"></a>
          <a href="https://www.linkedin.com/in/andrew-mundy/" alt="linkedin"><img src="../assets/icons/linkedin.svg"></a>
        </div>

        <!-- <div class="spacer"></div> -->
        <h3 class="copywrite">created with 🍹 by Andrew Mundy</h3>
        <a href="https://github.com/andrewmundy/andrewmundy2">
          <h3 class="repo">
            <img src="../assets/icons/github.svg">
            VueJS & Webpack
          </h3>
        </a>
      </section>
    <img class="alt-bg" src="../assets/background1:2.svg">
    <img class="alt-bg1" src="../assets/first ball.svg">  
    </div>
</template>

<style>
  .copywrite{
    color:white;
  }
  .repo{
    opacity: 0.5;
  }
  .repo img{
    max-width: 20px;
  }
  .schedule{
    border:solid 5px white;
    padding:1rem;
    border-radius: 3rem;
    color:white;
    font-size: 1.5rem;
    font-weight: 800;
    box-shadow: 0px 70px 60px #00000080;
  }
  .alt-bg{
    left: 0;
    top:0px;
    width: 100vw;
    position: fixed;
    z-index: 0;
  }
  .alt-bg1{
    left: 400px;
    top:0px;
    position: fixed;
    width: 300px;
    z-index: -1;
    opacity: 0.1;
  }
  .schedule-div{
    margin: 2rem 0;
  }
  .spacer{
    height: 5rem;
  }
  .header-button{
    background: rgb(0, 255, 183);
    border-radius: 100px;
    color:white;
    border:none;
    font-weight: 600;
    padding: 0.3rem 1rem 0.5rem 1rem;
    font-size: 1.5rem;
  }
  .header-button-empty{
    background: none;
    border-radius: 100px;
    box-shadow: 0 0 0 4px white inset;
    color:white;
    border:none;
    font-weight: 600;
    padding: 0.3rem 1rem 0.5rem 1rem;
    font-size: 1.5rem;
  }
  .quote{
    padding: 2rem;
    color:white;
    /* font-family: Avenir, Helvetica-Neue; */
    font-weight: 400;
    font-style: normal;
    font-family: medium-content-serif-font,Georgia,Cambria,"Times New Roman",Times,serif;
    font-size: 35px;
    width: 60vw;
    margin: auto;
  }
  .logo{
    width: 10rem;
  }
  .squiggle{
    width: 300px;
    padding:3rem;
  }
  .profile-logo{
    width: 16rem;
  }
  .title{
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .header{
    position: relative;
    z-index: 2;
    padding:2rem 0rem;
    margin:0px;
    text-align: center;
  }
  .headline{
    color:white;
    font-size: 3rem;
    padding: 2rem;
    font-weight: 100;
  }
  .contact{
    position: relative;
    z-index: 2;
    width: 100%;
    /* display: flex; */
    justify-content: center;
    align-items: flex-start;
    background:rgb(24, 24, 24);
    margin: 0px;
    /* padding:0px; */
    padding: 1rem 0;
    /* height: 50vh; */
  }
  .contact li{
    padding:1rem;
  }
  .headline span{
    padding:1rem;
  }
  .name{
    color: white;
    font-weight: 900;
    font-size: 4rem;
    text-align: left;
    padding-left: 2rem;
  }
  .socials{
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 70vw;
    margin: auto;
    padding: 3rem;
  }
  .socials * {
    max-width: 70px;
    
  }
@media screen and (max-device-width: 1024px){
  .spacer{
    height: 3rem;
  }
  .schedule{
    position: relative;
    font-size: 1rem;
    padding:0.5rem;
    border:solid 3px white;
    bottom: 0;
  }
  .headline{
    font-size: 2.5rem;  
    padding: 3rem 0.5rem;
  }
  .name{
    font-size:3.5rem;
    text-align: center;
    padding: 10px;
  }
  .title{
    flex-wrap: wrap;
  }
  .header{
    /* height:50vh; */
  }
  .text{
    width: 100vw;
  }
  .quote{
    padding:1rem;
    width: auto;    
  }
  .socials{
    padding:1rem;
    width:90vw;
  }
  .socials *{
    width: 30px;
  }
  .alt-bg{
    width: 1000px;
  }
}

</style>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: 'Main Page'
    }
  },
  methods: {
    scrollMeTo (refName) {
      var element = this.$refs[refName]
      var top = element.offsetTop

      window.scrollTo(0, top)
    }
  }
}
</script>