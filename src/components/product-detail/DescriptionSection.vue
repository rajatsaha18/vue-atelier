<template>
    <div class="description-section">
        <div class="agileinfo_single">
            <h5>{{ product.name }}</h5>
            <div class="row">
                <div class="col-md-4 agileinfo_single_left">
                    <img id="example" :src="product.image" alt=" " class="img-fluid" />
                </div>
                <div class="col-md-8 agileinfo_single_right">
                    <div class="rating1">
                        <span class="starRating">
                            <input id="rating5" type="radio" name="rating" value="5">
                            <label for="rating5">5</label>
                            <input id="rating4" type="radio" name="rating" value="4">
                            <label for="rating4">4</label>
                            <input id="rating3" type="radio" name="rating" value="3" checked>
                            <label for="rating3">3</label>
                            <input id="rating2" type="radio" name="rating" value="2">
                            <label for="rating2">2</label>
                            <input id="rating1" type="radio" name="rating" value="1">
                            <label for="rating1">1</label>
                        </span>
                    </div>
                    <div class="w3agile_description">
                        <h4>Description :</h4>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                            officia deserunt mollit anim id est laborum.Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.</p>
                    </div>
                    <div class="snipcart-item block">
                        <div class="snipcart-thumb agileinfo_single_right_snipcart">
                            <h4>TK.{{ product.selling_price }} <span>TK.{{ product.regular_price }}</span></h4>
                        </div>
                        <div class="snipcart-details agileinfo_single_right_details">
                            <!-- <form action="" method="">
                            </form> -->
                            <div class="col-lg-12 col-md-8">
                                <div class="form-group quantity">
                                    <label for="color">Quantity</label>
                                    <input type="number" class="form-control" v-model="qty" min="1" />

                                </div>
                            </div>
                            <fieldset>
                                <input type="submit" name="submit" @click="addToCart" value="Add to cart" class="button" />
                            </fieldset>
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
    name: "DescriptionSection",
    data() {
        return {
            id: this.$route.params.id,
            product: {},
            qty:1,
        }
    },
    created() {
        this.getProductById();
    },
    methods: {
        getProductById() {
            axios.get('http://localhost/Atelier-Kart/public/api/product-by-id/' + this.id).then((response) => {
                this.product = response.data;
            })

        },
        addToCart() {
            var product = {id: this.product.id,name: this.product.name,price: this.product.selling_price,image: this.product.image,qty: this.qty, total:this.product.selling_price * this.qty}
            var cartProduct =this.$store.getters.getProducts;
            var check = cartProduct.find(item => item.id == this.product.id);
            if(check){
                this.$store.commit('updateCart', {id: this.product.id, qty: check.qty + this.qty});
            }
            else{
                this.$store.commit('addToCart',product);
            }
            this.$router.push('/show-cart');
        }
    }
}
</script>
<style scoped></style>