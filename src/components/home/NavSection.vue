<template>
    <div class="nav-section">
        <div class="banner">
            <div class="w3l_banner_nav_left">
                <nav class="navbar navbar-expand-lg navbar-light p-lg-0">
                    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="fa icon-expand fa-bars"></span>
                        <span class="fa icon-close fa-times"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav nav_1">
                            <li class="nav-item dropdown" v-for="(category, key) in categories" :key="key">
							<router-link :to="{name:'category', params:{id: category.category.id} }" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
								data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								{{ category.category.name }} <span class="fa fa-angle-down"></span>
							</router-link>
							<div v-for="(sub_category, key1) in category.sub_category" :key="key1" class="dropdown-menu w3ls_vegetables_menu" aria-labelledby="navbarDropdown">
								<a class="dropdown-item drop-text" href="frozen.html">{{ sub_category.name }}</a>

							</div>
						</li>
                            <!-- <li class="nav-item"><router-link :to="{name: 'category'}" class="nav-link">Households</router-link></li> -->
                            
                        </ul>
                    </div>
                </nav>
            </div>



            <div class="w3l_banner_nav_right">
                <section class="slider">
                    <div class="flexslider">
                        <ul class="slides">
                            <li>
                                <div class="w3l_banner_nav_right_banner">
                                    <h3>Stay home & get
                                        <span>your daily</span> need's
                                    </h3>
                                    <div class="more">
                                        <a href="products.html" class="button--saqui button--round-l button--text-thick"
                                            data-text="Shop now">Shop now</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="w3l_banner_nav_right_banner1">
                                    <h3>Make your <span>food</span> with Spicy.</h3>
                                    <div class="more">
                                        <a href="products.html" class="button--saqui button--round-l button--text-thick"
                                            data-text="Shop now">Shop now</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="w3l_banner_nav_right_banner2">
                                    <h3>Compare & Save <i>30% Money</i> </h3>
                                    <div class="more">
                                        <a href="products.html" class="button--saqui button--round-l button--text-thick"
                                            data-text="Shop now">Shop now</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>


            <div class="clearfix"></div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: "NavSection",
    data(){
        return{
            categories:[],
        }
    },
    created(){
        this.getAllCategory();

    },
    methods:{
        getAllCategory()
        {
            axios.get('http://localhost/Atelier-Kart/public/api/all-category').then((response)=>{
                this.categories = response.data;
            })
        }
    }
}
</script>

<style scoped></style>