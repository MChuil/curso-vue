<script setup>
const props = defineProps({
    dataAlert:{
        type: Object,
        required: true
    }
})
</script>
<template>
    <div
        :class="[dataAlert.tipo == 'green' ? 'bg-green-500' : 'bg-red-500']"
        class="text-white text-center p-3 uppercase font-bold rounded-md mb-6"
    >
        {{ dataAlert.mensaje }}
    </div>
</template>
