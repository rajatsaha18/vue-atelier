<template>
    <div class="nav-section">
        <nav class="navbar navbar-expand-lg navbar-light p-lg-0">
            <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="fa icon-expand fa-bars"></span>
                <span class="fa icon-close fa-times"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav nav_1">
                    <li class="nav-item"><a class="nav-link" href="products.html">Branded Foods</a></li>
                    <li class="nav-item"><a class="nav-link" href="household.html">Households</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Veggies & Fruits <span class="fa fa-angle-down"></span>
                        </a>
                        <div class="dropdown-menu w3ls_vegetables_menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="vegetables.html">Vegetables</a>
                            <a class="dropdown-item" href="vegetables.html">Fruits</a>

                        </div>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="kitchen.html">Kitchen</a></li>
                    <li class="nav-item"><a class="nav-link" href="short-codes.html">Short Codes</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Beverages <span class="fa fa-angle-down"></span>
                        </a>
                        <div class="dropdown-menu w3ls_vegetables_menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="drinks.html">Soft Drinks</a>
                            <a class="dropdown-item" href="drinks.html">Juices</a>

                        </div>
                    </li>

                    <li class="nav-item"><a class="nav-link" href="pet.html">Pet Food</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Frozen Food Snacks <span class="fa fa-angle-down"></span>
                        </a>
                        <div class="dropdown-menu w3ls_vegetables_menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="frozen.html">Frozen Snacks</a>
                            <a class="dropdown-item" href="frozen.html">Frozen Nonveg</a>

                        </div>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="bread.html">Bread & Bakery</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Pages <span class="fa fa-angle-down"></span>
                        </a>
                        <div class="dropdown-menu w3ls_vegetables_menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="blog.html">Blog</a>
                            <a class="dropdown-item" href="blog-single.html">Blog Single</a>
                            <a class="dropdown-item" href="error.html">404</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name:"NavSection",
}
</script>

<style scoped></style>