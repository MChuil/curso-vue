<script setup>

    const props = defineProps({
        producto:{
            type: Object,
            required: true
        }
    })

    defineEmits('add-product')

</script>

 
<template>
    <div class="product-card">
        <img :src="'/img/' + producto.imagen" :alt="producto.nombre" class="product-image">
        <div class="product-info">
            <div class="product-title">{{ producto.nombre }}</div>
            <div class="product-price">${{ producto.precio}}</div>
            <div>{{ producto.descripcion }}</div>
            <div class="product-rating">★★★★★</div>
            <button class="add-to-cart" 
                v-on:click="$emit('add-product', producto)"
            >Añadir al carrito</button>
        </div>
    </div>
</template>

<!-- 
    Vue utiliza Props para 'pasar datos' entre componentes; 
    estos props pueden ser estaticos o reactivos; 

    En caso de querer pasar funciones, se recomienda usar 'emits'
    Component Event

    IMPORTANTE: Los props nunca deben modificar el state en el componente
    hijo, deben ser inmutables.

    Para pasar eventos desde el componente hijo al padre, la
    directiva 'v-on' o '@' se usa para escuchar eventos emitidos 

    Inline Handler 
    <button @click="number++">Añadir al carrito</button>
    Para cosas sencillas, como incrementar un contador,

    Method Handler
    <button v-on:click="increment">Añadir al carrito</button>

    Component Event
    Cuand se quiere pasar una función desde el padre al hijo,
    se usa la directiva 'emit' y se le pasa el nombre de la función
    como parametro, por ejemplo: @increment="increment"
-->