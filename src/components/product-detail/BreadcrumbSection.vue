<template>
    <div class="bread-crumb">
        <div class="products-breadcrumb">
			<div class="container">
				<ul>
					<li><i class="fa fa-home" aria-hidden="true"></i><router-link
							:to="{ name: 'home' }">Home</router-link><span>|</span></li>
					<li>Single Page</li>
				</ul>
			</div>
		</div>
    </div>
</template>

<script>
export default{
    name:"BreadcrumbSection",
}
</script>

<style scoped></style>
