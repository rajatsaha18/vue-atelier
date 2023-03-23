<template>
    <div class="cart-view">
        <div class="products-breadcrumb">
            <div class="container">
                <ul>
                    <li><i class="fa fa-home" aria-hidden="true"></i><a href="index.html">Home</a><span>|</span></li>
                    <li>Checkout</li>
                </ul>
            </div>
        </div>
        <!-- //products-breadcrumb -->
        <!-- banner -->
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
                                <router-link :to="{ name: 'category', params: { id: category.category.id } }"
                                    class="nav-link dropdown-toggle" data-toggle="dropdown">
                                    {{ category.category.name }} <span class="fa fa-angle-down"></span>
                                </router-link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a href="" class="dropdown-item">one</a>
                                    </li>

                                </ul>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
            <div class="w3l_banner_nav_right">
                <!-- about -->
                <div class="privacy about typo">
                    <h3>Chec<span>kout</span></h3>
                    <div class="checkout-right">
                        <h4>Your shopping cart contains: <span>3 Products</span></h4>
                        <table class="timetable_sub">
                            <thead>
                                <tr>
                                    <th>SL No.</th>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Product Name</th>

                                    <th>Unit Price</th>
                                    <th>SubTotal</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody v-for="(product, key) in products" :key="key">
                                <tr class="rem1" >
                                    <td class="invert">1</td>
                                    <td class="invert-image"><a href="single.html"><img :src="product.image" alt=" "
                                                class="img-responsive" height="70" width="70"></a></td>
                                    <td class="invert">
                                        <div class="input-group mb-3">
                                        <input type="number" class="form-control" :value="product.qty" :id="'qty'+product.id"/>
                                        <button class="btn btn-outline-secondary" type="submit" @click="updateCartProduct(product.id)" >Update</button>
                                    </div>
                                    </td>
                                    <td class="invert">{{ product.name }}</td>
                                    <td class="invert">TK.{{ product.price }}</td>
                                    <td class="invert">TK.{{ product.total }}</td>
                                    <td class="invert">
                                        <a href="" class="btn btn-danger" @click="removeCartProduct(product.id)"><i class="fa fa-trash"></i></a>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div class="row checkout-left">
                        <div class="col-md-4 checkout-left-basket">
                            <h4>Continue to basket</h4>
                            <ul>
                                <li>Product1 <i>-</i> <span>$15.00 </span></li>
                                <li>Product2 <i>-</i> <span>$25.00 </span></li>
                                <li>Product3 <i>-</i> <span>$29.00 </span></li>
                                <li>Total Service Charges <i>-</i> <span>$15.00</span></li>
                                <li>Total <i>-</i> <span>$84.00</span></li>
                            </ul>
                        </div>
                        <div class="col-md-8 address_form_agile pl-lg-5">
                            <h4>Add a new Details</h4>
                            <form
                                action="https://demo.w3layouts.com/demos_new/template_demo/21-06-2021/corner-store-liberty-demo_Free/1278034630/web/payment.html"
                                method="post" class="creditly-card-form agileinfo_form">
                                <section class="creditly-wrapper wthree, w3_agileits_wrapper">
                                    <div class="information-wrapper">
                                        <div class="first-row form-group">
                                            <div class="controls">
                                                <label class="control-label">Full name: </label>
                                                <input class="billing-address-name form-control" type="text" name="name"
                                                    placeholder="Full name">
                                            </div>
                                            <div class="w3_agileits_card_number_grids">
                                                <div class="w3_agileits_card_number_grid_left">
                                                    <div class="controls">
                                                        <label class="control-label">Mobile number:</label>
                                                        <input class="form-control" type="text" placeholder="Mobile number">
                                                    </div>
                                                </div>
                                                <div class="w3_agileits_card_number_grid_right">
                                                    <div class="controls">
                                                        <label class="control-label">Landmark: </label>
                                                        <input class="form-control" type="text" placeholder="Landmark">
                                                    </div>
                                                </div>
                                                <div class="clear"> </div>
                                            </div>
                                            <div class="controls">
                                                <label class="control-label">Town/City: </label>
                                                <input class="form-control" type="text" placeholder="Town/City">
                                            </div>
                                            <div class="controls">
                                                <label class="control-label">Address type: </label>
                                                <select class="form-control option-w3ls">
                                                    <option>Office</option>
                                                    <option>Home</option>
                                                    <option>Commercial</option>

                                                </select>
                                            </div>
                                        </div>
                                        <button class="submit check_out">Delivery to this Address</button>
                                    </div>
                                </section>
                            </form>
                            <div class="checkout-right-basket">
                                <a href="payment.html">Make a Payment <span class="fa fa-chevron-right"
                                        aria-hidden="true"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- //about -->
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "CartView",
    computed:{
        products(){
            return this.$store.getters.getProducts;
        }

    },
    data() {
        return {
            categories: [],
        }
    },
    created() {
        this.getAllCategory();

    },
    methods: {
        getAllCategory() {
            axios.get('http://localhost/Atelier-Kart/public/api/all-category').then((response) => {
                this.categories = response.data;
            })
        },
        updateCartProduct(id){
            var qty = document.getElementById('qty'+id).value;
            this.$store.commit('updateCart', {id: id, qty: qty});
        },
        removeCartProduct(id){
            var check = confirm('Are You sure delete this ..');
            if(check){
                this.$store.commit('removeCartProduct', {id: id});
            }
            
        }
    }
}
</script>

<style scoped></style>