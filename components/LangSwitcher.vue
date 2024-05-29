<script setup lang="ts">
	import { useI18n } from 'vue-i18n'

	const { locale: curLocale, availableLocales } = useI18n()

	const isActive = ref(false)
	const langSwitcher = ref<HTMLDivElement | null>(null)

	onMounted(() => {
		document.addEventListener('click', outSideClick)
	})

	onBeforeUnmount(() => {
		document.removeEventListener('click', outSideClick)
	})

	function selectLang(lang: string) {
		isActive.value = false
		curLocale.value = lang
	}

	function outSideClick(e: Event) {
		// @ts-ignore
		if (e.target?.closest('.lang-switcher') !== langSwitcher.value) {
			isActive.value = false
		}
	}
</script>

<template>
	<div ref="langSwitcher" class="lang-switcher" :class="{ active: isActive }">
		<button class="lang-switcher__btn" @click="isActive = true">
			{{ $t(`langs.${curLocale}`) }}
		</button>
		<div class="lang-switcher__options">
			<button
				v-for="locale in availableLocales"
				:key="locale"
				class="lang-switcher__option"
				:class="{ active: locale === curLocale }"
				@click="selectLang(locale)"
			>
				{{ $t(`langs.${locale}`) }}
			</button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@use '@/assets/styles/_mixins' as mixin;

	.lang-switcher {
		display: inline-block;
		position: relative;
		z-index: 5;

		&__btn {
			background: transparent;
			border: 1px solid #fff;
			padding: 5px 24px;
			color: #fff;

			@include mixin.tablet {
				padding: 2px 12px;
			}
		}

		&__options {
			position: absolute;
			top: 100%;
			right: 0;
			border: 1px solid #fff;
			background: #000;
			display: none;
		}

		&.active &__options {
			display: block;
		}

		&__option {
			width: 100%;
			box-sizing: border-box;
			border: none;
			background: transparent;
			padding: 0;
			padding: 3px 5px;
			color: #fff;
			transition: 0.3s linear;

			&:hover,
			&.active {
				color: #000;
				background: #fff;
			}
		}
	}
</style>
