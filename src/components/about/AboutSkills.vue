<script setup lang="ts">
	import { ref, onMounted } from 'vue'

	const skillsContent = ref<HTMLDivElement | null>(null)

	onMounted(() => {
		if (skillsContent.value) {
			// @ts-ignore
			new Waypoint({
				element: skillsContent.value,
				offset: '80%',
				handler: function () {
					const progress = document.querySelectorAll<HTMLDivElement>(
						'.progress .progress__bar',
					)
					progress.forEach((el: HTMLDivElement) => {
						el.style.width = el.getAttribute('aria-valuenow') + '%'
					})
				},
			})
		}
	})
</script>

<template>
	<div class="container skills">
		<div class="section__subtitle">
			<h2>Skills</h2>
		</div>

		<div ref="skillsContent" class="row skills__content">
			<div class="col-lg-6">
				<div class="progress">
					<span class="skill">HTML <i class="val">100%</i></span>
					<div class="progress__bar-wrap">
						<div
							class="progress__bar"
							role="progressbar"
							aria-valuenow="100"
							aria-valuemin="0"
							aria-valuemax="100"
						></div>
					</div>
				</div>

				<div class="progress">
					<span class="skill">CSS <i class="val">90%</i></span>
					<div class="progress__bar-wrap">
						<div
							class="progress__bar"
							role="progressbar"
							aria-valuenow="90"
							aria-valuemin="0"
							aria-valuemax="100"
						></div>
					</div>
				</div>

				<div class="progress">
					<span class="skill">JavaScript <i class="val">75%</i></span>
					<div class="progress__bar-wrap">
						<div
							class="progress__bar"
							role="progressbar"
							aria-valuenow="75"
							aria-valuemin="0"
							aria-valuemax="100"
						></div>
					</div>
				</div>
			</div>

			<div class="col-lg-6">
				<div class="progress">
					<span class="skill">PHP <i class="val">80%</i></span>
					<div class="progress__bar-wrap">
						<div
							class="progress__bar"
							role="progressbar"
							aria-valuenow="80"
							aria-valuemin="0"
							aria-valuemax="100"
						></div>
					</div>
				</div>

				<div class="progress">
					<span class="skill">WordPress/CMS <i class="val">90%</i></span>
					<div class="progress__bar-wrap">
						<div
							class="progress__bar"
							role="progressbar"
							aria-valuenow="90"
							aria-valuemin="0"
							aria-valuemax="100"
						></div>
					</div>
				</div>

				<div class="progress">
					<span class="skill">Photoshop <i class="val">55%</i></span>
					<div class="progress__bar-wrap">
						<div
							class="progress__bar"
							role="progressbar"
							aria-valuenow="55"
							aria-valuemin="0"
							aria-valuemax="100"
						></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.skills {
		.progress {
			height: 60px;
			display: block;
			background: none;
			border-radius: 0;

			&__bar-wrap {
				background: rgba(255, 255, 255, 0.2);
			}

			&__bar {
				width: 1px;
				height: 10px;
				transition: 0.9s;
				background-color: #18d26e;
			}

			.skill {
				padding: 10px 0;
				margin: 0;
				text-transform: uppercase;
				display: block;
				font-weight: 600;
				font-family: 'Poppins', sans-serif;
				color: #fff;

				.val {
					float: right;
					font-style: normal;
				}
			}
		}
	}
</style>
