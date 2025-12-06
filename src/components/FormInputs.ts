export default `
{{#each inputs}}
    {{> InputLabel name=this.name id=this.id type=this.type label=this.label}}
{{/each}}
`;
