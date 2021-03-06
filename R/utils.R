#' MVT URL
#'
#' Make a mapbox vector tile url template
#' @name mvt_url
#' @param tileset_id A mapbox tileset identifier of the form:
#'
#' - `mapbox.mapbox-streets-v8`, or
#' - `mapbox://mapbox.mapbox-streets-v8`
#'
#' @seealso mvt_layer
#' @export
mvt_url <- function(tileset_id) {
  mvt_endpoint <- "https://api.mapbox.com/v4"
  xyz_template <- "{z}/{x}/{y}.vector.pbf"
  id <- sub("mapbox://", "", tileset_id)

  url <- file.path(mvt_endpoint, id, xyz_template, fsep = "/") %>%
    urltools::param_set("access_token", mapbox_access_token())
}

discard_null <- function(obj) {
  obj_filtered <- obj[!vapply(obj, is.null, logical(1))]
  mostattributes(obj_filtered) <- c(attributes(obj), names = names(obj_filtered))

  obj_filtered
}

pick <- function(obj, names) {
  obj_filtered <- obj[base::names(obj) %in% names]
  class(obj_filtered) <- class(obj)

  obj_filtered
}

omit <- function(obj, names) {
  obj_filtered <- obj[!base::names(obj) %in% names]
  class(obj_filtered) <- class(obj)

  obj_filtered
}

paste_line <- function(...) {
  paste(c(...), collapse = "\n")
}
