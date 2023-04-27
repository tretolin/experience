<template>
    <div class="info-modal">
        <div class="content">
            <div class="header">
                <div class="d-flex flex-start">
                    <img :src="detail.image" class="detail-logo">
                    <div class="pl-3">
                        <h2 class="d-inline-block pt-1">{{ detail.name }}</h2>
                        <p class="d-inline-block pl-2"> {{ detail.project }}</p>
                    </div>
                </div>
                <h4 class="close" @click="close">✘</h4>
            </div>
            <!-- <h4 class="pt-4">{{ detail.project }}</h4> -->
            <div class="description pt-2">
                <div class="cover-container">
                    <img :src="detail.cover">
                </div>
                <div class="p-4" v-html="detail.description"></div>
            </div>

        </div>

    </div>
</template>

<script setup>

defineProps({
    show: Boolean,
    detail: Object,
    data: Object,
    close: Function,
})

console.log("INFO MODAL")

</script>

<script>

export default {
    name:"info-modal",
    data() {
        return {
            content:"texto"
        }
    }
}

</script>

<style lang="scss" scoped>
    .info-modal {
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        text-align: center;
        // opacity:1;
        background-color: rgba(0, 0, 0, 0.5);
        // &.invisible { opacity: 0};
        // transition: opacity 1.2s;

        // border: 40px solid black;
        & .content {
            margin: 1% auto 3% auto;
            border-radius: 10px;
            padding: 2%;
            background-color: white;

            @media (min-width: 768px) { 
                max-width: 60%;
            }
        }

        .header {
            display: flex;
            justify-content: space-between;
            width: 100%;
            & .close { cursor: pointer }
        }
        .description {
            text-align: justify;
            min-height: 70vh;
            overflow-y: auto;
            max-height: 70vh;
            position: relative;
            overflow-y: scroll;
            border-top: 1px solid gray;
            box-shadow: -2px 8px 7px -1px rgba(0,0,0,0.26) inset;
            -webkit-box-shadow: -2px 8px 7px -1px rgba(0,0,0,0.26) inset;
            -moz-box-shadow: -2px 8px 7px -1px rgba(0,0,0,0.26) inset;
        }

        img {
            display: inherit;
            max-width: 100% !important;
            border-radius: 5px;
            margin: 0px auto;

        }
    }
    .detail-logo {
        width: 50px;
        height: 50px;
        border-radius: 5px;
    }

    .cover-container {
        max-height: 380px;
        overflow: hidden;
    }

</style>