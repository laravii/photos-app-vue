<template>
    <div class="loader"></div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.loader{
    border: 16px solid lightcyan;
    border-top: 16px solid lightblue;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
}
@keyframes spin{
    0%{transform: rotate(0deg)}
    100%{transform: rotate(360deg)}
}
</style>