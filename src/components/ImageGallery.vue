<template>
    <div class="col-lg-4 col-md-4 col-sm-6 brand manipul design print">
        <div class="h_gallery_item">
            <div class="g_img_item">
                <img class="img-fluid" :src="data.image" alt="">
                <div class="light"><img src="/src/img/gallery/icon.png" alt=""></div>
            </div>
            <div class="g_item_text">
                <h4>{{ data.name }}</h4>
                <p>{{ data.project }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>

defineProps({
    data: Object,
})

</script>

<script>

export default {
    name:"image-gallery",
    data() {
        return {
            name: "Identifica",
            project: "Credencialización online"
        }
    }
}

</script>

<style>
    .brand.design {
        cursor: pointer;
    }
</style>