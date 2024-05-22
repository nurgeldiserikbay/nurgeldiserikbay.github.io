<script setup lang="ts"></script>

<template>
	<div class="container interests">
		<div class="section__subtitle">
			<h2>Interests</h2>
		</div>

		<div class="row">
			<div class="col-lg-3 col-md-4">
				<div class="icon-box">
					<i class="ri-store-line" style="color: #ffbb2c"></i>
					<h3>Lorem Ipsum</h3>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 mt-4 mt-md-0">
				<div class="icon-box">
					<i class="ri-bar-chart-box-line" style="color: #5578ff"></i>
					<h3>Dolor Sitema</h3>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 mt-4 mt-md-0">
				<div class="icon-box">
					<i class="ri-calendar-todo-line" style="color: #e80368"></i>
					<h3>Sed perspiciatis</h3>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 mt-4 mt-lg-0">
				<div class="icon-box">
					<i class="ri-paint-brush-line" style="color: #e361ff"></i>
					<h3>Magni Dolores</h3>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 mt-4">
				<div class="icon-box">
					<i class="ri-database-2-line" style="color: #47aeff"></i>
					<h3>Nemo Enim</h3>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 mt-4">
				<div class="icon-box">
					<i class="ri-gradienter-line" style="color: #ffa76e"></i>
					<h3>Eiusmod Tempor</h3>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 mt-4">
				<div class="icon-box">
					<i class="ri-file-list-3-line" style="color: #11dbcf"></i>
					<h3>Midela Teren</h3>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 mt-4">
				<div class="icon-box">
					<i class="ri-price-tag-2-line" style="color: #4233ff"></i>
					<h3>Pira Neve</h3>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 mt-4">
				<div class="icon-box">
					<i class="ri-anchor-line" style="color: #b2904f"></i>
					<h3>Dirada Pack</h3>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 mt-4">
				<div class="icon-box">
					<i class="ri-disc-line" style="color: #b20969"></i>
					<h3>Moton Ideal</h3>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 mt-4">
				<div class="icon-box">
					<i class="ri-base-station-line" style="color: #ff5828"></i>
					<h3>Verdo Park</h3>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 mt-4">
				<div class="icon-box">
					<i class="ri-fingerprint-line" style="color: #29cc61"></i>
					<h3>Flavor Nivelanda</h3>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.interests {
		.icon-box {
			display: flex;
			align-items: center;
			padding: 20px;
			background: rgba(255, 255, 255, 0.08);
			transition: ease-in-out 0.3s;

			&:hover {
				background: rgba(255, 255, 255, 0.12);
			}

			i {
				font-size: 32px;
				padding-right: 10px;
				line-height: 1;
			}

			h3 {
				font-weight: 700;
				margin: 0;
				padding: 0;
				line-height: 1;
				font-size: 16px;
				color: #fff;
			}
		}
	}
</style>
