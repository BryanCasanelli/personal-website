
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const theme: CustomThemeConfig = {
    name: 'theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "255 255 255",
		"--on-success": "255 255 255",
		"--on-warning": "255 255 255",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #9349d0 
		"--color-primary-50": "239 228 248", // #efe4f8
		"--color-primary-100": "233 219 246", // #e9dbf6
		"--color-primary-200": "228 210 243", // #e4d2f3
		"--color-primary-300": "212 182 236", // #d4b6ec
		"--color-primary-400": "179 128 222", // #b380de
		"--color-primary-500": "147 73 208", // #9349d0
		"--color-primary-600": "132 66 187", // #8442bb
		"--color-primary-700": "110 55 156", // #6e379c
		"--color-primary-800": "88 44 125", // #582c7d
		"--color-primary-900": "72 36 102", // #482466
		// secondary | #4878c7 
		"--color-secondary-50": "228 235 247", // #e4ebf7
		"--color-secondary-100": "218 228 244", // #dae4f4
		"--color-secondary-200": "209 221 241", // #d1ddf1
		"--color-secondary-300": "182 201 233", // #b6c9e9
		"--color-secondary-400": "127 161 216", // #7fa1d8
		"--color-secondary-500": "72 120 199", // #4878c7
		"--color-secondary-600": "65 108 179", // #416cb3
		"--color-secondary-700": "54 90 149", // #365a95
		"--color-secondary-800": "43 72 119", // #2b4877
		"--color-secondary-900": "35 59 98", // #233b62
		// tertiary | #3999ac 
		"--color-tertiary-50": "225 240 243", // #e1f0f3
		"--color-tertiary-100": "215 235 238", // #d7ebee
		"--color-tertiary-200": "206 230 234", // #cee6ea
		"--color-tertiary-300": "176 214 222", // #b0d6de
		"--color-tertiary-400": "116 184 197", // #74b8c5
		"--color-tertiary-500": "57 153 172", // #3999ac
		"--color-tertiary-600": "51 138 155", // #338a9b
		"--color-tertiary-700": "43 115 129", // #2b7381
		"--color-tertiary-800": "34 92 103", // #225c67
		"--color-tertiary-900": "28 75 84", // #1c4b54
		// success | #459e33 
		"--color-success-50": "227 240 224", // #e3f0e0
		"--color-success-100": "218 236 214", // #daecd6
		"--color-success-200": "209 231 204", // #d1e7cc
		"--color-success-300": "181 216 173", // #b5d8ad
		"--color-success-400": "125 187 112", // #7dbb70
		"--color-success-500": "69 158 51", // #459e33
		"--color-success-600": "62 142 46", // #3e8e2e
		"--color-success-700": "52 119 38", // #347726
		"--color-success-800": "41 95 31", // #295f1f
		"--color-success-900": "34 77 25", // #224d19
		// warning | #a79435 
		"--color-warning-50": "242 239 225", // #f2efe1
		"--color-warning-100": "237 234 215", // #edead7
		"--color-warning-200": "233 228 205", // #e9e4cd
		"--color-warning-300": "220 212 174", // #dcd4ae
		"--color-warning-400": "193 180 114", // #c1b472
		"--color-warning-500": "167 148 53", // #a79435
		"--color-warning-600": "150 133 48", // #968530
		"--color-warning-700": "125 111 40", // #7d6f28
		"--color-warning-800": "100 89 32", // #645920
		"--color-warning-900": "82 73 26", // #52491a
		// error | #a43737 
		"--color-error-50": "241 225 225", // #f1e1e1
		"--color-error-100": "237 215 215", // #edd7d7
		"--color-error-200": "232 205 205", // #e8cdcd
		"--color-error-300": "219 175 175", // #dbafaf
		"--color-error-400": "191 115 115", // #bf7373
		"--color-error-500": "164 55 55", // #a43737
		"--color-error-600": "148 50 50", // #943232
		"--color-error-700": "123 41 41", // #7b2929
		"--color-error-800": "98 33 33", // #622121
		"--color-error-900": "80 27 27", // #501b1b
		// surface | #303030 
		"--color-surface-50": "224 224 224", // #e0e0e0
		"--color-surface-100": "214 214 214", // #d6d6d6
		"--color-surface-200": "203 203 203", // #cbcbcb
		"--color-surface-300": "172 172 172", // #acacac
		"--color-surface-400": "110 110 110", // #6e6e6e
		"--color-surface-500": "48 48 48", // #303030
		"--color-surface-600": "43 43 43", // #2b2b2b
		"--color-surface-700": "36 36 36", // #242424
		"--color-surface-800": "29 29 29", // #1d1d1d
		"--color-surface-900": "24 24 24", // #181818
		
	}
}