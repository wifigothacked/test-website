<template>
    <div class="homepage">
        <NavBar />
        <div class="content bg-dark text-light text-center">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <p class="lead">Covid 19</p>
                        <p class="text-warning">Stay Safe.Stay Home.</p>
                    </div>
                    <div class="col-8">
                        <img src="../assets/maintain-distance.svg" class="image-fluid w-50">
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-light text-dark mt-4">
            <div class="container">
                <CovidData />
            </div>
        </div>
        <div class="news bg-light text-dark mt-4">
            <div class="container">
                <div class="row">
                    <Cards />
                    <Cards />
                    <Cards />
                </div>
            </div>
        </div>
        <footer>
            <div class="footer bg-dark text-light">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            Address:Mumbai
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import Cards from '../components/Cards.vue';
import NavBar from '../components/NavBar.vue';
import CovidData from "../components/CovidData.vue";

</script>

<style scoped></style>