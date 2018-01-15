<template>
    <div class="form">
        <form action="https://formspree.io/andrewmundy@gmail.com" method="POST">
            <input placeholder="Name" type="text" name="name">
            <input placeholder="Email" type="email" name="_replyto">
            <textarea name="message" placeholder="Send Me a Message"></textarea>
            <button type="submit" value="Send">Send</button>
        </form>
    </div>
</template>

<script>
  export default {
    name: 'Message',
    data () {
      return {
        msg: 'Main Page',
        email: '',
        name: '',
        message: ''
      }
    }
  }
</script>

<style lang="scss">
    .form{
        form {
            display: flex;
            justify-content: center;
            align-content: center;
            flex-wrap:wrap;
            width: 600px;
            margin: auto;
            input, button, textarea {
                background:rgba(255, 255, 255, 0.171);
                border: none;
                padding:0.5rem;
                margin: 0.5rem;
                border-radius:5rem;
                font-size: 0.8rem;
                color:white;
                font-weight: 600;
            }
            input{
                width: 260px;
            }
            textarea{
                width: 540px;
                padding:1rem;
            }
            button{
                width:570px;
            }
        }
    }
    @media screen and (max-device-width: 1024px) {
    .form{
        form {
            width: 300px;
            input, button, textarea {
                padding:0.5rem;
                margin: 0.5rem;
                border-radius:5rem;
                font-size: 0.8rem;
                color:white;
                font-weight: 600;
            }
            input{
                width: 115px;
            }
            textarea{
                width: 300px;
                padding:1rem;
            }
            button{
                width:275px;
            }
        }
    }
    }
  </style>