<template>
    <div class="nav-detail">
        <nav class="navbar navbar-expand-lg navbar-light p-lg-0">
            <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="fa icon-expand fa-bars"></span>
                <span class="fa icon-close fa-times"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav nav_1">
           
                    <li class="nav-item dropdown" v-for="(category,key) in categories" :key="key">
                        <router-link :to="{name:'category', params:{id: category.category.id} }" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{ category.category.name }} <span class="fa fa-angle-down"></span>
                        </router-link>
                        <div class="dropdown-menu w3ls_vegetables_menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="vegetables.html">Vegetables</a>
                            <a class="dropdown-item" href="vegetables.html">Fruits</a>

                        </div>
                    </li>
                    
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:"NavDetailSection",
    data(){
        return{
            categories:[],
        }
    },
    created(){
        this.getAllCategory();
    },
    methods:{
        getAllCategory(){
            axios.get('http://localhost/Atelier-Kart/public/api/all-category').then((response) => {
                this.categories = response.data;
            })
        }
    }
}
</script>
<style scoped></style>