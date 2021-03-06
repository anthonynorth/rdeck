/* eslint-disable @typescript-eslint/no-unused-vars */

declare module "deck.gl" {
  // @ts-ignore
  export * from "@danmarshall/deckgl-typings/deck.gl";
}

declare module "@deck.gl/core" {
  export { DeckProps, PickInfo, InitialViewStateProps } from "@deck.gl/core/lib/deck";
  import { LayerProps } from "@deck.gl/core/lib/layer";
  export { LayerProps };

  import { DeckProps } from "@deck.gl/core/lib/deck";
  type deckProps = "id" | "width" | "height" | "controller" | "viewState";

  export type MapViewProps = Partial<Pick<DeckProps, deckProps>> & {
    x?: string | number;
    y?: string | number;
    repeat?: boolean;
  };
  export interface MapView extends React.Component<MapViewProps> {}

  export interface Layer<D, P extends LayerProps<D>> {
    getAttributeManager(): AttributeManager | null;
  }

  export type AccessorFn<In, Out> = (object: In, info: ObjectInfo<In, Out>) => Out;
  export type ObjectInfo<In, Out> = {
    index: number;
    data: In;
    target: Out;
  };
  export interface AttributeManager {
    addInstanced(attributes: Record<string, AccessorParameters>): void;
  }

  export interface AccessorParameters {
    type: number;
    size: number;
    accessor?: AccessorFn<any, any>;
    update?: (attribute: any, numInstances: any) => void;
  }
}

declare module "@deck.gl/geo-layers" {
  export { TileLayerProps } from "@deck.gl/geo-layers/tile-layer/tile-layer";
}

declare module "@deck.gl/core/lib/layer" {
  export interface LayerProps<D> {
    name: string | null;
    tooltip: TooltipInfo | null;
  }
}

declare module "@deck.gl/react" {
  export { DeckGLProps } from "@deck.gl/react/deckgl";
}
