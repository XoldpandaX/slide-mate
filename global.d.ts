declare module '*.scss' {
  type IClassNames = Record<string, string>;

  const classNames: IClassNames;
  export = classNames;
}

declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGElement>>;
  export default content;
}
