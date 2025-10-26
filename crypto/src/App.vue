<script setup>
  import { ref, onMounted, reactive } from 'vue';
  import Alerta from './components/Alert.vue';
  const criptomonedas = ref ([]);

  const monedas = ref([
    { codigo: 'USD', texto : 'Dólar de Estados Unidos' },
    { codigo: 'MXN', texto : 'Peso Mexicano' },
    { codigo: 'EUR', texto : 'Euro' },
    { codigo: 'GBP', texto : 'Libra Esterlina' }
  ]);

  const cotizar = reactive({
    moneda: '',
    criptomoneda: ''
  });
  
  const error = ref('');

  onMounted(()=>{
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(data =>{
        criptomonedas.value = data.Data;
        console.log(criptomonedas.value);
      })
  })

const obtenerCotizacion = ()=>{
  //validar que state cotizar no tenga campos 
  
  // if(Object.values(cotizar).includes('')){
  //   alert('Ambos campos son obligatorios');
  //   return;
  // }
  if(cotizar.moneda ==''){
    error.value ="No has seleccionado la moneda del pais";
    return;
  }

  if(cotizar.criptomoneda ==''){
    error.value ="No has seleccionado la criptomoneda";
    return;
  }

  console.log('Cotizando...');
  
}
</script>

<template>
  <div class="contenedor">
    <h1 class="titulo">Cotizador de <span>Criptomonedas</span></h1>
    <div class="contenido">
      <Alerta v-if="error">
        {{ error}}
      </Alerta> 
      <form 
        class="formulario"
        @submit.prevent="obtenerCotizacion()">
        <div class="campo">
          <label for="moneda">Moneda</label>
          <select 
            id="moneda"
            v-model="cotizar.moneda"
            >
            <option value="" disabled selected>Seleccionar</option>
            <option v-for="moneda in monedas" :value="moneda.codigo">{{ moneda.texto }}</option>
          </select>
        </div>

        <div class="campo">
          <label for="cripto">Criptomoneda</label>
          <select
            id="cripto"
            v-model="cotizar.criptomoneda">
            <option value="" disabled selected>Seleccionar</option>
            <option v-for="cripto in criptomonedas" :value="cripto.CoinInfo.Name">
             {{ cripto.CoinInfo.FullName }}
            </option>
          </select>
        </div>

        <input type="submit" value="Cotizar" />
      </form>
    </div>

  </div>

  <main>
 
  </main>
</template>

<style scoped>

</style>
