<script setup>
    defineProps({
        paciente:{
            type: Object,
            required: true
        }
    });
    defineEmits(['actualizar-paciente']);
</script>
<template>
    
    <div class="mx-5 my-10 bg-white shadow-md rounded-xl px-5 py-10">
        <p class="font-bold mb-3 text-gray-700 uppercase">
            ID:
            <span class="font-normal normal-case">
                {{ paciente.id }}
            </span>
        </p>
        <p class="font-bold mb-3 text-gray-700 uppercase">
            nombre:
            <span class="font-normal normal-case">
                {{  paciente.name }}
            </span>
        </p>
        <p class="font-bold mb-3 text-gray-700 uppercase">
            propietario:
            <span class="font-normal normal-case">
                {{  paciente.owner }}
            </span>
        </p>
        <p class="font-bold mb-3 text-gray-700 uppercase">
            Correo electronico:
            <span class="font-normal normal-case">
                {{  paciente.email }}
            </span>
        </p>
        <p class="font-bold mb-3 text-gray-700 uppercase">
            Fecha de alta:
            <span class="font-normal normal-case">
                {{ paciente.date }}
            </span>
        </p>
        <p class="font-bold mb-3 text-gray-700 uppercase">
            Sintomas:
            <span class="font-normal normal-case">
                {{ paciente.symptoms }}
            </span>
        </p>

        <div class="grid md:grid-cols-2 gap-5 mt-10">
            <button
            type="button"
            class="block w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold upperacase rounded-lg"
            @click="$emit('actualizar-paciente', paciente.id)"
            >Editar</button>
            <button
            type="button"
            class="block w-full py-2 bg-red-600 hover:bg-red-700 text-white font-bold upperacase rounded-lg"
            >Eliminar</button>
        </div>
    </div>
</template>