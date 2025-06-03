<script setup>
    import { reactive, ref, onMounted } from 'vue';
    import { db } from './data/productos';
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
    import Producto from './components/Producto.vue';

    const productos = ref([]); //creando un state
    // const number = ref(0);
  // const state = reactive({
  //   productos: [],
  // })
  
    const addProduct = (producto)=>{
        console.log("Agregando..." + producto);
    }

    onMounted(()=>{
        productos.value = db;
        // state.productos = db;
    })

</script>

<template>
    <Header />
    <main class="container">
        <!-- Hero Section -->
        <section class="hero">
            <h1>Bienvenido a Nuestra Tienda</h1>
            <p>Descubre los mejores productos al mejor precio. Envío gratis en compras mayores a $50.</p>
            <a href="#" class="btn">Ver Ofertas</a>
        </section>
        
        <!-- Categorías -->
        <section class="categories">
            <h2 class="section-title">Categorías</h2>
            <div class="category-list">
                <div class="category-item active">Todos</div>
                <div class="category-item">Electrónica</div>
                <div class="category-item">Ropa</div>
                <div class="category-item">Hogar</div>
                <div class="category-item">Deportes</div>
                <div class="category-item">Juguetes</div>
                <div class="category-item">Belleza</div>
            </div>
        </section>
        
        <!-- Herramientas de tienda -->
        <div class="shop-tools">
            <div class="search-box">
                <input type="text" placeholder="Buscar productos...">
                <i>🔍</i>
            </div>
            <div class="sort-filter">
                <select>
                    <option>Ordenar por</option>
                    <option>Menor precio</option>
                    <option>Mayor precio</option>
                    <option>Más vendidos</option>
                    <option>Mejor valorados</option>
                </select>
                <select>
                    <option>Categoría</option>
                    <option>Electrónica</option>
                    <option>Ropa</option>
                    <option>Hogar</option>
                </select>
            </div>
        </div>
        
        <!-- Grid de Productos -->
        <section class="products-grid">
            <!-- Producto 1 -->
            <Producto 
                v-for="producto in productos"
                :producto = "producto"
                @add-product = "addProduct"
            />
        </section>
    </main>
    
    <!-- Carrito de compras (oculto por defecto) -->
    <div class="cart-overlay" id="cartOverlay">
        <div class="cart-container">
            <div class="cart-header">
                <h2>Tu Carrito</h2>
                <button class="close-cart" id="closeCart">×</button>
            </div>
            
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
    </div>
    
    <!-- Pie de página -->
    <Footer />
</template>


<!-- 
    Crear un nuevo State (carrito) para manejar el carrito de compras
    y poder agregar productos al carrito desde el componente Producto.vue
-->