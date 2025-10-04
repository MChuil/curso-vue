<script setup>
    import { computed } from 'vue';
    import CircleProgress from 'vue3-circle-progress';
    import "vue3-circle-progress/dist/circle-progress.css";
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

    defineEmits(['reset-app']);

    const porcentaje = computed(()=>{

        return parseInt(((props.presupuesto - props.disponible) / props.presupuesto) * 100);
    })

</script>
<template>
    <div class="dos-columnas">
        <div class="grafica">
            <p class="porcentaje">{{ porcentaje }}%</p>
            <CircleProgress
                :percent="porcentaje"
                :size="250"
                :border-width="20"
                :border-bg-width="20"
                fill-color="#3B82F6"
                empty-color="#e1e1e1"
            />
        </div>

        <div class="control-presupuesto">
            <button
                class="reset-app"
                @click="$emit('reset-app')"
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

    .grafica{
        position: relative;
    }
    .porcentaje{
        position: absolute;
        margin: auto;
        left:0;
        right:0;
        top: calc(50% - 1.5rem);
        text-align: center;
        z-index: 100;
        font-size: 3rem;
        font-weight: 900;
        color: var(--gris-oscuro);
    }

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