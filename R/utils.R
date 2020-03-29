get_arguments <- function() {
  calling_environment <- parent.frame()
  call <- match.call(
    sys.function(-1),
    sys.call(-1)
  )

  is_pipe <- function(x) is.name(x) && x == "."
  eval_pipe <- function(name) eval(as.name(name), calling_environment)

  arguments <- as.list(call)[-1]

  # arg is pipe ? eval : arg
  Map(function(arg, name) {
    if (is_pipe(arg)) eval_pipe(name) else arg
  }, arguments, names(arguments))
}

camel_case_names <- function(object) {
  names(object) <- snakecase::to_lower_camel_case(names(object))
  object
}

merge_list <- function(list, ...) {
  Reduce(
    function(x, y) utils::modifyList(x, y, keep.null = TRUE),
    list(...),
    list
  )
}