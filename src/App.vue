<script setup lang="ts">
	import MainHeader from '@/components/MainHeader.vue'
</script>

<template>
	<MainHeader />

	<router-view v-slot="{ Component }">
		<transition name="route-transition">
			<component :is="Component" />
		</transition>
	</router-view>

	<div class="credits">
		<!-- All the links in the footer should remain intact. -->
		<!-- You can delete the links only if you purchased the pro version. -->
		<!-- Licensing information: https://bootstrapmade.com/license/ -->
		<!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/personal-free-resume-bootstrap-template/ -->
		Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
	</div>
</template>

<style lang="scss" scoped>
	.resourceses {
		padding: 0 15px;
		padding-bottom: 35px;

		.resource {
			margin-bottom: 25px;

			&__type {
				font-size: 1.8rem;
				font-weight: 600;
				margin-bottom: 15px;
			}

			&__item {
				color: #020202;
				font-size: 1.6rem;
			}

			&__list {
				display: flex;
				flex-direction: column;
				gap: 10px;
			}
		}
	}
</style>
