export const load = () => {
	return {
		snippets: [
			{
				title: 'Appity HTML',
				language: 'html',
				code: `<p>This is a paragraph</p>`,
				favorite: false
			},
			{
				title: 'Appity CSS',
				language: 'css',
				code: `main { background-color: black; }`,
				favorite: false
			},
			{
				title: 'Appity JavaScript',
				language: 'javascript',
				code: `console.log('Chello Woyld!')`,
				favorite: false
			}
		]
	};
};
