<template>
    <div class="projects">
        <div class="project">
            <img src="../assets/AM_logo.svg">
            project1
        </div>
        <div class="project">
             <img src="../assets/AM_logo.svg">
             project2
             </div>
        <div class="project">
            <img src="../assets/AM_logo.svg">
            project3
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
    .projects{
        min-height: 500px;
        background-color:rgba(255, 255, 255, 0.877);
        width:100vw;
        padding: 1rem 0;
        margin: 1rem 0;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .project{
        width:33.33vw;
    }
    .project img{
        width:100%;
    }

@media screen and (max-device-width: 1024px){
    .project{
        width: 50%;
    }
    .projects{
        flex-wrap: wrap;
    }
}
</style>