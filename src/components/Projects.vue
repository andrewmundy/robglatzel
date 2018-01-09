<template>
<div class="section">
    <h1 class="genre-titles">Development</h1>
    <div class="projects">
        <div class="project">
            <a href="http://www.batchplz.com/">
            <img src="../assets/projects/batch.png">
            <div class="text">
                <h1>BatchPlz</h1>
                <h2>Cocktail Batching App</h2>
                <i>ReactJS, SASS, CSS Grid, Firebase</i>
                <p></p>
            </div>
            </a>
        </div>
        <div class="project">
            <a href="https://www.ceelow.herokuapp.com/">
            <img src="../assets/projects/ceelo.png">
            <div class="text">
                <h1>Cee-Lo</h1>
                <h2>Virtual Dice, Real IOU's</h2>
                <i>VueJS, SASS, CSS Grid, Firebase</i>
                <p></p>
            </div>
            </a>
        </div>
        <div class="project itsalive">
            <a href="https://codepen.io/andrewmundy/full/LzzKoX/">
            <img src="../assets/projects/itsalive.svg">
            <div class="text">
                <h1>Its Alive!</h1>
                <h2>SVG Animation</h2>
                <i>Sketch, SVG</i>
                <p></p>
            </div>
            </a>
        </div>
        <div class="project">
            <a href="http://www.pokequotes.com/">
            <img src="../assets/projects/pokequotes.png">
            <div class="text">
                <h1>PokeQuotes</h1>
                <h2>Inspirational Nonsense</h2>
                <i>jQuery, Bootstrap, Flexbox</i>
                <p></p>
            </div>
            </a>
        </div>
        <div class="project">
            <a href="https://github.com/andrewmundy/jackhandeyapi">
            <img src="../assets/projects/jackhandey.png">
            <div class="text">
                <h1>Jack Handey API</h1>
                <h2>138 Legendary Quotes</h2>
                <i>MongoDB, NodeJS</i>
                <p></p>
            </div>
            </a>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {
      msg: 'hi'
    }
  }
}
</script>
<style>
    .section{
        background: rgba(255, 255, 255, 0.9);
    }
    .projects{
        min-height: 500px;
        width:100vw;
        padding: 1rem 0;
        margin: 1rem 0;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
    }
    .project{
        position: relative;
        width:25vw;
        height: 25vw;
        overflow: hidden;
    }
    .project img{
        width:100%;
        filter:opacity(0.6);
        transition: filter 0.3s ease-in-out;
    }
    .project img:hover{
        filter:opacity(1);
    }
    .text{
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 25vw;
        text-align: left;
        padding: 0 0.5rem;
    }
    .text h1, .text h2{
        color:white;
        margin:0.2rem;
        font-size:1rem;
        /* background:white; */
    }
    .text i{
        font-size:0.8rem;
        color:rgba(255, 255, 255, 0.788);

    }
    .text h2{
        font-size:0.8rem;
        color:rgba(255, 255, 255, 0.822);

    }
    .genre-titles{
        text-align: left;
        font-size: 2rem;
        color:rgb(213, 139, 216);
        padding: 1rem 0 0 1rem;
    }
    .itsalive{
        /* background:black; */
    }

@media screen and (max-device-width: 1024px){
    .project{
        width: 50vw;
        height: 50vw;
        filter:opacity(1);
    }
    .projects{
        flex-wrap: wrap;
        padding:0px;
    }
    .genre-titles{
        text-align: left;
        font-size: 2rem;
    }
    .text{
        font-size:0.1rem;
        width: 100%;
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
}
</style>