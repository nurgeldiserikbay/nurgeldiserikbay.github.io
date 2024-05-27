<script setup lang="ts">
	const INTERESTS = [
		{
			class: 'col-lg-3 col-md-4',
			icon: 'ri-store-line',
			color: '#ffbb2c',
			text: 'pages.about.interests.1',
		},
		{
			class: 'col-lg-3 col-md-4 mt-4 mt-md-0',
			icon: 'ri-bar-chart-box-line',
			color: '#5578ff',
			text: 'pages.about.interests.2',
		},
		{
			class: 'col-lg-3 col-md-4 mt-4 mt-md-0',
			icon: 'ri-calendar-todo-line',
			color: '#e80368',
			text: 'pages.about.interests.3',
		},
	]
</script>

<template>
	<div class="container interests">
		<div class="section__subtitle">
			<h2>{{ $t('pages.about.subtitle2') }}</h2>
		</div>

		<div class="row">
			<div
				v-for="(interest, interestInd) in INTERESTS"
				:key="interestInd"
				:class="interest.class"
			>
				<div class="icon-box">
					<i :class="interest.icon" :style="{ color: interest.color }"></i>
					<h3>{{ $t(interest.text) }}</h3>
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
