var parseLitCSS;

$(function() {
  var $litcssFiles;
  $litcssFiles = $('link[rel="stylesheet/litcss"]');
  return $.ajax({
    url: $litcssFiles.attr('href'),
    success: function(data) {
      return parseLitCSS(data);
    }
  });
});

parseLitCSS = function(input) {
  var lines, output, r;
  r = /`{3}(?:(.*$)\n)?([\s\S]*)`{3}/m;
  output = r.exec(input);
  $('head').append("<style type=\"text/css\">    " + output[2] + "  </style>");
  console.log(output[2]);
  lines = input.match(/[^\r\n]+/g);
  lines.each(function() {
    var line;
    return line = this;
  });
  return console.log(lines);
};
