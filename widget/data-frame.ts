import { Position } from "geojson";

type GeometryInfo = {
  name: string;
  type: GeometryType;
}

export function isDataFrame(data: LayerData): data is DataFrame {
  return data !== null && typeof data === "object" && "frame" in data;
}

export function flattenGeometries(data: DataFrame): DataFrame {
  const multiGeometries = getMultiGeometry(data);
  if (multiGeometries.length === 0) {
    return data;
  }

  return multiGeometries.reduce(flatten, data);
}

function flatten(data: DataFrame, { name, type }: GeometryInfo): DataFrame {
  const oldFrame = data.frame;
  const newFrame = Object.fromEntries(Object.entries(oldFrame).map(([key]) => [key, [] as any[]]));

  // keys of non-geometry cols
  const keys = Object.keys(data.frame).filter((key) => key !== name);
  // geometry column
  const geometries = oldFrame[name];
  const isMultiGeometry = isMultiGeometryFn(type);
  const copyValue = (key: string, index: number) => newFrame[key].push(oldFrame[key][index]);

  for (let index = 0; index < data.length; index++) {
    const geometry = geometries[index];
    if (isMultiGeometry(geometry)) {
      // split the multi-geometry
      newFrame[name].push(...geometry);
      // repeat other columns for each geometry in multi-geometry
      for (let rep = 0; rep < geometry.length; rep++) {
        for (const key of keys) {
          copyValue(key, index);
        }
      }
    } else {
      copyValue(name, index);
      for (const key of keys) {
        copyValue(key, index);
      }
    }
  }

  return {
    geometry: {
      ...data.geometry,
      [name]: type.replace("MULTI", "") as GeometryType
    },
    length: newFrame[name].length,
    frame: newFrame,
  };
}

function isMultiGeometryFn(type: GeometryType) {
  switch (type) {
    case "MULTIPOINT":
      return isMultiPoint;
    case "MULTILINESTRING":
      return isMultiLineString;
    case "MULTIPOLYGON":
      return isMultiPolygon;
    default:
      throw TypeError(`${type} not supported`);
  }
}

function isMultiPoint(geometry: Position | Position[]): geometry is Position[] {
  return Array.isArray(geometry[0]);
}

function isMultiLineString(geometry: Position[] | Position[][]): geometry is Position[][] {
  return Array.isArray(geometry[0][0]);
}

function isMultiPolygon(geometry: Position[][] | Position[][][]): geometry is Position[][][] {
  return Array.isArray(geometry[0][0][0]);
}

function getMultiGeometry(data: DataFrame): GeometryInfo[] {
  return Object.entries(data.geometry)
    .filter(([, type]) => /MULTI/.test(type))
    .map(([name, type]) => ({ name, type }));
}
