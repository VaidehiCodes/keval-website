declare module "*.pdf" {
  const src: string;
  export default src;
}

declare module "*.css" {
  const content: { [className: string]: string } | string;
  export default content;
}
