<template>
<div class="section">
    <div v-for="genre in genres.slice().reverse()" :key="genre.id">
        <h1 class="genre-titles">
            {{genre[1].title}}
        </h1>
        <h2 class="genre-quote hidden hidden-left" v-infocus="'showElement'">
            {{genre[1].description}}
        </h2>
        <div class="projects">
            <div v-for="project in genre[1].projects.slice(1)" :key="project && project.id" class="project hidden hidden-up" v-infocus="'showElement'">
                <a v-bind="{project}" :href="'/#/project/' + project.title" >
                    <img :src="project && project.img">
                    <div class="text">
                        <h1>{{project && project.title}}</h1>
                        <h2>{{project && project.subtitle}}</h2>
                        
                    </div>
                </a>
            </div>
        </div>
    <div class="spacer"></div>
    <img class="hidden hidden-right squiggle" v-infocus="'showElement-slow'" src="../assets/squiggle.svg">
    </div>
</div>
</template>

<script>
export default {
  name: 'Projects',
  props: [
    'fireGenres',
    'genres'
  ],
  data () {
    return {
      msg: 'hi',
      newProjects: [],
      projects: '',
      project: '',
      badges: '',
      badge: ''
    }
  },
  methods: {
    startFrom (arr, idx) {
      return arr.slice(idx)
    },
    pushNewProjects () {
    },
    renderBadge (id, genre) {
      let self = this
      let badges = self.fireGenres[genre].project[id].badges
      badges.map(function (badge) {
        return `<img :src='${badge}'>`
      })
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
            rect.bottom <= (window.innerHeight + 350 || document.documentElement.clientHeight)
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
    .transparent{
        background:none !important;
        img{
            max-width:100%;
        }
        .avatar{
            max-width: 89%;
            margin: 1rem;
        }
        .text{
            padding-top:5px;
            background:white;
            margin-top: -5px;
        }
    }
    .badges{
        display: flex;
        justify-content: space-around;
        align-content: center;
        padding:1rem 2rem;
    }
    .section{
        position: relative;
        z-index: 2;
    }
    .projects{
        min-height: 500px;
        width:100vw;
        padding: 1rem 0;
        margin: 1rem 0;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: wrap;
    }
    .project{
        position: relative;
        width:25vw;
        background: white;   
        margin:1rem;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.171);
        img{
            width:100%;
            filter:opacity(1);
            transition: filter 0.3s ease-in-out;
        }
    }
    .project img:hover, .project-am img:hover{
        filter:opacity(0.8);
    }
    .project-am{
        position: relative;
        width:25vw;
        // height:25vw;
        // background: white;   
        margin:1rem;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.171);
        .project-img{
            // padding:2rem;
            filter:opacity(0.8);
            transition: filter 0.3s ease-in-out;
            height:25vw;
        }
        .text{
            background:white;
        }
    }
    .badges *{
        max-width: 20px;
        max-height: 20px;
        filter:opacity(0.4) !important;
    }
    .text{
        text-align: left;
        padding: 0 0.5rem;
        i{
            font-size:0.8rem;
            color:rgba(0, 0, 0, 0.788);
        }
        h1{
            font-size:1rem;
            color:black;
            font-weight: 600;
        }
        h2{
            font-size:1rem;
            font-weight: 400;
            color:rgba(0, 0, 0, 0.822);
        }
    }
    .genre-titles{
        text-align: left;
        font-size: 3rem;
        color:black;
        padding: 1.5rem 0 0 5rem;
    }
    .genre-quote{
        padding: 2rem;
        color:black !important;
        font-weight: 500;
        font-style: normal;
        font-family: medium-content-serif-font,Georgia,Cambria,"Times New Roman",Times,serif;
        font-size: 32px;
        width: 50vw;
        margin: auto;
    }    
    .genre-quote-white{
        padding: 2rem;
        color:white;
        font-weight: 500;
        font-style: normal;
        font-family: medium-content-serif-font,Georgia,Cambria,"Times New Roman",Times,serif;
        font-size: 32px;
        width: 50vw;
        margin: auto;
    }    

@media screen and (max-device-width: 1024px){
    .project{
        width: 45vw;
        margin: 0.3rem;
        img{
            filter:opacity(1);
        }
    }
    .genre-titles{
        padding:1rem;
    }
    .genre-quote{
        padding:0;
        font-size: 22px;
        width: 90vw;    
    }
    .genre-quote-white{
        color:white;
        padding:0;
        font-size: 22px;
        width: 90vw;    
    }    
    .projects{
        flex-wrap: wrap;
        padding:0px;
        margin: 2rem 0;
    }
    .genre-titles{
        text-align: left;
        font-size: 2rem;
    }
    .text{
        font-size: 0.1rem;
        width: 90%;
        padding: 0 0.5rem;
    }
    .text h1, .text h2{
        font-size: 1rem;
        margin:0.2rem;
        /* background:white; */
    }
    .text h2{
        font-size:0.8rem;
    }
    .quote{
        font-size:25px;
        padding:1rem;
    }
    .badges{
        padding:20px 10px;
    }
    .badges *{
        width: 20px;
    }
    .project-am{
        position: relative;
        width:45vw;
        margin:0.3rem;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.171);
        .text{
            background:white;
        }
        .empty{
            width: 45vw;
            height: 45vw;
        }
    }
}
</style>