import { useEffect, useMemo, useRef, useState, RefObject } from "react";
import type { InitialViewStateProps } from "@deck.gl/core";
import type { DeckGLProps } from "@deck.gl/react";
import { StaticMapProps, WebMercatorViewport } from "react-map-gl";

import { Layer, LayerProps } from "./layer";
import { Map } from "./map";
import { Legend } from "./legend";
import styles from "./app.css";

export type DeckProps = DeckGLProps &
  StaticMapProps & { initialBounds?: Bounds; blendingMode: BlendingMode };

export interface AppProps {
  props: DeckProps;
  layers: LayerProps[];
  theme: "kepler" | "light";
  lazyLoad: boolean;
  width: number;
  height: number;
}

export function App({
  props,
  layers,
  theme = "kepler",
  lazyLoad = false,
  width,
  height,
}: AppProps) {
  const { initialBounds, initialViewState, ...deckglProps } = props;

  // fit bounds
  const _initialViewState = useBounds(width, height, initialBounds, initialViewState);
  const _layers = layers.map(Layer.create);

  const container = useRef<HTMLDivElement>(null);
  const inViewport = useInViewport(container, lazyLoad);
  const shouldRender = !lazyLoad || inViewport;
  const className = [styles.rdeck, theme].join(" ");

  return (
    <div ref={container} className={className}>
      {shouldRender && (
        <Map props={{ ...deckglProps, initialViewState: _initialViewState }} layers={_layers} />
      )}
      <Legend layers={_layers.map((layer) => layer.renderLegend()).reverse()} />
      <div className={styles.controlContainer} style={{ top: 10, right: 10 }}>
        <Legend layers={_layers.map((layer) => layer.renderLegend()).reverse()} />
      </div>
    </div>
  );
}

function useBounds(
  width: number,
  height: number,
  initialBounds?: Bounds,
  initialViewState?: InitialViewStateProps
) {
  return useMemo(() => {
    if (!Array.isArray(initialBounds)) {
      return initialViewState;
    }

    const [xmin, ymin, xmax, ymax] = initialBounds;
    // constrain to web mercator limits
    // https://en.wikipedia.org/wiki/Web_Mercator_projection
    const bounds: [[number, number], [number, number]] = [
      [Math.max(-180, xmin), Math.max(ymin, -85.051129)],
      [Math.min(180, xmax), Math.min(ymax, 85.051129)],
    ];

    const viewport = new WebMercatorViewport({ width, height });
    const { longitude, latitude, zoom } = viewport.fitBounds(bounds);

    return { ...initialViewState, longitude, latitude, zoom };
  }, [initialBounds, initialViewState, width, height]);
}

function useInViewport(ref: RefObject<HTMLElement>, enabled: boolean) {
  const [state, setState] = useState(false);

  useEffect(() => {
    if (enabled && ref.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          setState(entries[0].isIntersecting);
        },
        { threshold: 0 }
      );

      observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, [enabled, ref]);

  return state;
}
