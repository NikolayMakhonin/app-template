<script>
	export let value = void 0
	export let canShowLoading = true
</script>

{#if value == null}
	{#if canShowLoading}
		<slot name="loading">
			<div class="loading__placeholder ghost"></div>
			<div class="loading fill">
				<span class="loading__icon ghost icon-inline icon-loading">&nbsp;</span>
			</div>
		</slot>
	{/if}
{:else}
	<slot name="content" value="{value}">
		<slot></slot>
	</slot>
{/if}

<style-js>
	import templates from '../../../styles/helpers/templates';

	module.exports = [
		require('../../../styles/app'),
		{
			'.loading': {
				...templates.contentCenter,
				'&__icon': {
					'font-size': `350%`,
				},
				'&__placeholder': {
					'height': `10em`,
					'width': `10em`,
				},
			},
		},
	]
</style-js>