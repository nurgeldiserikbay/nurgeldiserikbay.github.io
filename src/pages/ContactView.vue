<script setup lang="ts">
	import { SOCIALS } from '@/consts/content'
</script>

<template>
	<section id="contact" class="section contact">
		<div class="container">
			<div class="section__subtitle">
				<h2>{{ $t('pages.contact.title') }}</h2>
				<p>{{ $t('pages.contact.subtitle') }}</p>
			</div>

			<div class="row mt-2">
				<div class="col-md-6 d-flex align-items-stretch">
					<div class="info-box">
						<i class="bx bx-map"></i>
						<h3>{{ $t('labels.myaddress') }}</h3>
						<p>{{ $t('pages.contact.myaddress') }}</p>
					</div>
				</div>

				<div class="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
					<div class="info-box">
						<i class="bx bx-share-alt"></i>
						<h3>{{ $t('pages.contact.subtitle1') }}</h3>
						<div class="social-links">
							<a
								v-for="social in SOCIALS"
								:key="social.name"
								:href="social.href"
								:class="social.class"
								><i :class="social.icon"></i
							></a>
						</div>
					</div>
				</div>

				<div class="col-md-6 mt-4 d-flex align-items-stretch">
					<div class="info-box">
						<i class="bx bx-envelope"></i>
						<h3>{{ $t('pages.contact.emailme') }}</h3>
						<p>nurikserikbay1995@gmail.com</p>
					</div>
				</div>
				<div class="col-md-6 mt-4 d-flex align-items-stretch">
					<div class="info-box">
						<i class="bx bx-phone-call"></i>
						<h3>{{ $t('pages.contact.callme') }}</h3>
						<p>8 708 341 60 54</p>
					</div>
				</div>
			</div>

			<form action="" method="post" role="form" class="php-email-form mt-4">
				<div class="row">
					<div class="col-md-6 form-group">
						<input
							type="text"
							name="name"
							class="form-control"
							id="name"
							:placeholder="$t('placeholder.name')"
							required
						/>
					</div>
					<div class="col-md-6 form-group mt-3 mt-md-0">
						<input
							type="email"
							class="form-control"
							name="email"
							id="email"
							:placeholder="$t('placeholder.email')"
							required
						/>
					</div>
				</div>
				<div class="form-group mt-3">
					<input
						type="text"
						class="form-control"
						name="subject"
						id="subject"
						:placeholder="$t('placeholder.subject')"
						required
					/>
				</div>
				<div class="form-group mt-3">
					<textarea
						class="form-control"
						name="message"
						rows="5"
						:placeholder="$t('placeholder.message')"
						required
					></textarea>
				</div>
				<div class="my-3">
					<div class="loading">{{ $t('labels.loading') }}</div>
					<div class="error-message"></div>
					<div class="sent-message">{{ $t('messeges.sendedMessage') }}</div>
				</div>
				<div class="text-center">
					<button type="submit">{{ $t('commands.send') }}</button>
				</div>
			</form>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.contact {
		.info-box {
			color: #444444;
			padding: 20px;
			width: 100%;
			background: rgba(255, 255, 255, 0.08);

			i.bx {
				font-size: 24px;
				color: #18d26e;
				border-radius: 50%;
				padding: 14px;
				float: left;
				background: rgba(255, 255, 255, 0.1);
			}

			h3 {
				font-size: 20px;
				color: rgba(255, 255, 255, 0.5);
				font-weight: 700;
				margin: 10px 0 8px 68px;
			}

			p {
				padding: 0;
				color: #fff;
				line-height: 24px;
				font-size: 14px;
				margin: 0 0 0 68px;
			}
		}

		.social-links {
			margin: 5px 0 0 68px;
			display: flex;

			a {
				font-size: 18px;
				display: inline-block;
				color: #fff;
				line-height: 1;
				margin-right: 12px;
				transition: 0.3s;

				&:hover {
					color: #18d26e;
				}
			}
		}

		.php-email-form {
			padding: 30px;
			background: rgba(255, 255, 255, 0.08);

			.error-message {
				display: none;
				background: rgba(255, 255, 255, 0.08);
				background: #ed3c0d;
				text-align: left;
				padding: 15px;
				font-weight: 600;

				br + br {
					margin-top: 25px;
				}
			}

			.sent-message {
				display: none;
				background: rgba(255, 255, 255, 0.08);
				background: #18d26e;
				text-align: center;
				padding: 15px;
				font-weight: 600;
			}

			.loading {
				display: none;
				background: rgba(255, 255, 255, 0.08);
				text-align: center;
				padding: 15px;

				&:before {
					content: '';
					display: inline-block;
					border-radius: 50%;
					width: 24px;
					height: 24px;
					margin: 0 10px -6px 0;
					border: 3px solid #18d26e;
					border-top-color: #eee;
					animation: animate-loading 1s linear infinite;
				}
			}

			input,
			textarea {
				border-radius: 0;
				box-shadow: none;
				font-size: 14px;
				background: rgba(255, 255, 255, 0.08);
				border: 0;
				transition: 0.3s;
				color: #fff;

				&:focus {
					background-color: rgba(255, 255, 255, 0.11);
				}

				&::-moz-placeholder {
					color: rgba(255, 255, 255, 0.3);
					opacity: 1;
				}

				&::placeholder {
					color: rgba(255, 255, 255, 0.3);
					opacity: 1;
				}
			}

			input {
				padding: 10px 15px;
			}

			textarea {
				padding: 12px 15px;
			}

			button[type='submit'] {
				background: #18d26e;
				border: 0;
				padding: 10px 30px;
				color: #fff;
				transition: 0.4s;
				border-radius: 4px;

				&:hover {
					background: #15bb62;
				}
			}
		}
	}

	@keyframes animate-loading {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
</style>
