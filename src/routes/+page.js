export const load = (() => {
    return {
        snippets: [
            {
				title: "HTML",
				language: "html",
				code: `<p>This is a paragraph</p>`,
				favorite: false
			},
			{
				title: "CSS",
				language: "css",
				code: `main { background-color: black; }`,
				favorite: false
			},
            {
				title: "JavaScript",
				language: "css",
				code: `document.querySelector('section');`,
				favorite: false
			}
        ]
    }
});
