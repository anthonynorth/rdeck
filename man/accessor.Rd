% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/doc-proptypes.R
\name{accessor}
\alias{accessor}
\title{Prop Type: Accessor}
\description{
Accessors map \code{data} columns to visual representations, primarily colours: \code{fill}, \code{line},
\code{highlight} and sizes: \code{radius}, \code{elevation}, \code{width}, \code{height}.

Accessors support \href{https://dplyr.tidyverse.org/articles/programming.html}{tidy-eval} expressions.
String literals referencing a column aren't supported (this will be interpreted as a literal
string), however you may pass a bare name (\code{my_col}) or an unquoted variable (\code{!!my_var} or
\code{{{my_var}}}).

On the client, an accessor is translated to a javascript function that retrieves a value from
\code{data} for each object rendered. Constant columns will work fine, but aren't recommended as
they are less performant on render and bloat file size; prefer a constant value for these
cases.

See \href{https://deck.gl/docs/developer-guide/using-layers#accessors}{accessors} for details.
}
\section{Accessors & Scales}{
Accessors may be used everywhere that scales can and can perform \emph{almost} the same function
(i.e. mapping data to a vector of numbers or \link[=color]{colours}), but there are downsides:
\itemize{
\item larger file size
\item no legend support
}

Prefer scales over accessors where both are supported, and use accessors where scales aren't
supported (e.g. \code{get_path}) or where scaling functions aren't appropriate.
}

\keyword{internal}
