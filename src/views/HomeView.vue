<template>
  <div class="home">
    <NavSection/>
    <!-- banner -->
    <DiscountSection/>
    <!-- top-brands -->
    <ProductSection/>
    <!-- //top-brands -->
    <TopBrandSection/>
    <!-- fresh-vegetables -->
    
  </div>
</template>

<script>
import NavSection from '@/components/home/NavSection.vue';
import DiscountSection from '@/components/home/DiscountSection.vue';
import ProductSection from '@/components/home/ProductSection.vue';
import TopBrandSection from '@/components/home/TopBrandSection.vue';
export default {
  name: 'HomeView',
  components: { NavSection,DiscountSection, ProductSection, TopBrandSection},
}
</script>
