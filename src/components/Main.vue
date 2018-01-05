<template>
    <div>
      <div class="header">
        <div class="title"><img class="logo" src="../assets/AM_logo.svg"> <span class="name">ANDREW<br> MUNDY</span></div>
        <div class="headline"> Product Designer, Software Engineer, UI/UX </div>

      </div>
      <button class="header-button">Contact</button> <button class="header-button-empty">Resume</button>
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
    padding:1rem;
    font-size: 2rem;
  }
  .header-button-empty{
    background: none;
    border-radius: 100px;
    box-shadow: 0 0 0 4px white inset;
    color:white;
    border:none;
    font-weight: 600;
    padding:1rem;
    font-size: 2rem;
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
    padding-top:2rem;
    margin:0px;
  }
  .headline{
    color:white;
    font-size: 5rem;
    padding: 2rem;
    font-weight: 100;
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
    font-size: 3rem;  
    padding: 3rem 0.5rem;
  }
  .name{
    font-size:4rem;
    text-align: center;
    padding:0px;
  }
  .title{
    flex-wrap: wrap;
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