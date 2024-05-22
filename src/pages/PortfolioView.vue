<script setup lang="ts">
	import { ref, onMounted, nextTick as $nextTick } from 'vue'

	const FILTERS = [
		{ selector: '*', text: 'All' },
		{ selector: '.filter-app', text: 'App' },
		{ selector: '.filter-card', text: 'Card' },
		{ selector: '.filter-web', text: 'Web' },
	]

	const portfolioContainer = ref<HTMLDivElement | null>(null)
	const portfolioIsotope = ref()
	const activeFilter = ref('*')

	onMounted(() => {
		if (portfolioContainer.value) {
			$nextTick(() => {
				setTimeout(() => {
				// @ts-ignore
					portfolioIsotope.value = new Isotope(portfolioContainer.value, {
						itemSelector: '.portfolio__item',
						layoutMode: 'fitRows',
					})
				}, 500)
			})

			// @ts-ignore
			GLightbox({
				selector: '.portfolio-lightbox',
			})

			// @ts-ignore
			GLightbox({
				selector: '.portfolio-details-lightbox',
				width: '90%',
				height: '90vh',
			})
		}
	})

	function clickFilter(name: string) {
		if (portfolioIsotope.value) {
			activeFilter.value = name
			portfolioIsotope.value.arrange({
				filter: name,
			})
		}
	}
</script>

<template>
	<section id="portfolio" class="section portfolio">
		<div class="container">
			<div class="section__subtitle">
				<h2>Portfolio</h2>
				<p>My Works</p>
			</div>

			<div class="row">
				<div class="col-lg-12 d-flex justify-content-center">
					<ul class="portfolio__filters">
						<li
							v-for="filter in FILTERS"
							:key="filter.selector"
							:class="{ 'filter-active': activeFilter === filter.selector }"
							@click="clickFilter(filter.selector)"
						>
							{{ filter.text }}
						</li>
					</ul>
				</div>
			</div>

			<div ref="portfolioContainer" class="row portfolio-container">
				<div class="col-lg-4 col-md-6 portfolio__item filter-app">
					<div class="portfolio__wrap">
						<img
							src="/assets/img/portfolio/portfolio-1.jpg"
							class="img-fluid"
							alt=""
						/>
						<div class="portfolio__info">
							<h4>App 1</h4>
							<p>App</p>
							<div class="portfolio__links">
								<a
									href="/assets/img/portfolio/portfolio-1.jpg"
									data-gallery="portfolioGallery"
									class="portfolio-lightbox"
									title="App 1"
									><i class="bx bx-plus"></i
								></a>
								<a
									href="portfolio-details.html"
									data-gallery="portfolioDetailsGallery"
									data-glightbox="type: external"
									class="portfolio-details-lightbox"
									title="Portfolio Details"
									><i class="bx bx-link"></i
								></a>
							</div>
						</div>
					</div>
				</div>

				<div class="col-lg-4 col-md-6 portfolio__item filter-web">
					<div class="portfolio__wrap">
						<img
							src="/assets/img/portfolio/portfolio-2.jpg"
							class="img-fluid"
							alt=""
						/>
						<div class="portfolio__info">
							<h4>Web 3</h4>
							<p>Web</p>
							<div class="portfolio__links">
								<a
									href="/assets/img/portfolio/portfolio-2.jpg"
									data-gallery="portfolioGallery"
									class="portfolio-lightbox"
									title="Web 3"
									><i class="bx bx-plus"></i
								></a>
								<a
									href="portfolio-details.html"
									data-gallery="portfolioDetailsGallery"
									data-glightbox="type: external"
									class="portfolio-details-lightbox"
									title="Portfolio Details"
									><i class="bx bx-link"></i
								></a>
							</div>
						</div>
					</div>
				</div>

				<div class="col-lg-4 col-md-6 portfolio__item filter-app">
					<div class="portfolio__wrap">
						<img
							src="/assets/img/portfolio/portfolio-3.jpg"
							class="img-fluid"
							alt=""
						/>
						<div class="portfolio__info">
							<h4>App 2</h4>
							<p>App</p>
							<div class="portfolio__links">
								<a
									href="/assets/img/portfolio/portfolio-3.jpg"
									data-gallery="portfolioGallery"
									class="portfolio-lightbox"
									title="App 2"
									><i class="bx bx-plus"></i
								></a>
								<a
									href="portfolio-details.html"
									data-gallery="portfolioDetailsGallery"
									data-glightbox="type: external"
									class="portfolio-details-lightbox"
									title="Portfolio Details"
									><i class="bx bx-link"></i
								></a>
							</div>
						</div>
					</div>
				</div>

				<div class="col-lg-4 col-md-6 portfolio__item filter-card">
					<div class="portfolio__wrap">
						<img
							src="/assets/img/portfolio/portfolio-4.jpg"
							class="img-fluid"
							alt=""
						/>
						<div class="portfolio__info">
							<h4>Card 2</h4>
							<p>Card</p>
							<div class="portfolio__links">
								<a
									href="/assets/img/portfolio/portfolio-4.jpg"
									data-gallery="portfolioGallery"
									class="portfolio-lightbox"
									title="Card 2"
									><i class="bx bx-plus"></i
								></a>
								<a
									href="portfolio-details.html"
									data-gallery="portfolioDetailsGallery"
									data-glightbox="type: external"
									class="portfolio-details-lightbox"
									title="Portfolio Details"
									><i class="bx bx-link"></i
								></a>
							</div>
						</div>
					</div>
				</div>

				<div class="col-lg-4 col-md-6 portfolio__item filter-web">
					<div class="portfolio__wrap">
						<img
							src="/assets/img/portfolio/portfolio-5.jpg"
							class="img-fluid"
							alt=""
						/>
						<div class="portfolio__info">
							<h4>Web 2</h4>
							<p>Web</p>
							<div class="portfolio__links">
								<a
									href="/assets/img/portfolio/portfolio-5.jpg"
									data-gallery="portfolioGallery"
									class="portfolio-lightbox"
									title="Web 2"
									><i class="bx bx-plus"></i
								></a>
								<a
									href="portfolio-details.html"
									data-gallery="portfolioDetailsGallery"
									data-glightbox="type: external"
									class="portfolio-details-lightbox"
									title="Portfolio Details"
									><i class="bx bx-link"></i
								></a>
							</div>
						</div>
					</div>
				</div>

				<div class="col-lg-4 col-md-6 portfolio__item filter-app">
					<div class="portfolio__wrap">
						<img
							src="/assets/img/portfolio/portfolio-6.jpg"
							class="img-fluid"
							alt=""
						/>
						<div class="portfolio__info">
							<h4>App 3</h4>
							<p>App</p>
							<div class="portfolio__links">
								<a
									href="/assets/img/portfolio/portfolio-6.jpg"
									data-gallery="portfolioGallery"
									class="portfolio-lightbox"
									title="App 3"
									><i class="bx bx-plus"></i
								></a>
								<a
									href="portfolio-details.html"
									data-gallery="portfolioDetailsGallery"
									data-glightbox="type: external"
									class="portfolio-details-lightbox"
									title="Portfolio Details"
									><i class="bx bx-link"></i
								></a>
							</div>
						</div>
					</div>
				</div>

				<div class="col-lg-4 col-md-6 portfolio__item filter-card">
					<div class="portfolio__wrap">
						<img
							src="/assets/img/portfolio/portfolio-7.jpg"
							class="img-fluid"
							alt=""
						/>
						<div class="portfolio__info">
							<h4>Card 1</h4>
							<p>Card</p>
							<div class="portfolio__links">
								<a
									href="/assets/img/portfolio/portfolio-7.jpg"
									data-gallery="portfolioGallery"
									class="portfolio-lightbox"
									title="Card 1"
									><i class="bx bx-plus"></i
								></a>
								<a
									href="portfolio-details.html"
									data-gallery="portfolioDetailsGallery"
									data-glightbox="type: external"
									class="portfolio-details-lightbox"
									title="Portfolio Details"
									><i class="bx bx-link"></i
								></a>
							</div>
						</div>
					</div>
				</div>

				<div class="col-lg-4 col-md-6 portfolio__item filter-card">
					<div class="portfolio__wrap">
						<img
							src="/assets/img/portfolio/portfolio-8.jpg"
							class="img-fluid"
							alt=""
						/>
						<div class="portfolio__info">
							<h4>Card 3</h4>
							<p>Card</p>
							<div class="portfolio__links">
								<a
									href="/assets/img/portfolio/portfolio-8.jpg"
									data-gallery="portfolioGallery"
									class="portfolio-lightbox"
									title="Card 3"
									><i class="bx bx-plus"></i
								></a>
								<a
									href="portfolio-details.html"
									data-gallery="portfolioDetailsGallery"
									data-glightbox="type: external"
									class="portfolio-details-lightbox"
									title="Portfolio Details"
									><i class="bx bx-link"></i
								></a>
							</div>
						</div>
					</div>
				</div>

				<div class="col-lg-4 col-md-6 portfolio__item filter-web">
					<div class="portfolio__wrap">
						<img
							src="/assets/img/portfolio/portfolio-9.jpg"
							class="img-fluid"
							alt=""
						/>
						<div class="portfolio__info">
							<h4>Web 3</h4>
							<p>Web</p>
							<div class="portfolio__links">
								<a
									href="/assets/img/portfolio/portfolio-9.jpg"
									data-gallery="portfolioGallery"
									class="portfolio-lightbox"
									title="Web 3"
									><i class="bx bx-plus"></i
								></a>
								<a
									href="portfolio-details.html"
									data-gallery="portfolioDetailsGallery"
									data-glightbox="type: external"
									class="portfolio-details-lightbox"
									title="Portfolio Details"
									><i class="bx bx-link"></i
								></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.portfolio {
		&__item {
			margin-bottom: 30px;
		}

		&__filters {
			padding: 0;
			margin: 0 auto 15px auto;
			list-style: none;
			text-align: center;
			border-radius: 50px;
			padding: 2px 15px;

			li {
				cursor: pointer;
				display: inline-block;
				padding: 8px 16px 10px 16px;
				font-size: 14px;
				font-weight: 600;
				line-height: 1;
				text-transform: uppercase;
				color: #fff;
				background: rgba(255, 255, 255, 0.1);
				margin: 0 3px 10px 3px;
				transition: all 0.3s ease-in-out;
				border-radius: 4px;

				&:hover,
				&.filter-active {
					background: #18d26e;
				}

				&:last-child {
					margin-right: 0;
				}
			}
		}

		&__wrap {
			transition: 0.3s;
			position: relative;
			overflow: hidden;
			z-index: 1;
			background: rgba(0, 0, 0, 0.6);

			&::before {
				content: '';
				background: rgba(0, 0, 0, 0.6);
				position: absolute;
				left: 30px;
				right: 30px;
				top: 30px;
				bottom: 30px;
				transition: all ease-in-out 0.3s;
				z-index: 2;
				opacity: 0;
			}

			&:hover::before {
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				opacity: 1;
			}
		}

		&__info {
			opacity: 0;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			text-align: center;
			z-index: 3;
			transition: all ease-in-out 0.3s;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			&::before {
				display: block;
				content: '';
				width: 48px;
				height: 48px;
				position: absolute;
				top: 35px;
				left: 35px;
				border-top: 3px solid #fff;
				border-left: 3px solid #fff;
				transition: all 0.5s ease 0s;
				z-index: 9994;
			}

			&::after {
				display: block;
				content: '';
				width: 48px;
				height: 48px;
				position: absolute;
				bottom: 35px;
				right: 35px;
				border-bottom: 3px solid #fff;
				border-right: 3px solid #fff;
				transition: all 0.5s ease 0s;
				z-index: 9994;
			}

			h4 {
				font-size: 20px;
				color: #fff;
				font-weight: 600;
			}

			p {
				color: #ffffff;
				font-size: 14px;
				text-transform: uppercase;
				padding: 0;
				margin: 0;
			}
		}

		&__wrap:hover &__info {
			opacity: 1;

			&::before {
				top: 15px;
				left: 15px;
			}

			&::after {
				bottom: 15px;
				right: 15px;
			}
		}

		&__links {
			text-align: center;
			z-index: 4;

			a {
				color: #fff;
				margin: 0 2px;
				font-size: 28px;
				display: inline-block;
				transition: 0.3s;

				&:hover {
					color: #63eda3;
				}
			}
		}
	}
</style>
