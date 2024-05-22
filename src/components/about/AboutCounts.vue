<script setup lang="ts">
	import { onMounted } from 'vue'

	onMounted(() => {
		// @ts-ignore
		new PureCounter()
	})
</script>

<template>
	<div class="container counts">
		<div class="row">
			<div class="col-lg-3 col-md-6">
				<div class="count-box">
					<i class="bi bi-emoji-smile"></i>
					<span
						data-purecounter-start="0"
						data-purecounter-end="232"
						data-purecounter-duration="1"
						class="purecounter"
					></span>
					<p>Happy Clients</p>
				</div>
			</div>

			<div class="col-lg-3 col-md-6 mt-5 mt-md-0">
				<div class="count-box">
					<i class="bi bi-journal-richtext"></i>
					<span
						data-purecounter-start="0"
						data-purecounter-end="521"
						data-purecounter-duration="1"
						class="purecounter"
					></span>
					<p>Projects</p>
				</div>
			</div>

			<div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
				<div class="count-box">
					<i class="bi bi-headset"></i>
					<span
						data-purecounter-start="0"
						data-purecounter-end="1463"
						data-purecounter-duration="1"
						class="purecounter"
					></span>
					<p>Hours Of Support</p>
				</div>
			</div>

			<div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
				<div class="count-box">
					<i class="bi bi-award"></i>
					<span
						data-purecounter-start="0"
						data-purecounter-end="24"
						data-purecounter-duration="1"
						class="purecounter"
					></span>
					<p>Awards</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.counts {
		padding: 70px 0 60px;
	}

	.count-box {
		padding: 30px 30px 25px 30px;
		width: 100%;
		position: relative;
		text-align: center;
		background: rgba(255, 255, 255, 0.08);

		i {
			position: absolute;
			top: -25px;
			left: 50%;
			transform: translateX(-50%);
			font-size: 24px;
			background: rgba(255, 255, 255, 0.1);
			padding: 12px;
			color: #18d26e;
			border-radius: 50px;
			line-height: 0;
		}

		span {
			font-size: 36px;
			display: block;
			font-weight: 600;
			color: #fff;
		}

		p {
			padding: 0;
			margin: 0;
			font-family: 'Raleway', sans-serif;
			font-size: 14px;
		}
	}
</style>
