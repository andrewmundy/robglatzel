<template>
<div class="section">
    <h1 class="genre-titles">Development</h1>
    <h2 class="genre-quote">
        "With experience and accessibility at the forefront of my development initiatives, I strive to build products for all the world’s users and all of their devices."
    </h2>
    <div class="projects">
        <div class="project">
            <a target="_blank" href="http://www.batchplz.com/">
            <img src="../assets/projects/batch.png">
            <div class="text">
                <h1>BatchPlz</h1>
                <h2>Cocktail Batching App</h2>
                <div class="badges">
                    <img src="../assets/icons/react.svg">
                    <img src="../assets/icons/html5.svg">
                    <img src="../assets/icons/sass.svg">
                    <img src="../assets/icons/cssgrid.svg">
                    <img src="../assets/icons/firebase.svg">
                </div>
            </div>
            </a>
        </div>
        <div class="project">
            <a target="_blank" href="https://ceelow.herokuapp.com/">
            <img src="../assets/projects/ceelo.png">
            <div class="text">
                <h1>Cee-Lo</h1>
                <h2>Virtual Dice, Real Ended Friendships</h2>
                <div class="badges">
                    <img src="../assets/icons/vuejs.svg">
                    <img src="../assets/icons/html5.svg">
                    <img src="../assets/icons/sass.svg">
                    <img src="../assets/icons/cssgrid.svg">
                    <img src="../assets/icons/firebase.svg">
                </div>
            </div>
            </a>
        </div>
        <div class="project itsalive">
            <a target="_blank" href="https://codepen.io/andrewmundy/full/LzzKoX/">
            <img src="../assets/projects/itsalive.svg">
            <div class="text">
                <h1>Its Alive!</h1>
                <h2>SVG Animation</h2>
                <div class="badges">
                    <img src="../assets/icons/svg.svg">
                    <img src="../assets/icons/html5.svg">
                </div>
            </div>
            </a>
        </div>
        <div class="project">
            <a target="_blank" href="http://www.pokequotes.com/">
            <img src="../assets/projects/pokequotes.png">
            <div class="text">
                <h1>PokeQuotes</h1>
                <h2>Inspirational Nonsense</h2>
                <div class="badges">
                    <img src="../assets/icons/html5.svg">
                    <img src="../assets/icons/bootstrap.svg">
                    <img src="../assets/icons/js.svg">
                </div>
            </div>
            </a>
        </div>
        <div class="project">
            <a target="_blank" href="https://github.com/andrewmundy/jackhandeyapi">
            <img src="../assets/projects/jackhandey.png">
            <div class="text">
                <h1>Jack Handey API</h1>
                <h2>138 Legendary Quotes</h2>
                <div class="badges">
                    <img src="../assets/icons/mongodb.svg">
                    <img src="../assets/icons/node-js.svg">
                </div>
            </div>
            </a>
        </div>
    </div>

    <div class="spacer"></div>

    <img class="squiggle" src="../assets/squiggle.svg">

    <!-- <div class="spacer"></div> -->

    <h1 class="genre-titles">Design</h1>
    <h2 class="genre-quote">
        "Design has always been at the forefront of my being. While tools and styles evolve over time, my basic principals have always remained." <p><i>Inviting, functional, personal, fun.</i></p>
    </h2>
    <div class="projects">
        <div class="project">
            <a target="_blank" href="https://www.behance.net/gallery/56262049/Chlorophylled-with-indifference">
            <img src="../assets/projects/chloriphilled.png">
            <div class="text">
                <h1>Chloriphilled With Indifference</h1>
                <h2>They're Making Me Awkward</h2>
                <div class="badges">
                    <img alt="sketch" src="../assets/icons/gem.svg">
                </div>
            </div>
            </a>
        </div>
        <div class="project">
            <a target="_blank" href="https://www.behance.net/gallery/54140457/Andrewm-Undy">
            <img src="../assets/projects/amlogo.png">
            <div class="text">
                <h1>Mr. Mund</h1>
                <h2>My Special Enthused Mascot</h2>
                <div class="badges">
                    <img alt="sketch" src="../assets/icons/gem.svg">
                </div>
            </div>
            </a>
        </div>
        <div class="project">
            <a target="_blank" href="https://www.behance.net/gallery/53306869/Paintings-Traditional-Art-Styles">
            <img src="../assets/projects/chall.png">
            <div class="text">
                <h1>Chillen</h1>
                <h2>Relax a Bit</h2>
                <div class="badges">
                    <img alt="sketch" src="../assets/icons/pen-alt.svg">
                    <img alt="sketch" src="../assets/icons/paint-brush.svg">
                </div>
            </div>
            </a>
        </div>
        <div class="project">
            <a target="_blank" href="https://www.behance.net/gallery/43147761/Nopal-en-Movimiento">
            <img src="../assets/projects/nopa.gif">
            <div class="text">
                <h1>Nopal en Movimiento</h1>
                <h2>Plants in Motion</h2>
                <div class="badges">
                    <img alt="sketch" src="../assets/icons/ai.svg">
                </div>
            </div>
            </a>
        </div>
        <div class="project">
            <a target="_blank" href="https://www.behance.net/gallery/53304567/Various-Gif-Assets">
            <img src="../assets/projects/guy.gif">
            <div class="text">
                <h1>Guy</h1>
                <h2>Glasses on the Front or Back?</h2>
                <div class="badges">
                    <img alt="sketch" src="../assets/icons/ai.svg">
                </div>
            </div>
            </a>
        </div>
        <div class="project">
            <a target="_blank" href="https://www.behance.net/gallery/53306869/Paintings-Traditional-Art-Styles">
            <img src="../assets/projects/lysergic.png">
            <div class="text">
                <h1>Lysergic</h1>
                <h2>Your Mind is your 6th Sense</h2>
                <div class="badges">
                    <img alt="sketch" src="../assets/icons/pen-alt.svg">
                    <img alt="sketch" src="../assets/icons/paint-brush.svg">
                </div>
            </div>
            </a>
        </div>
    </div>

    </div>
</div>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {
      msg: 'hi',
      icons: {
        'vue': '../assets/icons/vuejs.svg',
        'cssgrid': '../assets/icons/cssgrid.svg',
        'firebase': '../assets/icons/firebase.svg',
        'html5': '../assets/icons/html5.svg',
        'mongodb': '../assets/icons/mongodb.svg',
        'node': '../assets/icons/node.svg',
        'react': '../assets/icons/react.svg',
        'sass': '../assets/icons/sass.svg'
      }
    }
  }
}
</script>
<style>
    .badges{
        display: flex;
        justify-content: space-around;
        align-content: center;
        padding:1rem 2rem;
    }
    .section{
        position: relative;
        z-index: 2;
        /* background: rgba(255, 255, 255, 0.9); */
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
        /* height: 25vw; */
        /* overflow: hidden; */
        background: white;   
        margin:1rem;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.171);
    }
    .project img{
        width:100%;
        filter:opacity(0.8);
        transition: filter 0.3s ease-in-out;
    }
    .project img:hover{
        filter:opacity(1);
    }
    .badges *{
        max-width: 20px;
        max-height: 20px;
        filter:opacity(0.4) !important;
    }
    .text{
        /* position: absolute; */
        /* bottom: 0px; */
        /* left: 0px; */
        /* width: 25vw; */
        text-align: left;
        padding: 0 0.5rem;
    }
    .text h1, .text h2{
        color:black;
        margin:0.2rem;
        font-size:1rem;
        /* background:white; */
    }
    .text i{
        font-size:0.8rem;
        color:rgba(0, 0, 0, 0.788);

    }
    .text h2{
        font-size:0.8rem;
        color:rgba(0, 0, 0, 0.822);

    }
    .genre-titles{
        text-align: left;
        font-size: 2rem;
        color:white;
        padding: 1rem 0 0 5rem;
    }
    .genre-quote{
        padding: 2rem;
        color:white;
        /* font-family: Avenir, Helvetica-Neue; */
        font-weight: 500;
        font-style: normal;
        font-family: medium-content-serif-font,Georgia,Cambria,"Times New Roman",Times,serif;
        font-size: 32px;
        width: 50vw;
        margin: auto;
    }    
    .itsalive{
        /* background:black; */
    }

@media screen and (max-device-width: 1024px){
    .project{
        width: 42vw;
        margin: 0.4rem;
        /* background:none; */
    }
    .project img{
        filter:opacity(1);
        
    }
    .genre-titles{
        padding:1rem;
    }
    .genre-quote{
        padding:0;
        font-size: 22px;
        width: 90vw;    
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
}
</style>