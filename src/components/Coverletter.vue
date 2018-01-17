<template>
<div>
    <div class="coverletter">
        <div class="header">
            <div class="title ">
                <img class="logo" alt="logo" src="../assets/AM_logo.svg"> 
                <span class="name">ANDREW<br> MUNDY</span>
            </div>
            <div class="headline"> 
                <span class="" >Product Designer</span>
                <span class="" >Software Engineer</span>
                <span class="" >UI/UX</span>
            </div>
        <div>
            <img class="profile-logo" src="../assets/Avatar.svg"> 
            <!-- <h2 class="title " >Hi {{ this.parseUrl() }}! <span class="hvr-shake">👋</span></h2> -->
            <h2 class="quote">
            "At {{ this.parseUrl() }} I look forward to sharing my passion for creating beautiful, functional, rock solid products and experiences from within small agile teams."
            </h2>
            <img class="squiggle" src="../assets/squiggle.svg">
            <a href="https://drive.google.com/file/d/15ZzNHDTi7PuNY-vqS0GAV_YLAIM6Bu49/view?usp=sharing"><div class="schedule">resume</div></a>
        </div>
        </div>
    </div>
    <img class="alt-bg" src="../assets/background1:2.svg">
    <img class="alt-bg1" src="../assets/first ball.svg">  
</div>
</template>

<style lang="scss">
.schedule{
    width: 300px;
    margin: auto;
}
.profile-logo{
    width: 200px;
}
.headline{
    padding:1rem;
    span{
        font-size:42px;
    }
}
.quote{
    width: auto;
}
.coverletter{
    width: 8.5in;
    height: 11.5in;
    margin: auto;
    // overflow: hidden;
}
.back{
    margin: 2rem;
}
.genre-quote {
    padding: 2rem;
    color: white;
    font-weight: 500;
    font-style: normal;
    font-family: medium-content-serif-font,Georgia,Cambria,"Times New Roman",Times,serif;
    font-size: 32px;
    width: 50vw;
    margin: auto;
}
 @media screen and (max-device-width: 1024px) {
    .coverletter{
        width: 100%;
    }
    .genre-quote {
        font-size: 20px;
        width: 85vw;
        padding: 0.5rem;
    }
    .title{
        font-size: 5rem;
    }
    .squiggle{
        padding:3rem 0;
    }
}    
</style>

<script>
  export default {
    name: 'Coverletter',
    data () {
      return {
        msg: 'Coverletter',
        name: this.$route.params.string
      }
    },
    methods: {
      parseUrl () {
        let urlString = this.name
        let name = urlString.split('-')
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