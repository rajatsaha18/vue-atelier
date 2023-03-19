<template>
    <div class="product-section">
        <div class="w3ls_w3l_banner_nav_right_grid">
            <h3>Popular Brands</h3>
            <div class="w3ls_w3l_banner_nav_right_grid1">
                <h6>food</h6>
                <div class="row pro-grids-inn">
                    <div v-for="(product, key) in products" :key="key" class="col-lg-3 col-sm-6 w3ls_w3l_banner_left mb-3">
                        <div class="hover14 column">
                            <div class="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                                <div class="agile_top_brand_left_grid_pos">
                                    <img src="/image/img5.png" alt=" " class="img-fluid" />
                                </div>
                                <div class="agile_top_brand_left_grid1">
                                    <figure>
                                        <div class="snipcart-item block">
                                            <div class="snipcart-thumb">
                                                <router-link :to="{name:'detail'}"><img :src="product.image" alt=" "
                                                        class="img-fluid img-height" /></router-link>
                                                <p>{{ product.name }}</p>
                                                <h4>TK.{{ product.selling_price }} <span>TK.{{ product.regular_price }}</span></h4>
                                            </div>
                                            <div class="snipcart-details">
                                                <form action="#" method="post">
                                                    <fieldset>
                                                        <input type="hidden" name="cmd" value="_cart" />
                                                        <input type="hidden" name="add" value="1" />
                                                        <input type="hidden" name="business" value=" " />
                                                        <input type="hidden" name="item_name" value="knorr instant soup" />
                                                        <input type="hidden" name="amount" value="3.00" />
                                                        <input type="hidden" name="discount_amount" value="1.00" />
                                                        <input type="hidden" name="currency_code" value="USD" />
                                                        <input type="hidden" name="return" value=" " />
                                                        <input type="hidden" name="cancel_return" value=" " />
                                                        <input type="submit" name="submit" value="Add to cart"
                                                            class="button" />
                                                    </fieldset>
                                                </form>
                                            </div>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:"TopProductSection",
    data(){
        return{
            id: this.$route.params.id,
            products: [],
        }
    },
    created(){
        this.getCategoryProduct();
    },
    methods:{
        getCategoryProduct(){
            axios.get('http://localhost/Atelier-Kart/public/api/product-by-category/'+this.id).then((response) => {
                this.products = response.data;
            })

        }
    }
}
</script>
<style scoped>
.img-height{
    height: 120px;
}
</style>