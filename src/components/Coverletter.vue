<template>
<div>
    <div class="coverletter">
        <div class="header">
            <a href="/"><div class="title cl-title">
                <img class="logo" alt="logo" src="../assets/AM_logo.svg"> 
                <span class="name">ANDREW<br> MUNDY</span>
            </div>
            </a>
            <div class="headline headline-cl"> 
                <span class="" >Product Designer</span>
                <span class="" >Software Engineer</span>
                <span class="" >UI/UX</span>
            </div>
        <div>
            <img class="profile-logo" src="../assets/Avatar.svg"> 
                <div>
                    <h2 class="quote quote-cl">
                        "I look forward to applying my skills as a Front-End Engineer and UI/UX designer to do my very best work as a {{this.parseUrl(position)}} at {{this.parseUrl(job)}}."
                    </h2>
                    <p class="cover-text">
                        <b>Hello there 👋</b> <br><br>
                    Although I have experience as a developer, designer, and a product designer, I am seeking this position as a {{this.parseUrl(position)}} to further my abilities and push the boundaries of my career. 
                    <br><br>
                    So in addition to enthusiastically utilizing my design, development, and leadership skills, I look forward to providing my skills as a {{this.parseUrl(position)}} to further contribute to the fun, upbeat, culture and style of {{this.parseUrl(job)}}” 
                    <br><br>
                    I look forward to contributing to {{this.parseUrl(job)}} our next great project.
                    </p>
                </div>
            <img class="squiggle" src="../assets/squiggle.svg">
            <a href="/"><div class="schedule cl-schedule">portfolio</div></a>
            <a href="https://drive.google.com/file/d/15ZzNHDTi7PuNY-vqS0GAV_YLAIM6Bu49/view?usp=sharing"><div class="schedule cl-schedule">resume</div></a>
        </div>
        </div>
    </div>
    <img class="alt-bg" src="../assets/background1:2.svg">
    <img class="alt-bg1" src="../assets/first ball.svg">  
</div>
</template>

<style lang="scss">
.cover-text{
    text-align: left;
    font-size: 1.5rem;
    padding: 2.2rem;
    width: 600px;
    margin: 4rem auto;
    border-radius: 2rem;
    background: #ffffff;
}
.headline-cl *{
    font-size: 30px !important;
    font-weight: 200;
}
.cl-title{
    .logo{
        width: 6rem;
    }
    .name{
        font-size: 2.4rem;
    }
}
.cl-schedule{
    width: 300px;
    margin: 1rem auto;
    padding:1rem;
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
.coverletter{
    width: 80vw;
    // height: 11.5in;
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
    .quote-cl{
        font-size: 25px;
    }
    .cover-text{
        font-size: 1.2rem;
        padding: 1.8rem 1.2rem;
        width: auto;
        margin: 2rem auto;
        border-radius: 0;
        background: #ffffff;
    }
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
        job: this.$route.params.job,
        position: this.$route.params.position
      }
    },
    methods: {
      parseUrl (str) {
        if (str) {
          let urlString = str
          let job = urlString.split('-')
          let arr = []

          for (var i = 0; i < job.length; i++) {
            arr.push(job[i].charAt(0).toUpperCase() + job[i].slice(1))
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