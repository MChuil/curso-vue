<script setup>
    import cerrarModal from '../assets/img/cerrar.svg';

    const emits = defineEmits(['ocultar-modal']);
</script>


<template>
    <div class="modal">
        <div class="cerrar-modal">
            <img 
            :src="cerrarModal" 
            alt="cerrar"
            @click="$emit('ocultar-modal')">
        </div>


        <div class="contenedor">
            <form class="nuevo-gasto">
                <div class="campo">
                    <label for="nombre">Nombre</label>
                    <input 
                        type="text"
                        id="nombre"
                        placeholder="Añade el nombre del gasto"
                    >
                </div>
                <div class="campo">
                    <label for="cantidad">Cantidad</label>
                    <input 
                        type="number"
                        id="cantidad"
                        placeholder="Añade la cantidad del gasto, ej: 300"
                    >
                </div>
                <div class="campo">
                    <label for="categoria">Categoría</label>
                    <select id="categoria">
                        <option value="" disabled>Seleccione</option>
                        <option value="comida">Comida</option>
                        <option value="escuela">Escuela</option>
                        <option value="casa">Casa</option>
                        <option value="salud">Salud</option>
                        <option value="ocio">Ocio</option>
                    </select>
                </div>

                <input type="submit" value="Añadir Gasto">
            </form>
        </div>
    </div>
</template>


<style scoped>
    .modal{
        position: absolute;
        background-color: rgba(0,0,0,0.8);
        top:0;
        left:0;
        right: 0;
        bottom: 0;
    }

    .cerrar-modal{
        position: absolute;
        right: 3rem;
        top:3rem;
    }

    .cerrar-modal img{
        width: 3rem;
        cursor: pointer;
    }
</style>