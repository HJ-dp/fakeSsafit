<template>
    <div id="carouselExampleInterval" class="carousel slide h-100" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
                <img src="/neom-Iy59i0M7oP4-unsplash.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item" data-bs-interval="2000">
                <img src="/pexels-pixabay-258045.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="/neom-Iy59i0M7oP4-unsplash.jpg" class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    
</template>

<script setup>

</script>

<style scoped>
    .carousel-inner > .carousel-item{
      min-width: 100%;
      max-height: 400px;
      overflow: hidden;
    } 
</style>