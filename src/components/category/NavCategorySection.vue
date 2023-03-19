<template>
    <div class="nav-category-section">
        <nav class="navbar navbar-expand-lg navbar-light p-lg-0">
            <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="fa icon-expand fa-bars"></span>
                <span class="fa icon-close fa-times"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav nav_1">
                    <li class="nav-item dropdown" v-for="(category, key) in categories" :key="key">
                        <router-link :to="{ name: 'category', params: {id: category.category.id} }" class="nav-link dropdown-toggle"
                            data-toggle="dropdown">
                            {{ category.category.name }} <span class="fa fa-angle-down"></span>
                        </router-link>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <a href="" class="dropdown-item">one</a>
                            </li>
                           
                        </ul>
                    </li>

                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "NavCategorySection",
    data() {
        return {
            categories: [],
        }
    },
    created() {
        this.getAllCategory();

    },
    methods: {
        getAllCategory() {
            axios.get('http://localhost/Atelier-Kart/public/api/all-category').then((response) => {
                this.categories = response.data;
            })
        }
    }
}
</script>

<style scoped></style>