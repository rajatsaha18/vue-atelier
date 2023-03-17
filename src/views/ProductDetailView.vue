<template>
	<div class="product-detail">
		<BreadcrumbSection/>
		<!-- //products-breadcrumb -->
		
		<!-- banner -->
		<div class="banner">
			<div class="w3l_banner_nav_left">
				<NavDetailSection/>
			</div>
			<div class="w3l_banner_nav_right">
				<DetailBestDeal/>
				<DescriptionSection/>
				
			</div>

		</div>
		<!-- //banner -->
		<!-- brands -->

	</div>
</template>

<script>
import BreadcrumbSection from '@/components/product-detail/BreadcrumbSection.vue';
import NavDetailSection from '@/components/product-detail/NavDetailSection.vue';
import DetailBestDeal from '@/components/product-detail/DetailBestDeal.vue';
import DescriptionSection from '@/components/product-detail/DescriptionSection.vue';


export default {
	name:"ProductDetailView",
	components:{BreadcrumbSection, NavDetailSection, DetailBestDeal, DescriptionSection},
}
</script>