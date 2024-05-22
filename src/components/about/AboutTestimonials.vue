<script setup lang="ts">
	import { onMounted } from 'vue'

	onMounted(() => {
		// @ts-ignore
		new Swiper('.testimonials-slider', {
			speed: 600,
			loop: true,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			slidesPerView: 'auto',
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 20,
				},

				1200: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			},
		})
	})
</script>

<template>
	<div class="container testimonials">
		<div class="section__subtitle">
			<h2>Testimonials</h2>
		</div>

		<div
			class="testimonials-slider swiper"
			data-aos="fade-up"
			data-aos-delay="100"
		>
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<div class="testimonial__item">
						<p>
							<i class="bx bxs-quote-alt-left quote-icon-left"></i>
							Proin iaculis purus consequat sem cure digni ssim donec porttitora
							entum suscipit rhoncus. Accusantium quam, ultricies eget id,
							aliquam eget nibh et. Maecen aliquam, risus at semper.
							<i class="bx bxs-quote-alt-right quote-icon-right"></i>
						</p>
						<img
							src="@/assets/img/testimonials/testimonials-1.jpg"
							class="testimonial__img"
							alt=""
						/>
						<h3>Saul Goodman</h3>
						<h4>Ceo &amp; Founder</h4>
					</div>
				</div>
				<!-- End testimonial item -->

				<div class="swiper-slide">
					<div class="testimonial__item">
						<p>
							<i class="bx bxs-quote-alt-left quote-icon-left"></i>
							Export tempor illum tamen malis malis eram quae irure esse labore
							quem cillum quid cillum eram malis quorum velit fore eram velit
							sunt aliqua noster fugiat irure amet legam anim culpa.
							<i class="bx bxs-quote-alt-right quote-icon-right"></i>
						</p>
						<img
							src="@/assets/img/testimonials/testimonials-2.jpg"
							class="testimonial__img"
							alt=""
						/>
						<h3>Sara Wilsson</h3>
						<h4>Designer</h4>
					</div>
				</div>
				<!-- End testimonial item -->

				<div class="swiper-slide">
					<div class="testimonial__item">
						<p>
							<i class="bx bxs-quote-alt-left quote-icon-left"></i>
							Enim nisi quem export duis labore cillum quae magna enim sint
							quorum nulla quem veniam duis minim tempor labore quem eram duis
							noster aute amet eram fore quis sint minim.
							<i class="bx bxs-quote-alt-right quote-icon-right"></i>
						</p>
						<img
							src="@/assets/img/testimonials/testimonials-3.jpg"
							class="testimonial__img"
							alt=""
						/>
						<h3>Jena Karlis</h3>
						<h4>Store Owner</h4>
					</div>
				</div>
				<!-- End testimonial item -->

				<div class="swiper-slide">
					<div class="testimonial__item">
						<p>
							<i class="bx bxs-quote-alt-left quote-icon-left"></i>
							Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos
							export minim fugiat minim velit minim dolor enim duis veniam ipsum
							anim magna sunt elit fore quem dolore labore illum veniam.
							<i class="bx bxs-quote-alt-right quote-icon-right"></i>
						</p>
						<img
							src="@/assets/img/testimonials/testimonials-4.jpg"
							class="testimonial__img"
							alt=""
						/>
						<h3>Matt Brandon</h3>
						<h4>Freelancer</h4>
					</div>
				</div>
				<!-- End testimonial item -->

				<div class="swiper-slide">
					<div class="testimonial__item">
						<p>
							<i class="bx bxs-quote-alt-left quote-icon-left"></i>
							Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
							veniam tempor noster veniam enim culpa labore duis sunt culpa
							nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum
							quid.
							<i class="bx bxs-quote-alt-right quote-icon-right"></i>
						</p>
						<img
							src="@/assets/img/testimonials/testimonials-5.jpg"
							class="testimonial__img"
							alt=""
						/>
						<h3>John Larson</h3>
						<h4>Entrepreneur</h4>
					</div>
				</div>
				<!-- End testimonial item -->
			</div>
			<div class="swiper-pagination"></div>
		</div>

		<div class="owl-carousel testimonials-carousel"></div>
	</div>
</template>

<style lang="scss" scoped>
	.testimonials {
		.testimonials-carousel,
		.testimonials-slider {
			overflow: hidden;
		}

		.testimonial {
			&__item {
				box-sizing: content-box;
				min-height: 320px;

				p {
					font-style: italic;
					margin: 0 15px 0 15px;
					padding: 20px 20px 60px 20px;
					background: rgba(255, 255, 255, 0.1);
					position: relative;
					border-radius: 6px;
					position: relative;
					z-index: 1;
				}

				.quote-icon-left,
				.quote-icon-right {
					color: rgba(255, 255, 255, 0.25);
					font-size: 26px;
				}

				.quote-icon-left {
					display: inline-block;
					left: -5px;
					position: relative;
				}

				.quote-icon-right {
					display: inline-block;
					right: -5px;
					position: relative;
					top: 10px;
				}

				h3 {
					font-size: 18px;
					font-weight: bold;
					margin: 10px 0 5px 45px;
					color: #fff;
				}

				h4 {
					font-size: 14px;
					color: #999;
					margin: 0 0 0 45px;
				}
			}

			&__img {
				width: 90px;
				border-radius: 50%;
				margin: -40px 0 0 40px;
				position: relative;
				z-index: 2;
				border: 6px solid rgba(255, 255, 255, 0.12);
			}
		}
	}
</style>

<style lang="scss">
	.swiper-pagination {
		margin-top: 20px;
		position: relative;

		&-bullet {
			width: 12px;
			height: 12px;
			opacity: 1;
			background-color: rgba(255, 255, 255, 0.3);

			&-active {
				background-color: #18d26e;
			}
		}
	}
</style>
