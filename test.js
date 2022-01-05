var pdf_table_extractor = require("./pdf-table-extractor");
var fs = require('fs');


var data = new Uint8Array(fs.readFileSync('./test.pdf'));
pdf_table_extractor(data).then(console.log);

