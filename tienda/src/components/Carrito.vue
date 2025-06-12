<script setup>

</script>
<template>
    <div class="cart-overlay" id="cartOverlay" v-if="estadoCarrito">
        <div class="cart-container">
            <div class="cart-header">
                <h2>Tu Carrito</h2>
                <button 
                    class="close-cart" 
                    id="closeCart"
                    @click="cerrarCarrito"
                >×</button>
            </div>
            
            <div v-if = "carrito.length !== 0">
                <div class="cart-items">
                    <!-- Artículo en el carrito -->
                    <div class="cart-item">
                        <img src="./img/deportivos.jpg" alt="Producto" class="item-image">
                        <div class="item-details">
                            <div class="item-title">Zapatos Deportivos Premium</div>
                            <div class="item-price">$89.99</div>
                            <div class="item-actions">
                                <div class="quantity-selector">
                                    <button class="quantity-btn">-</button>
                                    <input type="text" class="quantity-input" value="1">
                                    <button class="quantity-btn">+</button>
                                </div>
                                <button class="remove-btn">Eliminar</button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Segundo artículo -->
                    <div class="cart-item">
                        <img src="./img/camiseta.jpg" alt="Producto" class="item-image">
                        <div class="item-details">
                            <div class="item-title">Camiseta de Algodón</div>
                            <div class="item-price">$29.99</div>
                            <div class="item-actions">
                                <div class="quantity-selector">
                                    <button class="quantity-btn">-</button>
                                    <input type="text" class="quantity-input" value="2">
                                    <button class="quantity-btn">+</button>
                                </div>
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
                    <div class="summary-row">
                        <span>Descuento</span>
                        <span>-$0.00</span>
                    </div>
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