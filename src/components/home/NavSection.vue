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
                            <li class="nav-item dropdown">
                                <router-link :to="{name: 'category'}" class="nav-link dropdown-toggle" data-toggle="dropdown">
                                    Branded Foods <span class="fa fa-angle-down"></span>
                                </router-link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a href="" class="dropdown-item">One</a></li>
                                    <li><a href="" class="dropdown-item">Two</a></li>
                                </ul>
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
export default {
    name: "NavSection"
}
</script>

<style scoped></style>