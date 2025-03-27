import type { FunctionComponent, SVGProps } from "react";

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.webp" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  export const ReactComponent: FunctionComponent<
    SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}
