import cleanObject from '@/lib/cleanObject'

const accessToken = import.meta.env.VITE_MAPBOX_TOKEN

class MapboxStaticImageAPI {
  static getImageURL(options: ImageOptions) {
    const o = options

    let mapViewString

    if (o.type === ImageOptionType.Auto) {
      mapViewString = 'auto'
    } else if (o.type === ImageOptionType.BoundryBox) {
      mapViewString = `[${o.lon.min},${o.lat.min},${o.lon.max},${o.lat.max}]`
    } else if (o.type === ImageOptionType.Manual) {
      const overlay = o.overlay ? `${o.overlay}/` : ''
      mapViewString =
        overlay + `${o.lon},${o.lat},${o.zoom},${o.bearing},${o.pitch}`
    }

    const queryParams: string =
      '?' +
      new URLSearchParams(
        cleanObject({
          access_token: accessToken,
          attribution: o.attribution,
          logo: o.logo,
          before_layer: o.before_layer,
          addlayer: JSON.stringify(o.addlayer),
          setfilter: JSON.stringify(o.setfilter),
          layer_id: o.layer_id,
          padding: o.padding
        })
      )

    const twoX = o['@2x'] ? '@2x' : ''

    const url =
      `https://api.mapbox.com/styles/v1/${o.username}/${o.styleId}/static/${mapViewString}/${o.width}x${o.height}` +
      twoX +
      queryParams

    return url
  }

  static async getImage(options: ImageOptions) {
    const url = this.getImageURL(options)

    const res = await fetch(url)
    const blob = await res.blob()
    return URL.createObjectURL(blob)
  }
}

enum ImageOptionType {
  Auto,
  BoundryBox,
  Manual
}

/**
 * Options for requesting a static image from Mapbox
 *
 * @see https://docs.mapbox.com/api/maps/static-images/
 */
interface MapboxImageOptions {
  type: ImageOptionType

  /** The username of the account to which the style belongs. */
  username: string

  /** The ID of the style from which to create a static map. */
  styleId: string

  /** Width of the image; a number between `1` and `1280` pixels. */
  width: number

  /** Height of the image; a number between `1` and `1280` pixels. */
  height: number

  /** Render the static map at a `@2x` scale factor for high-density displays. */
  '@2x'?: boolean

  /**
   * Controls whether there is attribution on the image. Defaults to `true`.
   * Note: If `attribution=false`, the watermarked attribution is removed from
   * the image. You still have a legal responsibility to attribute maps that use
   * OpenStreetMap data, which includes most maps from Mapbox. If you specify
   * `attribution=false`, you are legally required to include [proper
   * attribution elsewhere on the webpage or
   * document](https://docs.mapbox.com/help/getting-started/attribution/#static--print).
   */
  attribution?: boolean

  /** Controls whether there is a Mapbox logo on the image. Defaults to `true`. */
  logo?: boolean

  /**
   * Controls where the `overlay` is inserted in the style. All overlays will be
   * inserted before the specified layer.
   */
  before_layer?: string

  /**
   * Adds a [Mapbox style
   * layer](https://docs.mapbox.com/mapbox-gl-js/style-spec/#layers) to the
   * map's style at render time. Can be combined with `before_layer`. See [Style
   * Parameters](https://docs.mapbox.com/api/maps/static-images/#style-parameters)
   * for more information.
   */
  addlayer?: object

  /**
   * Applies a filter to an existing layer in a style using Mapbox's
   * [expression](https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions)
   * syntax. Must be used with `layer_id`. See [Style
   * Parameters](https://docs.mapbox.com/api/maps/static-images/#style-parameters)
   * for more information.
   */
  setfilter?: any[]

  /**
   * Denotes the layer in the style that the filter specified in `setfilter` is
   * applied to.
   */
  layer_id?: string

  /**
   * Denotes the minimum padding per side of the image. This can only be used
   * with `auto` or `bbox`. The value resembles the [CSS
   * specification](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)
   * for padding and accepts 1-4 integers without units. For example,
   * `padding=5` declares a minimum padding of 5 pixels for all sides, whereas
   * `padding=5,8,10,7` declares a minimum of 5 pixels of top padding, 8 pixels
   * of right padding, 10 pixels of bottom padding, and 7 pixels of left
   * padding. If `auto` is used but no value is specified in padding, the
   * default `padding` will be used (a value that is 5% of the smallest side of
   * the image, rounded up to the next integer value, up to a maximum of 12
   * pixels of padding per side).
   */
  padding?: string
}

type AutoImageOptions = MapboxImageOptions & {
  type: ImageOptionType.Auto
}

/**
 * Four coordinates representing upper longitude, upper latitude, lower
 * longitidue, lower latitude, enclosed in square brackets like
 * `[lon(min),lat(min),lon(max),lat(max)]`. `bbox` is used in place of
 * `lon,lat,zoom` or `auto`. The zoom level is calculated based on the most
 * detailed zoom level that fits the bounding box within the request's specified
 * width and height. Increasing the request's width and height will return a map
 * at a higher zoom level. See the
 * [`bbox`](https://docs.mapbox.com/api/maps/static-images/#example-request-retrieve-a-static-map-using-a-bounding-box)
 * [example
 * request](https://docs.mapbox.com/api/maps/static-images/#example-request-retrieve-a-static-map-using-a-bounding-box)
 * for how to retrieve a static map using a bounding box.
 */
type BoundryBoxImageOptions = MapboxImageOptions & {
  type: ImageOptionType.BoundryBox

  lon: {
    min: number
    max: number
  }

  lat: {
    min: number
    max: number
  }
}

type ManualImageOptions = MapboxImageOptions & {
  type: ImageOptionType.Manual

  /**
   * One or more comma-separated features that can be applied on top of the map
   * at request time. The order of features in an overlay dictates their Z-order
   * on the page. The last item in the list will have the highest Z-order (will
   * overlap the other features in the list), and the first item in the list
   * will have the lowest (will underlap the other features). Format can be a
   * Mix of geojson, marker, or path. For more details on each option, see
   * [Overlay options
   * section](https://docs.mapbox.com/api/maps/static-images/#overlay-options)
   */
  overlay?: string

  /** Longitude for the center point of the static map; a number between `-180` and `180`. */
  lon: number

  /**
   * Latitude for the center point of the static map; a number between
   * `-85.0511` and `85.0511`.
   */
  lat: number

  /**
   * Zoom level; a number between `0` and `22`. Fractional zoom levels will be
   * rounded to two decimal places.
   */
  zoom: number

  /**
   * Bearing rotates the map around its center. A number between `0` and `360`,
   * interpreted as decimal degrees. 90 rotates the map 90° clockwise, while 180
   * flips the map. Defaults to `0`.
   */
  bearing?: number

  /**
   * Pitch tilts the map, producing a perspective effect. A number between `0`
   * and `60`, measured in degrees. Defaults to `0` (looking straight down at the map).
   */
  pitch?: number
}

type ImageOptions =
  | AutoImageOptions
  | BoundryBoxImageOptions
  | ManualImageOptions

function defaulMap(
  username: string = 'mapbox',
  styleId: string = 'streets-v11'
): ManualImageOptions {
  return {
    type: ImageOptionType.Manual,
    username,
    styleId,
    lon: -125.247498,
    lat: 50.024445,
    zoom: 11,
    bearing: 0,
    pitch: 0,
    width: 600,
    height: 300,
    '@2x': true,
    logo: false,
    attribution: false
  }
}

export default MapboxStaticImageAPI

export { defaulMap }
