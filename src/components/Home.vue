<template>
  <div class="Home">
    <div class="container">
        <div class="box">
            <div class="logo"><img class="coin" src="https://i.imgur.com/bug2uB6.png" /></div>
              <div class="text">Your Coins:</div>
              <div class="output">23</div>
              </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.container { 
  margin-left: 20%;
  margin-right: 20%;
  padding-top: 5%
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

.box {
  background-color: white;
  padding: 5%;
  border-radius: 20px;
  /* width: px; */
}
html {
  background: linear-gradient(30deg, #71008a, #696bdd, #69ddc4);
  background-size: 600% 600%;
  -webkit-animation: AnimationName 30s ease infinite;
  -moz-animation: AnimationName 30s ease infinite;
  -o-animation: AnimationName 30s ease infinite;
  animation: AnimationName 30s ease infinite;
}
@-webkit-keyframes AnimationName {
  0% {
    background-position: 0% 67%;
  }
  50% {
    background-position: 100% 34%;
  }
  100% {
    background-position: 0% 67%;
  }
}
@-moz-keyframes AnimationName {
  0% {
    background-position: 0% 67%;
  }
  50% {
    background-position: 100% 34%;
  }
  100% {
    background-position: 0% 67%;
  }
}
@-o-keyframes AnimationName {
  0% {
    background-position: 0% 67%;
  }
  50% {
    background-position: 100% 34%;
  }
  100% {
    background-position: 0% 67%;
  }
}
@keyframes AnimationName {
  0% {
    background-position: 0% 67%;
  }
  50% {
    background-position: 100% 34%;
  }
  100% {
    background-position: 0% 67%;
  }
}

.coin {
  width: 25%;
  height: 25%;
}
.logo {
  text-align: center;
  /* margin: 20% */
  padding-top: 5%;
}
.text {
  font-weight: bold;
  font-size: 30px;
  padding: 25px;
  font-family: Poppins;
}
.output {
  /* font-weight: bold; */
  font-size: 30px;
  font-family: Poppins;
}
</style>
