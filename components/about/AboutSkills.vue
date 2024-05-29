<script setup lang="ts">
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
			<h2>{{ $t('pages.about.subtitle1') }}</h2>
		</div>

		<div ref="skillsContent" class="row skills__content">
			<div
				v-for="(skillList, skillInd) in SKILLS"
				:key="skillInd"
				:class="skillList.colClass"
			>
				<div
					v-for="skill in skillList.items"
					:key="skill.name"
					class="progress"
				>
					<span class="skill"
						>{{ skill.name }}
						<i class="val">{{ `${skill.valuenow}%` }}</i></span
					>
					<div class="progress__bar-wrap">
						<div
							class="progress__bar"
							role="progressbar"
							:aria-valuenow="skill.valuenow"
							aria-valuemin="0"
							aria-valuemax="100"
						></div>
					</div>
				</div>
			</div>
		</div>

		<p v-if="OTHERS?.length">
			<span>{{ $t('pages.about.otherSkills') }}: </span>
			<span>{{ OTHERS.join(', ') }}</span>
		</p>
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
