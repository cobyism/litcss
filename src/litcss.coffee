$ ->
  $litcssFiles = $('link[rel="stylesheet/litcss"]')
  $.ajax
    url: $litcssFiles.attr 'href'
    success: (data) ->
      parseLitCSS data

parseLitCSS = (input) ->
  # Parse CSS in code-fenced blocks
  r = /`{3}(?:(.*$)\n)?([\s\S]*)`{3}/m
  output = r.exec input
  $('head').append("<style type=\"text/css\">
    #{output[2]}
  </style>")
  console.log output[2]
  # Parse CSS indented with 4 spaces
  # r = /^([\s\S]*)?$/gm
  lines = input.match(/[^\r\n]+/g);
  lines.each ->
    line = this
  console.log lines
