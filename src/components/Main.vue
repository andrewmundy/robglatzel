<template>
    <div>
      <div class="header">
        <div class="title">
          <img class="logo" src="../assets/AM_logo.svg"> 
          <span class="name">ANDREW<br> MUNDY</span>
        </div>
        <div class="headline"> 
          <span>Product Designer</span>  <span>Software Engineer</span>  <span>UI/UX </span>
        </div>
        <img class="logo" src="../assets/Avatar.svg"> 
        <h2 class="quote">
          "I have a passion for creating beautiful, functional, rock solid products and experiences from within small agile teams."
        </h2>
        <button class="header-button">Contact</button>
        <button class="header-button-empty">Resume</button>
      </div>
      <projects/>
      bye
    </div>
</template>

<style>
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
    font-size: 40px;
    width: 60vw;
    margin: auto;
  }
  .logo{
    width: 10rem;
  }
  .title{
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .header{
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
@media screen and (max-device-width: 1024px){
  .headline{
    font-size: 2.5rem;  
    padding: 3rem 0.5rem;
  }
  .name{
    font-size:3.5rem;
    text-align: center;
    padding:0px;
  }
  .title{
    flex-wrap: wrap;
  }
  .header{
    /* height:50vh; */
  }
  .projects{
    margin: 0%;
  }
  .text{
    width: 100vw;
  }
  .quote{
    padding:1rem;
    width: auto;    
  }
}

</style>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: 'Main Page.'
    }
  }
}
</script>