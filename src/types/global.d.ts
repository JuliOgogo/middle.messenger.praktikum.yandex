declare module '*.hbs' {
    const content: string;
    export default content;
}

declare module '*.hbs?raw' {
    const content: string;
    export default content;
}

declare module '*.pcss' {
    const content: any;
    export default content;
}
