import { resolve } from 'path'

export default {
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				reservation: resolve(__dirname, 'reservation/index.html')
			}
		}
	}
}