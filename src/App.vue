<template>
  <div id="app">
    <nav class="navbar-1">
      <router-link to="/" @click.native="changeHome()">Home</router-link> |
      <router-link to="/pranzo" @click.native="changePranzo()">Pranzo</router-link> |
      <router-link to="/cena" @click.native="changeCena()">Cena</router-link> |
      <router-link to="/Drink" @click.native="changeDrink()">Drink</router-link>

    </nav>
    <router-view/>
  </div>
</template>

<script>



export default {
    components: {

  },
data() {
  return {
    page:"",
    route: window.location.hash,

  }
},
mounted() {
  console.log("test",window.location.hash);
      let bar = document.querySelector(".navbar-1")

  if (window.location.hash == "#/") {
  bar.classList.add("ceruleo")
  }else if (window.location.hash == "#/pranzo") {
    bar.classList.add("giallo")


  }else if (window.location.hash == "#/cena") {
    bar.classList.add("rosso")


  }else if (window.location.hash == "#/Drink"){
    bar.classList.add("viola")

  }
},

methods: {
  
  changeHome() {
  let bar = document.querySelector(".navbar-1")
  bar.classList.add("ceruleo")
  if (bar.classList.contains("giallo")) {
    bar.classList.remove("giallo")
    
  }

    if (bar.classList.contains("viola")) {
      bar.classList.remove("viola")
    
    
  }

    if (bar.classList.contains("rosso")) {
      bar.classList.remove("rosso")
    
  }


  },

  changePranzo() {

    let bar = document.querySelector(".navbar-1")
    console.log(bar);
    bar.classList.add("giallo")

    if (bar.classList.contains("ceruleo")) {
    bar.classList.remove("ceruleo")
    
  }

    if (bar.classList.contains("viola")) {
      bar.classList.remove("viola")
    
    
  }

  if (bar.classList.contains("rosso")) {
      bar.classList.remove("rosso")
    
  }

  },

  changeCena() {
  let bar = document.querySelector(".navbar-1")
    bar.classList.add("rosso")

      if (bar.classList.contains("giallo")) {
    bar.classList.remove("giallo")
    
  }

    if (bar.classList.contains("viola")) {
      bar.classList.remove("viola")
    
    
  }

    if (bar.classList.contains("ceruleo")) {
      bar.classList.remove("ceruleo")
    
  }
 

  },

  changeDrink() {
  let bar = document.querySelector(".navbar-1")
    bar.classList.add("viola")

      if (bar.classList.contains("giallo")) {
    bar.classList.remove("giallo")
    
  }

    if (bar.classList.contains("ceruleo")) {
      bar.classList.remove("ceruleo")
    
    
  }

    if (bar.classList.contains("rosso")) {
      bar.classList.remove("rosso")
    
  }

  }
}
}

</script>


<style>

 
 /* @import "./assets/scss/style.scss"; */


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

nav {
  padding: 30px;
  text-align: center;
}

  .ceruleo {
    background-color: #42a0bd;
  }

  .giallo {
    background-color: #ff9d0a;
  }

  .rosso {
    background-color: #e94949 ;
  }

  .viola {
    background-color: #f20d93;
  }

nav a {
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.prefooter {
  margin-top: 30px;
}
</style>
