<script setup>
import { ref, reactive, watch, computed } from 'vue';
import Presupuesto from './components/Presupuesto.vue';
import ControlPresupuesto from './components/ControlPresupuesto.vue';
import icoNuevoGasto from './assets/img/nuevo-gasto.svg';
import Modal from './components/Modal.vue';
import { generarId } from './helpers';
import Gasto from './components/Gasto.vue'; 


const modal = reactive({
  mostrar: false,
  animar: false
});

const presupuesto = ref(0);
const disponible = ref(0);
const gastado = ref(0);

const gasto = reactive({
  nombre:'',
  cantidad:'',
  categoria:'',
  id: null,
  fecha: Date.now()
});


const gastos = ref([]);
const categoriaSeleccionada = ref('');

const gastosFiltrados = computed(() => {
  if (!categoriaSeleccionada.value) return gastos.value;
  return gastos.value.filter(gasto => gasto.categoria === categoriaSeleccionada.value);
});

watch(gastos, () => {
  const totalGastado = gastos.value.reduce((total, gastos) => gastos.cantidad + total, 0);
  gastado.value = totalGastado;  //pasamos el total gastado
  //actualizamos el disponible
  disponible.value = presupuesto.value - totalGastado;
},{
  deep: true
})

watch(modal, ()=>{
  if(!modal.mostrar){
    limpiarStateGasto();
  }
},{
  deep: true
})


const definirPresupuesto =(cantidad)=>{
  presupuesto.value = cantidad;
  disponible.value = cantidad;
}

const mostrarModal = () => {
  modal.mostrar = true;
  setTimeout(()=>{
    modal.animar = true;
  }, 300)
}

const ocultarModal = () => {
  modal.animar = false;
  setTimeout(()=>{
    modal.mostrar = false;
  }, 300)
}

const guardarGasto = ()=>{
  if(gasto.id){ // editar
    const { id } = gasto;
    //buscar la posicion del gasto
    const index = gastos.value.findIndex(gasto => gasto.id === id);
    gastos.value[index] = {...gasto}; //agregamos en esa posicion el gasto editado
  }else{ // nuevo
    gasto.id = generarId();
    gastos.value.push({...gasto});
  }
  console.log(gastos.value);
  ocultarModal();
}


const eliminarGasto = () => {
  if(gasto.id){
    const index = gastos.value.findIndex(item => item.id === gasto.id);
    if(index !== -1) {
      gastos.value.splice(index, 1);
    }
    ocultarModal();
  }
}

const limpiarStateGasto =()=>{
  Object.assign(gasto, {
    nombre:'',
    cantidad:'',
    categoria:'',
    id: null,
    fecha: Date.now()
  });

  // gasto.nombre = '';
  // gasto.cantidad = '';
  // gasto.categoria = '';
  // gasto.id= null;
  // gasto.fecha = Date.now();

}

const seleccionarGasto = (id) =>{
  //buscar el gasto
  const gastoEditar = gastos.value.filter(gasto => gasto.id === id);
  //asignar los valores
  Object.assign(gasto, gastoEditar[0]);
  //mostrar el modal
  mostrarModal();
}

</script>

<template>
  <header>
    <h1>Planificador de gastos</h1>

    <div class="contenedor-header contenedor sombra">
      <Presupuesto
        v-if="presupuesto == 0"
        @definir-presupuesto="definirPresupuesto"
      />
      <ControlPresupuesto 
        v-else
        :presupuesto="presupuesto"
        :disponible="disponible"
        :gastado="gastado"
        
        />
    </div>
  </header>

  <main v-if="presupuesto > 0">

    <div class="listado-gastos contenedor">
        <h2>{{ gastos.length > 0 ? 'Gastos': 'No hay gastos'}} </h2>
        <!-- Filtro de categoría -->
        <div style="margin-bottom: 2rem;">
          <label for="filtro-categoria" style="font-weight: bold;">Filtrar por Categoría:</label>
          <select id="filtro-categoria" v-model="categoriaSeleccionada">
              <option value="">Todas</option>
              <option value="ahorro">Ahorro</option>
              <option value="comida">Comida</option>
              <option value="casa">Casa</option>
              <option value="salud">Salud</option>
              <option value="ocio">Ocio</option>
              <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
        <Gasto
          v-for = "gasto in gastosFiltrados"
          :key="gasto.id"
          :gasto= "gasto"
          @seleccionar-gasto="seleccionarGasto"
        />
    </div>
    <div class="crear-gasto">
      <img 
        :src="icoNuevoGasto" 
        alt="Nuevo Gasto"
        @click="mostrarModal"
        >
    </div>

    <Modal
      v-if ="modal.mostrar"
      @ocultar-modal="ocultarModal"
      @guardar-gasto="guardarGasto"
      @eliminar-gasto="eliminarGasto"
      :modal="modal"
      :disponible="disponible"
      :id="gasto.id"
      v-model:nombre = "gasto.nombre"
      v-model:cantidad = "gasto.cantidad"
      v-model:categoria = "gasto.categoria"
    />

  </main>
</template>

<style lang="scss">
:root{
  --azul: #3b82f6;
  --blanco: #ffff;
  --gris-claro: #f5f5f5;
  --gris: #94a3b8;
  --gris-oscuro: #64748b;
  --negro: #000;
}

html{
  font-size: 62.5%;
  box-sizing: border-box;
}

*,
*:before,
*:after{
  box-sizing: inherit;
}

body{
  font-size:1.6rem;
  font-family: "Lato", sans-serif;
  background-color: var(--gris-claro);
}

h1{
  font-size: 4rem;
}

h2{
  font-size: 3rem;
}

header{
  background-color: var(--azul);
}

header h1{
  padding: 3rem 0;
  margin: 0;
  color: var(--blanco);
  text-align: center;
}

.contenedor{
  width: 90%;
  max-width: 80rem;
  margin: 0 auto;  
}

.contendor-header{
  margin-top:-5rem;
  transform: translateY(5rem);
  padding: 5rem;
}

.sombra{
  box-shadow: 7px 10px 15px -3px rgba(0,0,0,0.1);
  background-color: var(--blanco);
  border-radius: 1.2rem;
  padding: 5rem;
}

.crear-gasto{
  position: fixed;
  bottom: 5rem;
  right: 5rem;
}

.crear-gasto img{
  width: 5rem;
  cursor: pointer;
}

.listado-gastos{
  margin-top: 45px;
}

.listado-gastos h2{
  font-weight: 900;
  color: var(--gris-oscuro)
}
</style>