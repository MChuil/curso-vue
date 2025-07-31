<script setup>
import { ref } from 'vue';
import Alert from './Alert.vue';

const presupuesto = ref(0);
const error = ref('');

const emit = defineEmits('definir-presupuesto');

const definirPresupuesto = ()=>{
    if(presupuesto.value<= 0){
        error.value = 'Presupuesto no válido';
        setTimeout(()=>{
            error.value = '';
        }, 1000);
        return;
    }

    emit('definir-presupuesto', presupuesto.value)

}


</script>
<template>
    <form 
        class="presupuesto"
        @submit.prevent="definirPresupuesto"
    >

        <Alert v-if="error">
            {{ error }}
        </Alert>

        <div class="campo">
            <label for="nuevo-presupuesto">Definir presupuesto</label>
            <input 
                type="number" 
                id="nuevo-presupuesto" 
                placeholder="Añade tu presupuesto" 
                class="nuevo-presupuesto"
                min="0"
                v-model.number="presupuesto"
            >
        </div>

        <input type="submit" value="Definir presupuesto">
    </form>
</template>


<style lang="scss" scoped>
    .presupuesto {
        width: 100%;;
    }

    .campo{ 
        display: grid;
        gap: 2rem;
    }

    .presupuesto label{
        font-size: 2.2rem;
        text-align: center;
        color: var(--azul);
    }

    .presupuesto input[type="number"]{
        background-color: var(--gris-claro);
        border-radius:1rem;
        padding: 1rem;
        border: none;
        text-align: center;
        font-size: 2.2rem;
    }

    .presupuesto input[type="submit"]{
        border: none;
        background-color: var(--azul);
        font-size: 2rem;
        padding: 1rem;
        text-align: center;
        margin-top:2rem;
        color: var(--blanco);
        font-weight: 900;
        width: 100%;
        transition: background-color 500ms ease;
    }

    .presupuesto input[type="submit"]:hover{
        cursor:pointer;
        background-color: #1048A4;
    }
</style>