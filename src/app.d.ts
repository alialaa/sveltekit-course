// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	interface Locals {
		user?: {
			id: number;
			name: string;
		};
	}
	// interface PageData {
	// 	products?: { id: number }[];
	// }
	// interface Platform {}
}
