<script setup>


const props = defineProps({
    /*
      - Check out official docs at: https://github.com/openai/openai-node
      - Check out https://github.com/microsoft/generative-ai-with-javascript, for a fun free course on how to use GenAi, it has time traveling :)
    */
   gasto: {
        type: Object,
        reqired: true
    }
    
});
</script>

<template>
    <div class="gasto sombra">
        <div class="contenido">
            <div class="detalles">
                <p class="categoria"> {{  gasto.categoria }}</p>
                <p class="nombre"> {{  gasto.nombre }}</p>
                <p class="fecha"> {{  gasto.fecha }}</p>
            </div>
        </div>
        <p class="cantidad"> {{  gasto.cantidad }}</p>

    </div>
</template>


<style lang="scss" scoped>

</style>