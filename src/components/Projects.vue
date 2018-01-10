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
            <a href="https://www.ceelow.herokuapp.com/">
            <img src="../assets/projects/ceelo.png">
            <div class="text">
                <h1>Cee-Lo</h1>
                <h2>Virtual Dice, Real IOU's</h2>
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
            <a href="https://codepen.io/andrewmundy/full/LzzKoX/">
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
            <a href="http://www.pokequotes.com/">
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
            <a href="https://github.com/andrewmundy/jackhandeyapi">
            <img src="../assets/projects/jackhandey.png">
            <div class="text">
                <h1>Jack Handey API</h1>
                <h2>138 Legendary Quotes</h2>
                <div class="badges">
                    <img src="../assets/icons/mongodb.svg">
                    <img src="../assets/icons/node.svg">
                </div>
            </div>
            </a>
        </div>
    </div>

    <h1 class="genre-titles">Design</h1>
    <div class="projects">
        <div class="project">
            <a href="https://www.behance.net/gallery/56262049/Chlorophylled-with-indifference">
            <img src="../assets/projects/chloriphilled.png">
            <div class="text">
                <h1>Chloriphilled With Indifference</h1>
                <h2>They're Making Me Awkward</h2>
                <div class="badges">
                    <img alt="sketch" src="../assets/icons/sketch.png">
                </div>
            </div>
            </a>
        </div>
        <div class="project">
            <a href="https://www.behance.net/gallery/54140457/Andrewm-Undy">
            <img src="../assets/projects/amlogo.png">
            <div class="text">
                <h1>Mr. Mund</h1>
                <h2>My Special Enthused Mascot</h2>
                <div class="badges">
                    <img alt="sketch" src="../assets/icons/sketch.png">
                </div>
            </div>
            </a>
        </div>
        <div class="project">
            <a href="https://www.behance.net/gallery/53306869/Paintings-Traditional-Art-Styles">
            <img src="../assets/projects/chall.png">
            <div class="text">
                <h1>Chillen</h1>
                <h2>Relax a Bit</h2>
                <div class="badges">
                    <img alt="sketch" src="../assets/icons/sketch.png">
                </div>
            </div>
            </a>
        </div>
        <div class="project">
            <a href="https://www.behance.net/gallery/43147761/Nopal-en-Movimiento">
            <img src="../assets/projects/nopa.gif">
            <div class="text">
                <h1>Nopal en Movimiento</h1>
                <h2>Plants in Motion</h2>
                <div class="badges">
                    <img alt="sketch" src="../assets/icons/sketch.png">
                </div>
            </div>
            </a>
        </div>
        <div class="project">
            <a href="https://www.behance.net/gallery/53304567/Various-Gif-Assets">
            <img src="../assets/projects/guy.gif">
            <div class="text">
                <h1>Guy</h1>
                <h2>Glasses on the Front or Back?</h2>
                <div class="badges">
                    <img alt="sketch" src="../assets/icons/sketch.png">
                </div>
            </div>
            </a>
        </div>
        <div class="project">
            <a href="https://www.behance.net/gallery/53306869/Paintings-Traditional-Art-Styles">
            <img src="../assets/projects/lysergic.png">
            <div class="text">
                <h1>Lysergic</h1>
                <h2>Your Mind is your 6th Sense</h2>
                <div class="badges">
                    <img alt="sketch" src="../assets/icons/sketch.png">
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
        padding: 1rem 0 0 1rem;
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
        padding:0;
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