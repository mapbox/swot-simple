var https = require('https'),
    ProgressBar = require('progress'),
    zipfile = require('zipfile'),
    fs = require('fs');

console.error('downloading swot data');
https.get('https://codeload.github.com/leereilly/swot/zip/master', function(res) {
    res.pipe(fs.createWriteStream('swot.zip'));
    res.on('end', function() {
        var zf = new zipfile.ZipFile('swot.zip');
        var bar = new ProgressBar(':bar :percent | :current/:total', {
            total: zf.names.length
        });
        var reduced = zf.names.filter(function(name) {
            return name.match(/swot-master\/lib\/domains\/.*.txt/);
        }).reduce(function(memo, name, i) {
            var reduced_name = name.replace(/^swot-master\/lib\/domains\//, '')
                .replace(/\.txt$/, '');
            var label = zf.readFileSync(name);
            var domain = reduced_name.split('/').reverse().join('.');
            memo[domain] = label.toString().trim();
            bar.tick(1);
            return memo;
        }, {});
        fs.writeFileSync('swot-data.json', JSON.stringify(reduced, null, 2));
    });
}).on('error', function(e) {
    console.error(e);
});
