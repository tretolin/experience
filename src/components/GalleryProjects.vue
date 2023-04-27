<template>
    <Transition>
        <InfoModal v-if="showModal && detail" :show="showModal" :detail="detail" :close="closeModal"/>
    </Transition>
    <!--================Home Gallery Area =================-->
    <section class="home_gallery_area p_120">
    <div class="container">
        <div class="main_title">
            <h2>Proyectos recientes</h2>
            <p> Por Luis Treto</p>
        </div>
    </div>
    <div class="container">
        <div class="gallery_f_inner row imageGallery1">
            <ImageGallery @click="getDetail(project)" v-for="(project, index) in gallery" :index="index" :data="project"/>
        </div>
    </div>
</section>
<!--================End Home Gallery Area =================-->

</template>

<script setup>
    import ImageGallery from './ImageGallery.vue';
    import InfoModal from './InfoModal.vue';
    import gallery from '../data/gallery.js'
</script>

<script>
    export default {
        name: "gallery-projects",
        data() {
            return {
                detail: null,
                showModal: true
            }

        },
        methods: {
            getDetail(project) {
                this.detail = project;
                this.showModal = true;
            },
            closeModal() {
                this.showModal = false;
                this.detail = null;
            }
        },
        computed: {

        }
    }
</script>

<style>

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>
