<template>
    <footer>
        <p>2020 - AEMFS</p>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    footer {
        min-height: 50px;
        background-color: #eee;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-size: cover;
        width: 100%;
        margin-top: auto;
    }

    footer p {
        color: black;
        text-align: center;
    }
</style>