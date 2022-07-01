<template>
    <div class = "Popup" v-if="isOpen">
        <div class="body-popup">
            <h1>Popup</h1>
            <div class="input-group input-group-sm mb-3">
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
            </div>

        </div>
    </div>
</template>

<script>
    export default{
        props: ["isOpen"]
    }
</script>

<style lang="scss">
    .Popup{
        position: fixed;
        background: rgba(184, 176, 176, 0.3);
        top: 300px;
        left: 350px;
        align-items: center;
        width: 400px;
        justify-content: center;
        height: 250px;
    }
    .body-popup{
        width: 30%;
        margin: 0 auto;

        & h1{
            margin-top: 80px;
        }
    }
</style>