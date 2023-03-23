<template>
    <div class="product-section">
        <div class="top-brands">
            <div class="container">
                <h3>Your Daily Staples</h3>
                <div class="row agile_top_brands_grids">
                    <div v-for="(product, key) in products" :key="key" class="col-lg-3 col-sm-6 top_brand_left mb-3">
                        <div class="hover14 column">
                            <div class="agile_top_brand_left_grid">
                                <div class="tag"><img src="/images/tag.png" alt=" " class="img-fluid" /></div>
                                <div class="agile_top_brand_left_grid1">
                                    <figure>
                                        <div class="snipcart-item block">
                                            <div class="snipcart-thumb">
                                                <router-link :to="{ name: 'detail', params:{id: product.id} }"><img title=" " alt=" "
                                                        :src="product.image" class="img-fluid img-height" /></router-link>
                                                <p>{{ product.name }}</p>
                                                <h4>TK.{{ product.selling_price }} <span>TK. {{ product.regular_price }}}</span></h4>
                                            </div>
                                            <div class="snipcart-details top_brand_home_details">
                                                <form
                                                    action="https://demo.w3layouts.com/demos_new/template_demo/21-06-2021/corner-store-liberty-demo_Free/1278034630/web/checkout.html"
                                                    method="post">
                                                    <fieldset>
                                                        <input type="hidden" name="cmd" value="_cart" />
                                                        <input type="hidden" name="add" value="1" />
                                                        <input type="hidden" name="business" value=" " />
                                                        <input type="hidden" name="item_name"
                                                            value="Fortune Sunflower Oil" />
                                                        <input type="hidden" name="amount" value="7.99" />
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
                    <div class="clearfix"> </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "ProductSection",
    data(){
        return{
            products:[]
        }
    },
    created(){
        this.getAllProduct();
    },
    methods:{
        getAllProduct(){
            axios.get('http://localhost/Atelier-Kart/public/api/latest-products').then((response)=>{
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