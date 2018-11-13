<template>
  <div class="">
    <div class="page section">
        <div class="project-header">
            <div v-html="content.title" class="title"></div>

            <p>{{content.fields ? content.fields.join(" &nbsp &nbsp"): null}}</p>

            <div class="info">
                <div class="intro">
                    <div class="ask"><div>{{content.ask}}</div></div>
                    <div class="blurb">
                        {{content.blurb}}
                        
                        <div class="blurb2">{{content.story}}</div>
                    </div>
                </div>
            </div>
        </div>
        <img class="banner-image" v-infocus="'showElement'" :src="content.banner">
        <img class="hidden hidden-right squiggle" v-infocus="'showElement-slow'" src="../assets/squiggle.svg">

        <div class="bullets">
            <div v-for="bullet in content.bullets" :key="bullet.key" class="bullet hidden hidden-left-fast" v-infocus="'showElement'">
                <img :src="bullet.img"/> 
                <span v-if="bullet.caption">
                    <p>{{bullet.caption}}</p>
                </span>
                <span v-else>
                </span>
            </div>
        </div>
        <div class="close" v-html="content.close"></div>
        
         <!-- <div v-for="bullet in content.bullets" :key="bullet.key" class="bullets" v-infocus="'showElement'">
             <div class="bullet bullets hidden hidden-up" v-infocus="'showElement'">
                <img :src="bullet.img"/> 
                <span>{{bullet.caption}}</span>
            </div>
         </div> -->


        <!-- <img class="hidden hidden-right squiggle" v-infocus="'showElement-slow'" src="../assets/squiggle.svg"> -->
        <!-- <a class="schedule back" href="/"> back </a> -->
        <router-link class="schedule back" to="/">Back</router-link>
      </div>
    <img class="alt-bg" src="../assets/background1-bw.svg">
    <!-- <contact/> -->
    <!-- <img class="alt-bg" src="../assets/background1-bw.svg"> -->
    </div>
</template>

<style lang="scss">
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.close{
    margin: 5rem;
    border: solid 3px black;
    padding: 2rem;
    background: white;
    font-family: georgia;
    box-shadow: -10px 10px 0 black;
    font-size:1.5rem;
    a {
        color:#00ffb7;
        text-decoration: underline;
        }
}
.bullets{
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-weight: 200;
    .bullet{
        display: flex;
        justify-content: space-between;
        margin-top: 8rem;
        text-shadow: 1px 1px 0px white;
        align-items: flex-start;
        img{
            border-radius: 0.5rem;
            width:65%;
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.171);
        }
        span{
            p{
                background:white;
                padding:20px;
                font-weight: 300;
            }
            width: 30%;
            text-align: left;
            font-size: 1.3rem;
        }
    }
    .bullet:nth-child(2n){
        flex-direction: row-reverse;
        span{
            text-align: right;
        }
    }
    // .bullet:nth-child(4n){
    //     // flex-direction: row-reverse;
    //     display: flex;
    //     justify-content: space-between;
    //     margin-top: 5rem;
    //     flex-direction: column;
    //     img{
    //         width:100%;
    //     }
    //     span{
    //         margin:auto;
    //         padding:1rem;
    //         width: 80%;
    //         text-align: left;
    //         font-size: 1.3rem;
    //     }
    // }
}
.title{
    font-weight: bold;
    font-size: 6rem;
    text-align: right;
    margin: 1.5rem 0;
    .bold{
        // box-shadow: inset 30px 30px white;
        background: white;
        padding: 15px;
    }
}
.page{
    width:70%;
    margin:2rem auto;
}
.intro{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    width:100%;
    font-weight: 300;
    margin-bottom:2rem;
    .blurb{
        width:65%;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: left;
        background: white;
        padding: 15px;
        p{
            font-size:1rem;
        }
        .blurb2{
            font-size:1.2rem;
            font-weight: 200
        }
    }
    .ask{
        font-family: elevate-display-font,medium-marketing-display-font,Georgia,Cambria,"Times New Roman",Times,serif !important;
        font-weight: 300;
        width:30%;
        text-align: left;
        font-size:1.5rem;
        div{
            padding:15px;
            background:white;
            
        }
    }

}
.banner-image{
    width:100%;
    height: auto;
}
    .project-header{
        color:black;
        .info{
            color:#313131;
            font-size:20px;
        }
        p{
            font-size: 1.5rem;
            font-weight: 100;
        }
    }
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
      .bullets{
          .bullet{
              flex-direction: column;
              margin:2rem auto;
              width: 100%;
              justify-content: center;
              img{
                  width:100%;
                  border-radius: 0px;
              }
              span{
                width: 90%;
                margin: auto;
                text-align: center;
                font-size: 1rem;
                  p{
                      padding:0px;
                      text-align: center;

                  }
              }
          }
      }
    .bullet:nth-child(2n){
        flex-direction: column !important;
        margin:auto;
        width: 100%;
        justify-content: center;
        span{
            text-align: center;
        }
    }
    // .bullet:nth-child(4n){
    //     justify-content: center;
    //     margin-top: 1rem;
    //     flex-direction: column;
    //     img{
    //         width:100%;
    //     }
    //     span{
    //         margin:auto;
    //         padding:1rem;
    //         width: 100%;
    //         text-align: cemter;
    //         font-size: 1rem;
    //     }
    // }
    .close{
        margin:1rem;
        padding:1.5rem;
        box-shadow: -5px 5px 0px black;
        font-size: 1.2rem;
    }
    .page{
        width:100%;
    }
    .genre-quote {
      font-size: 20px;
      width: 85vw;
      padding: 0.5rem;
    }
    .title {
      font-size: 1rem !important;
      color:black;
    }
    .squiggle {
      padding: 3rem 0;
    }
    .intro{
        flex-direction: column;
        width:95%;
        margin:2rem auto;
        .ask{
            margin:auto;
            text-align:center;
            font-size: 1.2rem;
            padding:1rem;
            width:90%;
            div{
                padding:0px;
                margin-bottom: 1rem;
            }
        }
        .blurb{
            width: 100%;
            font-size:1rem;
            padding:0px;
            .blurb2{
                font-size:1rem;
            }
        }
    }
  }

</style>

<script>
  export default {
    name: 'Project',
    props: [
      'fireGenres',
      'genres',
      'project'
    ],
    data () {
      return {
        msg: 'Name',
        name: this.$route.params.name,
        entries: {},
        entrie: {},
        content: {}
      }
    },
    mounted () {
      this.getThings()
    },
    methods: {
      getThings () {
        const key = 'h1YfXEtXaHOlW79C8TBNOoGkOd1IFVmV'
        const cors = 'https://cors.io/'
        const projects = `${cors}?https://api.behance.net/v2/users/andrewmundy/projects?client_id=${key}`
        fetch(projects)
            .then(res => res.json())
            .then(async (data) => {
              let newObj = {}
              for (let i = 0; i < data.projects.length; i++) {
                newObj[data.projects[i].name] = data.projects[i]
                // console.log(data.projects[i])
              }
              let name = this.parseUrl()
              let url = newObj[name].id
              let project = `${cors}?https://api.behance.net/v2/projects/${url}?client_id=${key}`

              fetch(project)
                .then(res => res.json())
                .then(async (data) => {
                  let modules = {}
                //   console.log(data.project.colors[0])
                //   console.log(data.project.modules)
                  modules.fields = data.project.fields
                  modules.title = data.project.modules[0].text
                  modules.ask = data.project.modules[1].text_plain
                  modules.blurb = data.project.modules[2].text_plain
                  modules.story = data.project.modules[3].text_plain
                  modules.banner = data.project.modules[4].sizes[1400] || data.project.modules[4].sizes['max_1200']
                  modules.bullets = {}

                  for (let i = 5; i < data.project.modules.length; i++) {
                    if (data.project.modules[i].type === 'image') {
                      modules.bullets[i] = {}
                      modules.bullets[i].img = data.project.modules[i].sizes[1400] || data.project.modules[i].sizes['max_1200']
                      modules.bullets[i].caption = data.project.modules[i].caption_plain
                    } else {
                      modules.close = data.project.modules[i].text
                    }
                  }

                //   console.log(modules.bullets)
                  this.content = modules
                })
                // await this.setState({
                //     entries: image
                // })
            }).catch(function () {
            //   console.log('Behance, promise Err')
            })
      },
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

