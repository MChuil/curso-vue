<script setup>
    import { reactive, ref, onMounted } from 'vue';
    import { db } from './data/productos';
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
    import Producto from './components/Producto.vue';
    import Carrito from './components/Carrito.vue';

    const productos = ref([]); //creando un state
    const carrito = ref([]);
    const estadoCarrito = ref(false);

    const addProduct = (producto)=>{
        const existe = carrito.value.findIndex(row => row.id == producto.id);
        if(existe >= 0){ //ya existe
            carrito.value[existe].cantidad += 1;
        }else{ //no existe
            producto.cantidad = 1;
            carrito.value.push(producto);
        }
        
        console.log('Carrito:', carrito.value);
    }

    const decrementar = (id)=>{
        const index = carrito.value.findIndex(row => row.id == id);
        //TODO: tarea
        //no permitir valores negativos
        //al llegar a cero eliminar el producto
        carrito.value[index].cantidad--;
    }
    
    const incrementar = (id) =>{
        const index = carrito.value.findIndex(row => row.id == id);
        carrito.value[index].cantidad++;
    }

    const abrirCarrito = () =>{
        estadoCarrito.value = true;
        console.log('Carrito abierto');
    }
    
    const cerrarCarrito = () =>{
        estadoCarrito.value = false;
        console.log('Carrito cerrado');
    }
    

    onMounted(()=>{
        productos.value = db;
        // state.productos = db;
    })

    //TODO: Obtener el total a pagar
</script>

<template>
    <Header 
        @abrir-carrito="abrirCarrito"
        :totalProductos = "carrito.length"
    />
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
    <Carrito 
        v-if="estadoCarrito"
        :estadoCarrito="estadoCarrito"
        :carrito="carrito"
        @cerrar-carrito="cerrarCarrito"
        @incrementar = "incrementar"
        @decrementar = "decrementar"
        />

    
    <!-- Pie de página -->
    <Footer />
</template>