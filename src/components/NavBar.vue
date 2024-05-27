<script setup lang="ts">
	import { ref, computed, watch } from 'vue'
	import { RouterLink, useRoute } from 'vue-router'

	import { LINKS } from '@/consts/content'

	const route = useRoute()

	const isActive = ref(false)
	const isLinkActive = computed(() => (link: string) => {
		return link === route.path
	})

	watch(
		() => route.path,
		() => {
			isActive.value = false
		},
	)

	function clickMobileNav() {
		isActive.value = !isActive.value
	}
</script>

<template>
	<nav class="navbar" :class="{ 'navbar-mobile': isActive }">
		<ul>
			<li v-for="link in LINKS" :key="link.href">
				<RouterLink
					class="nav-link"
					:to="link.href"
					:class="{ active: isLinkActive(link.href) }"
					>{{ $t(link.text) }}</RouterLink
				>
			</li>
		</ul>
		<i
			class="bi mobile-nav-toggle"
			:class="{ 'bi-list': !isActive, 'bi-x': isActive }"
			@click="clickMobileNav"
		></i>
	</nav>
</template>

<style lang="scss" scoped>
	@use '@/assets/styles/_variables' as var;
	@use '@/assets/styles/_mixins' as mixin;

	.navbar {
		padding: 0;
		margin-top: 35px;

		&.navbar-mobile {
			position: fixed;
			overflow: hidden;
			top: 0;
			right: 0;
			left: 0;
			bottom: 0;
			background: rgba(0, 0, 0, 0.9);
			transition: 0.3s;
			z-index: 999;
			margin-top: 0;
		}

		ul {
			margin: 0;
			padding: 0;
			display: flex;
			list-style: none;
			align-items: center;

			@include mixin.tablet {
				display: none;
			}

			li {
				position: relative;

				& + li {
					margin-left: 30px;
				}
			}
		}

		a {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0;
			font-family: 'Poppins', sans-serif;
			font-size: 16px;
			font-weight: 400;
			white-space: nowrap;
			transition: 0.3s;

			&:focus {
				color: rgba(255, 255, 255, 0.7);
			}

			i {
				font-size: 12px;
				line-height: 0;
				margin-left: 5px;
			}

			&:before {
				content: '';
				position: absolute;
				width: 0;
				height: 2px;
				bottom: -4px;
				left: 0;
				background-color: #18d26e;
				visibility: hidden;
				width: 0px;
				transition: all 0.3s ease-in-out 0s;
			}
		}

		a:hover:before,
		li:hover > a:before,
		.active:before {
			visibility: visible;
			width: 25px;
		}

		a:hover,
		.active,
		.active:focus,
		li:hover > a {
			color: #fff;
		}
	}

	.header-top {
		.navbar {
			margin: 0;
		}
	}

	.mobile-nav-toggle {
		color: #fff;
		font-size: 28px;
		cursor: pointer;
		display: none;
		line-height: 0;
		transition: 0.5s;
		position: fixed;
		right: 15px;
		top: 15px;

		@include mixin.tablet {
			display: block;
		}
	}

	.navbar-mobile {
		.mobile-nav-toggle {
			position: absolute;
			top: 15px;
			right: 15px;
		}

		ul {
			display: block;
			position: absolute;
			top: 55px;
			right: 15px;
			bottom: 45px;
			left: 15px;
			padding: 10px 0;
			overflow-y: auto;
			transition: 0.3s;
			border: 2px solid rgba(255, 255, 255, 0.2);

			li {
				padding: 12px 20px;

				& + li {
					margin: 0;
				}
			}
		}

		a,
		a:focus {
			font-size: 16px;
			position: relative;
		}
	}
</style>
