<script setup lang="ts">
	import { useI18n } from 'vue-i18n'

	const { t: $t } = useI18n()

	const resumes: any = JSON.parse($t('resume'))
</script>

<template>
	<section id="resume" class="section resume">
		<div class="container">
			<div class="section__subtitle">
				<h2>{{ $t('pages.resume.title') }}</h2>
				<p>{{ $t('pages.resume.subtitle') }}</p>
			</div>

			<div class="row">
				<div
					v-for="(resume, resumeInd) in resumes"
					:key="resumeInd"
					:class="resume.class"
				>
					<template v-for="(block, blockInd) in resume.blocks" :key="blockInd">
						<h3 class="resume__title" v-html="block.title"></h3>
						<div
							v-for="(subblock, subBlockInd) in block.subblocks"
							:key="subBlockInd"
							class="resume__item"
							:class="subblock.class"
						>
							<h4 v-html="subblock.title"></h4>
							<h5 v-if="subblock.year" v-html="subblock.year"></h5>
							<p v-if="subblock.italtext">
								<em>{{ subblock.italtext }}</em>
							</p>
							<p v-if="subblock.text">{{ subblock.text }}</p>
							<ul v-if="subblock.list?.length">
								<li v-for="(item, itemInd) in subblock.list" :key="itemInd">
									{{ item }}
								</li>
							</ul>
						</div>
					</template>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.resume {
		&__title {
			font-size: 26px;
			font-weight: 700;
			margin-top: 20px;
			margin-bottom: 20px;
			color: #fff;
		}

		&__item {
			padding: 0 0 20px 20px;
			margin-top: -2px;
			border-left: 2px solid rgba(255, 255, 255, 0.2);
			position: relative;

			&:last-child {
				padding-bottom: 0;
			}

			&::before {
				content: '';
				position: absolute;
				width: 16px;
				height: 16px;
				border-radius: 50px;
				left: -9px;
				top: 0;
				background: #18d26e;
				border: 2px solid #18d26e;
			}

			h4 {
				line-height: 18px;
				font-size: 18px;
				font-weight: 600;
				text-transform: uppercase;
				font-family: 'Poppins', sans-serif;
				color: #18d26e;
				margin-bottom: 10px;
			}

			h5 {
				font-size: 16px;
				background: rgba(255, 255, 255, 0.15);
				padding: 5px 15px;
				display: inline-block;
				font-weight: 600;
				margin-bottom: 10px;
			}

			ul {
				padding-left: 20px;

				li {
					padding-bottom: 10px;
				}
			}
		}
	}
</style>
