<script setup>
    import grafico from '../assets/img/grafico.jpg';
    import { formatearMoneda } from '../helpers';

    const props = defineProps({
        presupuesto: {
            type: Number,
            required: true
        },
        disponible:{
            type: Number,
            required: true
        },
        gastado:{
            type: Number,
            required: true
        }
    })

</script>
<template>
    <div class="dos-columnas">
        <div class="grafica">
            <img
                :src="grafico"
            >
        </div>

        <div class="control-presupuesto">
            <button
                class="reset-app"
            >Resetear App</button>
            <p>
                <span>Presupuesto:</span>
                {{ formatearMoneda(presupuesto)}}
            </p>

            <p>
                <span>Disponible:</span>
                {{ formatearMoneda(disponible)  }}
            </p>

            <p>
                <span>Gastado:</span>
                {{ formatearMoneda(gastado)  }}
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .dos-columnas{
        display: flex;
        flex-direction: column;
    }

    .dos-columnas>:first-child{
        margin-bottom: 3rem;
    }

    @media (min-width: 768px){
        .dos-columnas{
            flex-direction: row;
            gap: 4rem;
            align-items: center;
        }

        .dos-columnas>:first-child{
            margin-bottom: 0;
        }
    }

    .control-presupuesto{
        width: 100%;
    }

    .control-presupuesto p{
        font-size: 2.4rem;
        text-align: center;
        color: var(--gris-oscuro);
    }

    @media (min-width: 768px){
        .control-presupuesto p{
            text-align: left;
        }
    }

    .control-presupuesto span{
        font-weight: 900;
        color: var(--azul);
    }

    .reset-app{
        background-color: #DB2777;
        border: none;
        padding: 1rem;
        width: 100%;
        color: var(--blanco);
        font-weight: 900;
        text-transform: uppercase;
        border-radius: 1rem;

    }
</style>