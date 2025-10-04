<script setup>
    import { ref, computed } from 'vue';
    import cerrarModal from '../assets/img/cerrar.svg';
    import Alert from './Alert.vue';

    const error = ref('')

    const emits = defineEmits(['ocultar-modal', 'update:nombre', 'update:cantidad', 'update:categoria', 'guardar-gasto']);
    
    const props = defineProps({
        modal: {
            type: Object,
            required: true
        },
        nombre:{
            type: String,
            required: true
        },
        cantidad: {
            type: [String, Number],
            required: true
        },
        categoria:{
            type: String,
            required: true
        },
        disponible:{
            type: Number,
            required: true
        },
        id:{
            type: [String, null],
            required: true
        }
    });

    const oldCantidad = props.cantidad;  //90

    const agregarGasto = () => {
        //validar que no vengan vacios los campos
        const{ nombre, cantidad, categoria, disponible, id } = props;
        if([nombre, cantidad, categoria].includes('')){
            error.value ='Todos los campos son obligatorios';
            setTimeout(()=>{
                error.value = '';
            }, 3000)
            return;
        }

        //validar la cantidad
        if(cantidad<=0){
            error.value = 'La cantidad debe ser mayor a 0';
            setTimeout(()=>{
                error.value = '';
            }, 3000)
            return;
        }

        //validar que tenga presupuesto
        if(id){ //edicion
            if(cantidad > (oldCantidad + disponible)){
                error.value = 'Has excedido el presupuesto';
                setTimeout(()=>{
                    error.value = '';
                }, 3000)
                return;
            }
        }else{ //nuevo
            if(cantidad > disponible){ 
                error.value = 'Has excedido el presupuesto';
                setTimeout(()=>{
                    error.value = '';
                }, 3000)
                return;
            }
        }

        emits('guardar-gasto');

    };

    const isEditando = computed(() => {
        return props.id
    });
</script>


<template>
    <div class="modal">
        <div class="cerrar-modal">
            <img 
            :src="cerrarModal" 
            alt="cerrar"
            @click="$emit('ocultar-modal')">
        </div>


        <div 
            class="contenedor contenedor-formulario"
            :class="[modal.animar ? 'animar' : 'cerrar']"
        >
            <form 
                class="nuevo-gasto"
                @submit.prevent="agregarGasto"
            >
                <legend>{{ isEditando ? 'Editar Gasto' : 'Añadir Nuevo Gasto' }}</legend>
                <Alert v-if="error">
                    {{error}}
                </Alert>
                <div class="campo">
                    <label for="nombre">Nombre</label>
                    <input 
                        type="text"
                        id="nombre"
                        placeholder="Añade el nombre del gasto"
                        :value="nombre"
                        @input ="$emit('update:nombre', $event.target.value)"
                    >
                </div>
                <div class="campo">
                    <label for="cantidad">Cantidad</label>
                    <input 
                        type="number"
                        id="cantidad"
                        placeholder="Añade la cantidad del gasto, ej: 300"
                        :value="cantidad"
                        @input ="$emit('update:cantidad', Number($event.target.value))"
                    >
                </div>
                <div class="campo">
                    <label for="categoria">Categoría</label>
                    <select 
                    id="categoria"
                    :value="categoria"
                    @input ="$emit('update:categoria', $event.target.value)"
                    >
                        <option value="" disabled>Seleccione</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <!-- <option value="escuela">Escuela</option> -->
                        <option value="casa">Casa</option>
                        <option value="salud">Salud</option>
                        <option value="ocio">Ocio</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>

                <input type="submit" :value="isEditando ? 'Editar' : 'Añadir Gasto'">
            </form>

            <button
                type="button"
                class="btnEliminar"
                v-if="isEditando"
                @click="$emit('eliminar-gasto')"
            >
                Eliminar Gasto
            </button>
        </div>
    </div>
</template>


<style scoped>
    .modal {
        position: fixed;
        background-color: rgba(0, 0, 0, 0.8);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100;
    }

    .cerrar-modal {
        position: absolute;
        right: 3rem;
        top: 3rem;
        width: 3rem;
        height: 3rem;
        transition: all 0.3s ease;
    }

    .cerrar-modal:hover {
        transform: scale(1.1);
    }

    .cerrar-modal img {
        width: 100%;
        height: 100%;
        cursor: pointer;
        filter: brightness(0) invert(1);
    }

    .contenedor-formulario {
        transition-property: all;
        transition-duration: 300ms;
        transition-timing-function: ease;
        opacity: 0;
    }

    .contenedor-formulario.animar{
        opacity: 1;
    }

    .contenedor-formulario.cerrar{
        opacity: 0;
    }

    .contenedor {
        width: 90%;
        max-width: 50rem;
        background-color: var(--blanco);
        padding: 3rem;
        border-radius: 1.2rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }

    .nuevo-gasto {
        width: 100%;
    }

    .nuevo-gasto legend {
        font-size: 2.2rem;
        text-align: center;
        color: var(--azul);
        font-weight: 900;
        margin-bottom: 2rem;
        text-transform: uppercase;
    }

    .campo {
        display: flex;
        flex-direction: column;
        margin-bottom: 1.5rem;
    }

    .campo label {
        font-size: 1.6rem;
        color: var(--gris-oscuro);
        font-weight: 700;
        margin-bottom: 0.5rem;
    }

    .campo input, 
    .campo select {
        background-color: var(--gris-claro);
        border: none;
        border-radius: 0.8rem;
        padding: 1.2rem;
        font-size: 1.6rem;
        transition: all 0.3s ease;
    }

    .campo input:focus, 
    .campo select:focus {
        outline: 2px solid var(--azul);
        box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
    }

    .nuevo-gasto input[type="submit"] {
        background-color: var(--azul);
        border: none;
        padding: 1.2rem;
        text-align: center;
        color: var(--blanco);
        font-weight: 700;
        text-transform: uppercase;
        width: 100%;
        border-radius: 0.8rem;
        margin-top: 1.5rem;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .nuevo-gasto input[type="submit"]:hover {
        background-color: #1048A4;
    }

    .btnEliminar{
        border: none;
        border-radius: 10px;
        padding: 1rem;
        width: 100%;
        background-color: red;
        font-weight: 700;
        color: white;
        font-size: 1.7rem;
        text-transform: uppercase;
        margin-top: 10px;
        cursor: pointer;
    }
</style>