var request = require('request'),
    ProgressBar = require('progress'),
    zipfile = require('zipfile'),
    fs = require('fs');

try { fs.unlinkSync('swot.zip'); } catch(e) { }
console.error('downloading swot data');
var req = request('https://codeload.github.com/leereilly/swot/zip/master');
req.pipe(fs.createWriteStream('swot.zip'));
req.on('end', downloaded);

function downloaded() {
    console.log('download complete');
    console.log('unzipping & mushing');
    var zf = new zipfile.ZipFile('swot.zip');
    var bar = new ProgressBar(':bar :percent | :current/:total', {
        total: zf.names.length
    });
    var reduced = zf.names.filter(function(name) {
        return name.match(/swot-master\/lib\/domains\/.*.txt/);
    }).reduce(function(memo, name) {
        var reduced_name = name.replace(/^swot-master\/lib\/domains\//, '')
            .replace(/\.txt$/, '');
        var label = zf.readFileSync(name);
        var domain = reduced_name.split('/').reverse().join('.');
        memo[domain] = label.toString().trim();
        bar.tick(1);
        return memo;
    }, {});
    fs.writeFileSync('swot-data.json', JSON.stringify(reduced, null, 2));
    distill();
}

function distill() {
    var data = require('./swot-data.json');
    fs.writeFileSync('swot-data-bool.json', JSON.stringify(Object.keys(data)));
}
