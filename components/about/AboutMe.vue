<script setup lang="ts">
	const getAge = computed(() => {
		return calculateAge('1995-12-06')
	})
</script>

<template>
	<div class="container about-me">
		<div class="section__subtitle">
			<h2>{{ $t('pages.about.title') }}</h2>
			<p>{{ $t('pages.about.subtitle') }}</p>
		</div>
		<div class="row">
			<div class="col-lg-4" data-aos="fade-right">
				<img
					src="@/assets/img/me.png"
					class="img-fluid"
					alt="Vue developer, Vue.js, front-end developer, web developer, JavaScript, Vue.js portfolio, web applications, UI/UX design, front-end development, responsive design, HTML, CSS, JavaScript frameworks, single-page applications, Vue projects, Serikbay Nurgeldi"
				/>
			</div>
			<div class="col-lg-8 pt-4 pt-lg-0 about-me__content" data-aos="fade-left">
				<h3>{{ $t('pages.about.role') }}</h3>
				<p class="fst-italic">{{ $t('pages.about.text1') }}</p>
				<div class="row">
					<div class="col-lg-6">
						<ul>
							<li>
								<i class="bi bi-chevron-right"></i>
								<strong>{{ $t('labels.birthday') }}:</strong>
								<span>{{ $t('pages.about.birthday') }}</span>
							</li>
							<li>
								<i class="bi bi-chevron-right"></i>
								<strong>{{ $t('labels.website') }}:</strong>
								<span
									><a href="https://nurgeldiserikbay.github.io/"
										>https://nurgeldiserikbay.github.io/</a
									></span
								>
							</li>
							<li>
								<i class="bi bi-chevron-right"></i>
								<strong>{{ $t('labels.phone') }}:</strong>
								<span><a href="tel:+77083416054">8 708 341 60 54</a></span>
							</li>
							<li>
								<i class="bi bi-chevron-right"></i>
								<strong>{{ $t('labels.city') }}:</strong>
								<span>{{ $t('pages.about.city') }}</span>
							</li>
						</ul>
					</div>
					<div class="col-lg-6">
						<ul>
							<li>
								<i class="bi bi-chevron-right"></i>
								<strong>{{ $t('labels.age') }}:</strong>
								<span>{{ getAge }}</span>
							</li>
							<li>
								<i class="bi bi-chevron-right"></i>
								<strong>{{ $t('labels.degree') }}:</strong>
								<span>{{ $t('pages.about.degree') }}</span>
							</li>
							<li>
								<i class="bi bi-chevron-right"></i>
								<strong>{{ $t('labels.email') }}:</strong>
								<span
									><a href="mailto:nurikserikbay1995@gmail.com"
										>nurikserikbay1995@gmail.com</a
									></span
								>
							</li>
							<li>
								<i class="bi bi-chevron-right"></i>
								<strong>{{ $t('labels.freelance') }}:</strong>
								<span>{{ $t('pages.about.freelance') }}</span>
							</li>
						</ul>
					</div>
				</div>
				<p>
					{{ $t('pages.about.text2') }}
				</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.about-me {
		&__content {
			h3 {
				font-weight: 700;
				font-size: 26px;
				color: #18d26e;
			}

			ul {
				list-style: none;
				padding: 0;

				li {
					margin-bottom: 20px;
					display: flex;
					align-items: center;
					white-space: wrap;

					strong {
						margin-right: 10px;
					}

					i {
						font-size: 16px;
						margin-right: 5px;
						color: #18d26e;
						line-height: 0;
					}

					a {
						word-break: break-all;
					}
				}
			}

			p:last-child {
				margin-bottom: 0;
			}
		}
	}
</style>
