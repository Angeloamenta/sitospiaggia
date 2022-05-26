<template>
<div>
    <div class="nav-2 nav-drink container-fluid">
        <div class="row">
            <div class="col-12">
                Cosa cerchi?
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-12 d-flex justify-content-center">
                <ul class="list-unstyled text-center row w-75">
                    <li @click="setAll()" class="col-12 col-md ">Tutto</li>
                    <li @click="setNostriDrink()" class="col-12 col-md ">I nostri Drink</li>
                    <li @click="setClassici()" class="col-12 col-md ">Classici</li>
                    <li @click="setBevande()" class="col-12 col-md ">Bevande</li>
                    <li @click="setAmari()" class="col-12 col-md ">Amari</li>
                    <li @click="setDistillati()" class="col-12 col-md ">Distillati</li>
                    <li @click="setGin()" class="col-12 col-md ">Gin</li>
                </ul>
            </div>
        </div>
    </div>
          <div class="container-fluid">
          <div v-for="(drink, index) in drinks2" :key="index" class="row">
              <div v-show="drink.title" class="col-12 text-center text-md-start my-3">
                    <h1>{{drink.title}}</h1>
              </div>
              <div class="col-12 col-md-4 bg-fire ">
                    <h3>{{drink.nome}}</h3>
              </div>
              <div class="col-12 col-md-4 ">
                        <h5 v-if="drink.condimenti == null"></h5>
                        <h5 v-else>Ingredienti</h5>
                        <p>{{drink.condimenti}}</p>
              </div>
              <div class="col-12 col-md-4 ">
                        <div>€ {{drink.prezzo}}</div>
              </div>
          </div>
      </div>
          <PreFooter class="prefooter"/>
</div>
  
</template>

<script>

import PreFooter from "@/components/PreFooter.vue";


export default {
name:"DrinkVue",
components: {
    PreFooter
},
data() { return {

    setter : "All",
    drinks2: [],
    drinks: [
        // nostri
        {
            nome: "Blue summer",
            categoria: "nostri",
            condimenti: "(lime, cordial lime & blu curacao, rum blanco)",
            prezzo: 8,
            title: "I nostri drink"
        },
        {
            nome: "Green Woods",
            categoria: "nostri",
            condimenti: "(lime,zucchero all’alloro, melone,gin, dash di midori)",
            prezzo: 8
        },
        {
            nome: "Strawberry Basil...Forever",
            categoria: "nostri",
            condimenti: "(zucchero,lime, fragole, vodka al basilico, soda al pompelmo)",
            prezzo: 8
        },
        {
            nome: "Butter Trid",
            categoria: "nostri",
            condimenti: "(limone,ananas,bourbon al burro, dash di angostura)",
            prezzo: 8
        },
        {
            nome: "Fresh Alexander",
            categoria: "nostri",
            condimenti: "(limone,orzata,brandy,stillabunt,bitter al cioccolato, ginger beer)",
            prezzo: 8
        },

        // drink classici

        {
            nome: "Negroni",
            categoria: "classici",
            condimenti: "(bitter campari, vermouth rosso, gin)",
            prezzo: 6,
            title: "Drink Classici"
        },
        {
            nome: "Americano",
            categoria: "classici",
            condimenti: "(bitter campari, vermouth rosso, soda)",
            prezzo: 6,
        },

        // bevande

        {
            nome: "Forst 1857 33cl",
            categoria: "bevande",
            prezzo: 3,
            title: "Bevande"
        },

        // amari

        {
            nome: "amaro del capo",
            categoria: "amari",
            prezzo: 3,
            title: "Amari"
        },

        // distillati

        {
            nome: "grappa barricata",
            categoria: "distillati",
            prezzo: 3,
            title: "Distillati"
        },

        // gin

         {
            nome: "tanqueray",
            categoria: "gin",
            prezzo: 6,
            title: "Gin"
        },
        
    ]

}
},
mounted() {
    this.drinks2 =  this.drinks.filter((element) => element.categoria == this.setter)
    console.log("new", this.drinks2);
    
    if ( this.setter == "All") {
     this.drinks2 = this.drinks;
    }

    var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname + window.location.search
        console.log(newURL);
},

methods: {

    setAll() {
        this.setter = "All";
            this.drinks2 =  this.drinks.filter((element) => element.categoria == this.setter)
    console.log("new", this.drinks2);
    
    if ( this.setter == "All") {
     this.drinks2 = this.drinks;
    }
    },

    setNostriDrink() {
        this.setter = "nostri";
            this.drinks2 =  this.drinks.filter((element) => element.categoria == this.setter)
    console.log("new", this.drinks2);
    
    if ( this.setter == "All") {
     this.drinks2 = this.drinks;
    }
    },

    setClassici() {
        this.setter = "classici";
            this.drinks2 =  this.drinks.filter((element) => element.categoria == this.setter)
    console.log("new", this.drinks2);
    
    if ( this.setter == "All") {
     this.drinks2 = this.drinks;
    }
    },

    setBevande() {
        this.setter = "bevande";
            this.drinks2 =  this.drinks.filter((element) => element.categoria == this.setter)
    console.log("new", this.drinks2);
    
    if ( this.setter == "All") {
     this.drinks2 = this.drinks;
    }
    },

    setAmari() {
        this.setter = "amari";
            this.drinks2 =  this.drinks.filter((element) => element.categoria == this.setter)
    console.log("new", this.drinks2);
    
    if ( this.setter == "All") {
     this.drinks2 = this.drinks;
    }
    },

    setDistillati() {
        this.setter = "distillati";
            this.drinks2 =  this.drinks.filter((element) => element.categoria == this.setter)
    console.log("new", this.drinks2);
    
    if ( this.setter == "All") {
     this.drinks2 = this.drinks;
    }
    },

    setGin() {
        this.setter = "gin";
            this.drinks2 =  this.drinks.filter((element) => element.categoria == this.setter)
    console.log("new", this.drinks2);
    
    if ( this.setter == "All") {
     this.drinks2 = this.drinks;
    }
    },
}
}
</script>

<style>

</style>