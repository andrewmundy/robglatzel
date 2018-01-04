<template>
    <div>
      <div class="header">
        <img class="logo" src="../assets/AM_logo.svg">
        <h1>
          <span>ANDREW</span>
          <span>MUNDY!</span>
        </h1>
      </div>
      <button class="header-button">Who Dat 🤷‍♀️</button>
      <hunk class="hunk-white"></hunk>
      <hunk class="hunk-clear"></hunk>
      <hunk class="hunk-white"></hunk>
      <hunk class="hunk-clear"></hunk>
      <hunk class="hunk-white"></hunk>
      <hunk class="hunk-clear"></hunk>
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
    font-size: 1.3rem;
  }
  .logo{
    width: 10rem;
  }
  .header{
    padding-top:2rem;
    margin:0px;
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