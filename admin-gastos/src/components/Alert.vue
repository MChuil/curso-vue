<template>
    <div class="alerta">
        <slot></slot>
    </div>
</template>

<style scoped>
    .alerta{
        font-weight: 900;
        padding: 1rem;
        text-transform: uppercase;
        font-size: 1.6rem;
        text-align: center;
        background-color: var(--blanco);
        border-left: .5rem solid #B91C1C;
        color:#B91C1C;
        margin-bottom:3rem;
    }
</style>