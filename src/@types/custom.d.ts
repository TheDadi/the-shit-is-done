declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.scss" {
  const content: any;
  export default content;
}

declare namespace NodeJS {
  interface Process {
    browser: boolean;
  }
}