const value = `
const f = (a, b) => a + b;

const result = f(2, 5);
`;

const editor = monaco.editor.create(document.getElementById("container"), {
	value,
	language: "javascript",
});

monaco.languages.registerInlayHintsProvider("javascript", {
	provideInlayHints(model, range, token) {
		return [
			{
				kind: monaco.languages.InlayHintKind.Type,
				position: { column: 13, lineNumber: 4 },
				text: `: Number`,
			},
			{
				kind: monaco.languages.InlayHintKind.Type,
				position: { column: 13, lineNumber: 2 },
				text: `: Number`,
			},
			{
				kind: monaco.languages.InlayHintKind.Type,
				position: { column: 16, lineNumber: 2 },
				text: `: Number`,
				whitespaceBefore: true, // see difference between a and b parameter
			},
			{
				kind: monaco.languages.InlayHintKind.Parameter,
				position: { column: 18, lineNumber: 4 },
				text: `a:`,
			},
			{
				kind: monaco.languages.InlayHintKind.Parameter,
				position: { column: 21, lineNumber: 4 },
				text: `b:`,
				whitespaceAfter: true, // similar to whitespaceBefore
			},
		];
	},
});
