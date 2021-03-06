/* tslint:disable:quotemark no-duplicate-string */
import templates from '../../helpers/templates'
import constants from '../../helpers/constants'

const sourceSansPro = templates.fontFamily({
	family             : 'Source Sans Pro',
	size               : 1.035,
	lineHeightNormalize: 0.942,
})

export default {
	...constants.fonts,
	sourceSansPro,
}
