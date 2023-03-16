<template>
    <div class="my-header">
        <div class="agileits_header" id="home">
            <div class="w3l_offers">
                <a href="products.html">Today's special Offers !</a>
            </div>
            <div class="w3l_search">
                <form action="#" method="GET" class="d-flex">
                    <input type="search" placeholder="Search.." name="search" required="required" autofocus="">
                    <button type="submit"><span class="fa fa-search"></span></button>

                </form>
            </div>
            <div class="w3l_header_right w3-two-three-grids">
                <div class="product_list_header mx-lg-4">
                    <form action="#" method="post" class="last">
                        <fieldset>
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="display" value="1" />
                            <input type="submit" name="submit" value="View your cart" class="button" />
                        </fieldset>
                    </form>
                </div>
                <ul>
                    <li class="dropdown profile_details_drop">
                        <a href="#" class="dropdown-toggle text-center" data-toggle="dropdown"><i class="fa fa-user mr-2"
                                aria-hidden="true"></i><span class="fa fa-angle-down"></span></a>
                        <div class="mega-dropdown-menu">
                            <div class="w3ls_vegetables">
                                <ul class="dropdown-menu drp-mnu">
                                    <li><a href="login.html">Login</a></li>
                                    <li><a href="login.html">Sign Up</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="w3l_header_right1 contact-bantbtn ml-lg-4">
                    <h2><a href="mail.html">Contact Us</a></h2>
                </div>
            </div>
        </div>
        <div class="logo_products">
            <header id="site-header">
                <section class="w3l-header-4 sec-part-4">
                    <div class="container">
                        <nav class="navbar navbar-expand-lg navbar-light p-lg-0">
                            <h1> <a class="navbar-brand" href="index.html">
                                    <span class="capw3">C</span>orner <span class="subcap">Store</span>
                                </a></h1>
                            <ul class="navbar-nav mx-lg-auto mt-lg-0 mt-3">
                                <li class="nav-item active">
                                    <a class="nav-link" href="events.html">Events</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="about.html">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="products.html">Best Deals</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="services.html">Services</a>
                                </li>


                            </ul>
                            <ul class="navbar-nav search-right mt-lg-0 mt-2 w3ls_logo_products_left1 mr-lg-3">
                                <ul class="phone_email">
                                    <li><a href="tel:(+0123)234-547" class=""></a><i class="fa fa-phone"
                                            aria-hidden="true"></i>
                                        (+0123) 234 567</li>
                                    <li><a href="mailto:store@corner.com"><i class="fa fa-envelope-o"
                                                aria-hidden="true"></i> store@corner.com</a></li>
                                </ul>
                            </ul>

                            <!-- //toggle switch for light and dark theme -->

                            <!-- toggle switch for light and dark theme -->
                            <div class="mobile-position">
                                <nav class="navigation">
                                    <div class="theme-switch-wrapper">
                                        <label class="theme-switch" for="checkbox">
                                            <input type="checkbox" id="checkbox">
                                            <div class="mode-container">
                                                <i class="gg-sun"></i>
                                                <i class="gg-moon"></i>
                                            </div>
                                        </label>
                                    </div>
                                </nav>
                            </div>
                        </nav>
                    </div>
                </section>
            </header>
            <!--//header-->
        </div>
        <!--//navbar-->
        

        <!--//end-navbar-->

    </div>
</template>

<script>
export default {
    name: "MyHeader",
}
</script>
<style scoped></style>