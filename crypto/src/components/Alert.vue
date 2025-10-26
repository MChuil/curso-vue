<template>
    <div class="alerta">
        <slot></slot>
    </div>
</template>


<style>
    .alerta{
        text-align: center;
        background-color: rgb(174,0,0);
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1.3rem;
        padding: .5rem;
        margin-bottom: 2rem;
        color: #fff;
    }
</style>