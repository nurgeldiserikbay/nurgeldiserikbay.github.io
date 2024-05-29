<script setup lang="ts">
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
			<h2>{{ $t('pages.about.subtitle3') }}</h2>
		</div>

		<div
			class="testimonials-slider swiper"
			data-aos="fade-up"
			data-aos-delay="100"
		>
			<div class="swiper-wrapper">
				<div
					v-for="(testimonial, testimonialInd) in TESTIMONIALS"
					:key="testimonialInd"
					class="swiper-slide"
				>
					<div class="testimonial__item">
						<p>
							<i class="bx bxs-quote-alt-left quote-icon-left"></i>
							{{ $t(testimonial.text) }}
							<i class="bx bxs-quote-alt-right quote-icon-right"></i>
						</p>
						<img :src="testimonial.img" class="testimonial__img" :alt="testimonial.alt" />
						<h3>{{ $t(testimonial.author) }}</h3>
						<h4>{{ $t(testimonial.role) }}</h4>
					</div>
				</div>
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
