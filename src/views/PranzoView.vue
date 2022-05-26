<template>
  <div class="">
      <div class="nav-2 nav-pranzo container-fluid">
          <div class="row">
          <div class="col-12">Cosa cerchi?</div>
          </div>
          <div class="row mt-3">
              <div class="col-12 d-flex justify-content-center">
                    <ul class="list-unstyled d-flex justify-content-between w-50">
                        <li @click="setAll()" class="">Tutto</li>
                        <li @click="setInsalata()" class="">Insalate</li>
                        <li @click="setPiatti()" class="">Piatti</li>
                        <li @click="setDessert()">Dessert</li>
                        <li @click="setBevande()">Bevande</li>
                    </ul>
              </div>
          </div>
      </div>
        <div class="container-fluid">
            <div class="row">
        <div class="container-fluid">
            <div v-for="(piatto, index) in piatti2" :key="index" class="row">
                <div v-show="piatto.title" class="col-12">
                        <h1>{{piatto.title}}</h1>
                </div>
                <div class="col-4">
                        <h3>{{piatto.nome}}</h3>
                </div>
                <div class="col-4">
                            <h5 v-if="piatto.condimenti == null"></h5>
                            <h5 v-else>Condimenti</h5>
                            <p>{{piatto.condimenti}}</p>
                </div>
                <div class="col-4">
                            <div>€ {{piatto.prezzo}}</div>
                </div>
            </div>
        </div>
    </div>
</div>
    <PreFooter class="prefooter"/>
  </div>
</template>

<script>

import PreFooter from "@/components/PreFooter.vue";

export default {
name: "PranzoView",
components: {
    PreFooter
},
data() { return {
    
    setter : "All",
    piatti2: [],
    piatti: [
        // insalate
        {
            nome: "Bresaola",
            categoria: "insalata",
            condimenti: "iceberg, radicchio,valeriana, datterino, grana, bresaola",
            prezzo: 10,
            title: "Insalate",
            class: "bg-success"
        },
        {
            nome: "Tonno",
            categoria: "insalata",
            condimenti: "iceberg,rucola, valeriana, tonno, olive, mozzarella",
            prezzo: 10
        },
        {
            nome: "Greca",
            categoria: "insalata",
            condimenti: "iceberg,cipolla,olive,cetriolo,datterino,feta,salsa yogurt",
            prezzo: 8,
        },

        // piatti
          {
            nome: "Caprese",
            categoria: "piatti",
            condimenti: "datterino, fior di latte, basilico",
            prezzo: 8,
            title: "I Nostri piatti"
        },
        {
            nome: "La Magra",
            categoria: "piatti",
            condimenti: "carpaccio di fassona, rucola, grana, vinagrette al limone, olio evo",
            prezzo: 13,
        },
        {
            nome: "L'Adige",
            categoria: "piatti",
            condimenti: "carne salada “cotta”, fagioli borlotti, cipolla, olio evo",
            prezzo: 13,
        },
        {
            nome: "Un 'po' di tartarre",
            categoria: "piatti",
            condimenti: "tartare di fassona con mango e chicchi di melograno, senape",
            prezzo: 15,
        },
        {
            nome: "Sampieri",
            categoria: "piatti",
            condimenti: "tartare di salmone, avocado, erba cipollina, vinagrette al limone",
            prezzo: 15,
        },

        // dessert

                {
            nome: "Semifreddo “croccante al pistacchio”",
            categoria: "dessert",
            prezzo: 7,
            title: "Dessert"
        },
                {
            nome: "Geometrie di cioccolato e pere",
            categoria: "dessert",
            prezzo: 7,
        },
                {
            nome: "Semifreddo “croccante alla mandorla”",
            categoria: "dessert",
            prezzo: 6,
        },
        {
            nome: "Semifreddo “agrumi di sicilia”",
            categoria: "dessert",
            prezzo: 6,
        },

        // bevande

        {
            nome: "acqua naturale 0,5cl",
            categoria: "bevande",
            prezzo: 1,
            title: "Bevande"
        },
        {
            nome: "acqua frizzante 0,5cl",
            categoria: "bevande",
            prezzo: 1,

        },
                {
            nome: "succo di frutta ace, pesca, ananas",
            categoria: "bevande",
            prezzo: 2,

        },

       
    ],
    

}
},
mounted() {

    this.piatti2 =  this.piatti.filter((element) => element.categoria == this.setter)
    console.log("new", this.piatti2);
    
    if ( this.setter == "All") {
     this.piatti2 = this.piatti;
    }
        var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname + window.location.search
        console.log(window.location.protocol);
        console.log(window.location.host);
        console.log(window.location.pathname);
        console.log(window.location.search);
        console.log("ok");

        console.log(newURL);

        let proviamo = window.location.protocol + "//" + window.location.host + "/#/" + "pranzo"

        console.log(proviamo);

        console.log(window.location.hash);
 
},

methods: {
    setAll() {
        this.setter = "All";
            this.piatti2 =  this.piatti.filter((element) => element.categoria == this.setter)
    console.log("new", this.piatti2);
    
    if ( this.setter == "All") {
     this.piatti2 = this.piatti;
    }
    },

    setInsalata() {
        this.setter = "insalata";
            this.piatti2 =  this.piatti.filter((element) => element.categoria == this.setter)
    console.log("new", this.piatti2);
    
    if ( this.setter == "All") {
     this.piatti2 = this.piatti;
    }
    },

      setPiatti() {
        this.setter = "piatti";
            this.piatti2 =  this.piatti.filter((element) => element.categoria == this.setter)
    console.log("new", this.piatti2);
    
    if ( this.setter == "All") {
     this.piatti2 = this.piatti;
    }
    },

          setDessert() {
        this.setter = "dessert";
            this.piatti2 =  this.piatti.filter((element) => element.categoria == this.setter)
    console.log("new", this.piatti2);
    
    if ( this.setter == "All") {
     this.piatti2 = this.piatti;
    }
    },

              setBevande() {
        this.setter = "bevande";
            this.piatti2 =  this.piatti.filter((element) => element.categoria == this.setter)
    console.log("new", this.piatti2);
    
    if ( this.setter == "All") {
     this.piatti2 = this.piatti;
    }
    },

}
}
</script>

<style>



</style>>


