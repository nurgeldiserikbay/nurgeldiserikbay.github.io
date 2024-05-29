<script setup lang="ts"></script>

<template>
	<section id="services" class="section services">
		<div class="container">
			<div class="section__subtitle">
				<h2>{{ $t('pages.services.title') }}</h2>
				<p>{{ $t('pages.services.subtitle') }}</p>
			</div>

			<div class="row">
				<div
					v-for="service in SERVICES"
					:key="service.id"
					class="col-lg-4 col-md-6 d-flex align-items-stretch"
					:class="{ [service.class]: true }"
				>
					<div class="icon-box">
						<div class="icon"><i :class="service.icon"></i></div>
						<h4>
							<a :href="service.href">{{ $t(service.title) }}</a>
						</h4>
						<p>{{ $t(service.text) }}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.services {
		.icon-box {
			text-align: center;
			background: rgba(204, 204, 204, 0.1);
			padding: 80px 20px;
			transition: all ease-in-out 0.3s;

			&:hover {
				background: #18d26e;
				border-color: #18d26e;
			}

			.icon {
				margin: 0 auto;
				width: 64px;
				height: 64px;
				background: #18d26e;
				border-radius: 5px;
				transition: all 0.3s ease-out 0s;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-bottom: 20px;
				transform-style: preserve-3d;

				i {
					color: #fff;
					font-size: 28px;
				}

				&::before {
					position: absolute;
					content: '';
					left: -8px;
					top: -8px;
					height: 100%;
					width: 100%;
					background: rgba(255, 255, 255, 0.15);
					border-radius: 5px;
					transition: all 0.3s ease-out 0s;
					transform: translateZ(-1px);
				}
			}

			&:hover .icon {
				background: #fff;

				&::before {
					background: #35e888;
				}

				i {
					color: #18d26e;
				}
			}

			h4 {
				font-weight: 700;
				margin-bottom: 15px;
				font-size: 24px;

				a {
					color: #fff;
					pointer-events: none;
				}
			}

			&:hover h4 {
				a {
					color: #fff;
				}
			}

			p {
				line-height: 24px;
				font-size: 14px;
				margin-bottom: 0;
			}

			&:hover p {
				color: #fff;
			}
		}
	}
</style>
