<script setup>
  import Header from './components/Header.vue';
  import Form from './components/Form.vue';
  import Pacientes from './components/Pacientes.vue';
  import { ref, reactive } from 'vue';
  import { uid } from 'uid';

  const pacientes = ref([]);

  const mascota = reactive({
      id:null,
      name:  '',
      owner: '',
      email: '',
      date: '',
      symptoms: ''
  });

  const guardarPaciente = ()=>{
    if(mascota.id){ //edicion
      const { id } = mascota;
      const index =pacientes.value.findIndex(paciente => paciente.id === id);
      pacientes.value[index] = {...mascota};
      
    }else{ //nuevo
      pacientes.value.push({
        ...mascota,
        id: uid()
      });
    }

    //Reiniciar el formulario
    mascota.name = '';
    mascota.owner = '';
    mascota.email = '';
    mascota.date = '';
    mascota.symptoms = '';
    mascota.id = null;
  }


const actualizarPaciente = (id)=>{
  const pacienteEditar = pacientes.value.filter(paciente => paciente.id === id)[0];
  console.log(pacienteEditar);
  Object.assign(mascota, pacienteEditar);
}

const eliminarPaciente = (id) => {
  pacientes.value = pacientes.value.filter(paciente => paciente.id !== id);
}


</script>

<template>
  <div class="container mx-auto mt-20">
    <Header />

    <div class="mt-12 md:flex">
      <Form 
        v-model:name="mascota.name"
        v-model:owner="mascota.owner"
        v-model:email="mascota.email"
        v-model:date="mascota.date"
        v-model:symptoms="mascota.symptoms"
        v-model:id="mascota.id"
        @guardar-paciente="guardarPaciente"
      />

      <div class="md:w-1/2 md:h-screen overflow-y-scroll">
        
        <div v-if="pacientes.length > 0">
          <h2 class="font-black text-3xl text-center">Mis Pacientes</h2>

          <p class="text-lg mt-5 text-center mb-10">
              Añade paciente y
              <span class="font-bold text-indigo-600">Administralos</span>
          </p>
          <Pacientes 
            v-for="paciente in pacientes"
            :key="paciente.id"
            :paciente="paciente"
            @actualizar-paciente="actualizarPaciente"
            @eliminar-paciente="eliminarPaciente"
          />
        </div>
        
        <div v-else class="text-center mt-10 text-2xl">
          <h4>Aun no hay pacientes registrados</h4>
        </div>
      
      </div>
    </div>

  </div>

</template>
