export default `
{{#each inputs}}
    {{> Input name=this.name id=this.id type=this.type label=this.label}}
{{/each}}
`;
