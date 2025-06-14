<script setup>
    // const props = defineProps(['estadoCarrito', 'carrito']);
    const props = defineProps({
        estadoCarrito:{
            type: Boolean,
            required: true,
        },
        carrito: {
            type: Array,
            required: true
        } 
    });

    defineEmits(['cerrar-carrito', 'decrementar', 'incrementar']);
</script>


<template>
    <div class="cart-overlay" id="cartOverlay" v-if="estadoCarrito">
        <div class="cart-container">
            <div class="cart-header">
                <h2>Tu Carrito</h2>
                <button class="close-cart" id="closeCart" @click="$emit('cerrar-carrito')">×</button>
            </div>

            <div v-if="carrito.length !== 0">
                <div class="cart-items">
                    <!-- Artículo en el carrito -->
                    <div class="cart-item" v-for="producto in carrito">
                        <img 
                            :src = "'img/' + producto.imagen" 
                            :alt = "producto.nombre" 
                            class = "item-image"
                        >
                        <div class="item-details">
                            <div class="item-title">{{ producto.nombre}}</div>
                            <div class="item-price">${{ producto.precio}}</div>
                            <div class="item-actions">
                                <div class="quantity-selector">
                                    <button 
                                        class="quantity-btn"
                                        @click="$emit('decrementar', producto.id)"
                                    >-</button>
                                    <input 
                                        type="text" 
                                        class="quantity-input" 
                                        :value="producto.cantidad"
                                        readonly
                                    >
                                    <button 
                                        class="quantity-btn"
                                        @click="$emit('incrementar', producto.id)"
                                    >+</button>
                                </div>
                                <!-- TODO -->
                                <!-- Hacer que funciones btn eliminar -->
                                <button class="remove-btn">Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="cart-summary">
                    <div class="summary-title">Resumen de Compra</div>
                    <div class="summary-row">
                        <span>Subtotal (3 productos)</span>
                        <span>$149.97</span>
                    </div>
                    <div class="summary-row">
                        <span>Envío</span>
                        <span>Gratis</span>
                    </div>
                    <!-- <div class="summary-row">
                        <span>Descuento</span>
                        <span>-$0.00</span>
                    </div> -->
                    <div class="summary-row summary-total">
                        <span>Total</span>
                        <span>$149.97</span>
                    </div>

                    <button class="checkout-btn">Proceder al Pago</button>
                </div>
            </div>
            <div v-else class="cart-sumary">
                <div class="summary-title">Tu carrito esta vacio</div>
            </div>
        </div>
    </div>
</template>