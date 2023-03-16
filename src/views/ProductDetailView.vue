<template>
    <div class="product-detail">
        <div class="products-breadcrumb">
		<div class="container">
			<ul>
				<li><i class="fa fa-home" aria-hidden="true"></i><router-link :to="{name:'home'}">Home</router-link><span>|</span></li>
				<li>Single Page</li>
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
		<div class="w3l_banner_nav_right">
			<div class="w3l_banner_nav_right_banner3">
				<h3>Best Deals For New Products<span class="blink_me"></span></h3>
			</div>
			<div class="agileinfo_single">
				<h5>charminar pulao basmati rice 5 kg</h5>
				<div class="row">
					<div class="col-md-4 agileinfo_single_left">
						<img id="example" src="/images/76.png" alt=" " class="img-fluid" />
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
								<h4>$21.00 <span>$25.00</span></h4>
							</div>
							<div class="snipcart-details agileinfo_single_right_details">
								<form action="#" method="post">
									<fieldset>
										<input type="hidden" name="cmd" value="_cart" />
										<input type="hidden" name="add" value="1" />
										<input type="hidden" name="business" value=" " />
										<input type="hidden" name="item_name" value="pulao basmati rice" />
										<input type="hidden" name="amount" value="21.00" />
										<input type="hidden" name="discount_amount" value="1.00" />
										<input type="hidden" name="currency_code" value="USD" />
										<input type="hidden" name="return" value=" " />
										<input type="hidden" name="cancel_return" value=" " />
										<input type="submit" name="submit" value="Add to cart" class="button" />
									</fieldset>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
	<!-- //banner -->
	<!-- brands -->
	
    </div>
</template>