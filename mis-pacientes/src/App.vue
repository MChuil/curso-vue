<script setup>
  import Header from './components/Header.vue';
  import Form from './components/Form.vue';
  import Pacientes from './components/Pacientes.vue';
  import { ref, reactive } from 'vue';

  const pacientes = ref([]);

  const mascota = reactive({
      name:  '',
      owner: '',
      email: '',
      date: '',
      symptoms: ''
  });

  const guardarPaciente = ()=>{
    pacientes.value.push(mascota);
    console.log(pacientes.value);
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
        @guardar-paciente="guardarPaciente"
      />

      <div class="md:w-1/2 md:h-screen overflow-y-scroll">
        <h3 class="font-black text-3xl text-center">Mis Pacientes</h3>
        <div v-if="pacientes.length > 0" class="mt-10">
          <Pacientes />
        </div>
        <div v-else class="text-center mt-10 text-2xl">
          <h4>Aun no hay pacientes registrados</h4>
        </div>
      </div>
    </div>

  </div>

</template>
