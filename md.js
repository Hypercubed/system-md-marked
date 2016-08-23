var marked = require('marked');

exports.translate = function(load) {
  var converterOptions = load.metadata.mdOptions;
  if (converterOptions) {
    marked.setOptions(converterOptions);
  }

  return 'module.exports = "' + marked(load.source)
    .replace(/(["\\])/g, '\\$1')
    .replace(/[\f]/g, "\\f")
    .replace(/[\b]/g, "\\b")
    .replace(/[\n]/g, "\\n")
    .replace(/[\t]/g, "\\t")
    .replace(/[\r]/g, "\\r")
    .replace(/[\u2028]/g, "\\u2028")
    .replace(/[\u2029]/g, "\\u2029")
  + '";';
}
