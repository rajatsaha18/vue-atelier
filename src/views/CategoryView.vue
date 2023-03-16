<template>
    <div class="category-view">
        <div class="products-breadcrumb">
            <div class="container">
                <ul>
                    <li><i class="fa fa-home" aria-hidden="true"></i><router-link :to="{name:'home'}">Home</router-link><span>|</span></li>
                    <li>Branded Foods</li>
                </ul>
            </div>
        </div>
        <!-- //products-breadcrumb -->
        <!-- banner -->
        <div class="banner">
            <div class="w3l_banner_nav_left">
                <NavSection/>
            </div>
            <div class="w3l_banner_nav_right">
                <BestDealSection/>
                <div class="container">
                    <AddSection/>
                    <TopProductSection/>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavSection from '@/components/category/NavSection.vue';
import BestDealSection from '@/components/category/BestDealSection.vue';
import AddSection from '@/components/category/AddSection.vue';
import TopProductSection from '@/components/category/TopProductSection.vue'
export default {
    name: "CategoryView",
    components: {NavSection, BestDealSection, AddSection, TopProductSection},
}
</script>

<style scoped></style>