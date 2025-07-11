<script setup>
    import { reactive } from 'vue';

    const mascota = reactive({
        name:  '',
        owner: '',
        email: '',
        date: '',
        symptoms: ''
    });

    const validar = ()=>{
        if(Object.values(mascota).includes('')){
            alert('Todos los campos son obligatorios');
            return;
        }

        console.log('Guardando datos...');
    }
</script>
<template>
    <div class="md:w-1/2">
        <h2 class="font-black text-3xl text-center">Pacientes</h2>

        <p class="text-lg mt-5 text-center mb-10">
            Añade paciente y
            <span class="font-bold text-indigo-600">Administralos</span>
        </p>
        <form class="bg-white shadow-md rounded-lg py-10 px-5 mb-10" @:submit.prevent="validar" method="POST">
            <div class="mb-5">
                <label for="mascota" class="block text-gray-700 uppercase font-bold">Nombre de la Mascota</label>
                <input id="nombre" type="text" placeholder="Nombre de la mascota"
                    class="border-1 w-full p-2 mt-2 placeholder-gray-400 rounded-md" v-model="mascota.name">
            </div>
            <div class="mb-5">
                <label for="propietario" class="block text-gray-700 uppercase font-bold">Nombre del dueño</label>
                <input id="propietario" type="text" placeholder="Nombre del dueño"
                    class="border-1 w-full p-2 mt-2 placeholder-gray-400 rounded-md" v-model="mascota.owner">
            </div>
            <div class="mb-5">
                <label for="email" class="block text-gray-700 uppercase font-bold">Correo electronico</label>
                <input id="email" type="text" placeholder="Correo electronico"
                    class="border-1 w-full p-2 mt-2 placeholder-gray-400 rounded-md" v-model="mascota.email">
            </div>
            <div class="mb-5">
                <label for="fecha" class="block text-gray-700 uppercase font-bold">Fecha</label>
                <input id="fecha" type="date" class="border-1 w-full p-2 mt-2 rounded-md" v-model="mascota.date">
            </div>
            <div class="mb-5">
                <label for="sintomas" class="block text-gray-700 uppercase font-bold">Sintomas</label>
                <textarea id="sintomas" placeholder="Describe los sintomas"
                    class="border-1 w-full p-2 mt-2 rounded-md h-40 placeholder-gray-400"
                    v-model="mascota.symptoms"></textarea>
            </div>
            <input type="submit"
                class="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 hover:cursor-pointer transition-colors"
                value="Agregar Paciente">
        </form>
    </div>
</template>