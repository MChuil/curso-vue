<script setup>
    const props = defineProps({
            totalProductos: {
                type: Number,
                required: true
            }

        }
    );
    defineEmits(['abrir-carrito']); //estaba como string
</script>

<template>
    <header>
        <div class="container header-content">
            <div class="logo">MiTienda</div>
            <nav class="nav-links">
                <a href="#">Inicio</a>
                <a href="#">Productos</a>
                <a href="#">Ofertas</a>
                <a href="#">Contacto</a>
            </nav>
            <div 
                class="cart-icon" 
                id="cartIcon"
                @click="$emit('abrir-carrito')">
                🛒
                <span class="cart-count" v-if="totalProductos > 0">{{ totalProductos }}</span>
            </div>
        </div>
    </header>
</template>
