// svgをコンポーネントとして使おうとするとエラーが出る件対応
declare module "*.svg" {
  const content: any;
  export default content;
}

// png
declare module '*.png'