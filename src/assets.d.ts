declare module "*.pdf" {
  const src: string;
  export default src;
}

declare module "*.css" {
  const content: { [className: string]: string } | string;
  export default content;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.jpg.jpeg" {
  const src: string;
  export default src;
}
