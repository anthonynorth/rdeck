const deck = require("deck.gl");

/* exclude props from function signatures */
const excludeProps = [
  /* layer */
  "coordinateOrigin",
  "coordinateSystem",
  "dataComparator",
  "dataTransform",
  "extensions",
  "fetch",
  "getPolygonOffset",
  "highlightedObjectIndex",
  "modelMatrix",
  "parameters",
  "uniforms",
  "updateTriggers",
  "wrapLongitude",
  /* composite layer */
  "renderSubLayers",
  /* text layer */
  "characterSet",
  /* aggregation functions */
  "gridAggregator",
  "hexagonAggregator"
];

function getProps(Layer) {
  // initialise _propTypes
  new Layer();

  // extruded = false
  if ("extruded" in Layer._propTypes) {
    Layer._propTypes.extruded.value = false;
  }

  // remove polygon from geo-layers
  if (/^S2|H3/.test(Layer.layerName)) {
    // we don't need this
    delete Layer._propTypes.getPolygon;
  }

  // default text layer font
  if (Layer === deck.TextLayer) {
    Layer._propTypes.fontFamily.value = "Roboto, Helvetica, Arial, san-serif";
  }

  // mvt layer should inherit geojson
  if (Layer === deck.MVTLayer) {
    new deck.GeoJsonLayer({});

    // include geojson props
    Layer._propTypes = {
      // @ts-ignore
      ...deck.GeoJsonLayer._propTypes,
      ...Layer._propTypes,
    };
  }

  return Object.values(Layer._propTypes)
    .filter((propType) => !excludeProps.includes(propType.name))
    .filter((propType) => !/^(_|on)/.test(propType.name))
    .map((propType) => ({
      ...propType,
      type: /get(Color|Elevation)Value/.test(propType.name) ? "unknown" : propType.type,
      value: getValue(propType),
      valueType: getValueType(propType),
      scalable: getScalable(propType),
      optional: getOptional(propType),
    }));
}

function getValue({ value }) {
  if (typeof value !== "function") {
    return value;
  }

  try {
    // is accessor a function returning a constant?
    return value();
  } catch {
    return value;
  }
}

function getValueType(propType) {
  const value = getValue(propType);
  if (value == null) {
    return null;
  }

  return Array.isArray(value) ? "array" : typeof value;
}

function getScalable({ type, name }) {
  return type === "accessor" && /(radius|elevation|color|weight|width|height|size)$/i.test(name);
}

function getOptional({ optional, value, type }) {
  return (
    optional ||
    value === null ||
    type === "function" ||
    (Array.isArray(value) && value.length === 0)
  );
}

module.exports = { getProps };
