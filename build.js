var ProgressBar = require('progress'),
    glob = require('glob'),
    fs = require('fs');

var names = glob
    .sync('./swot-build/swot-master/lib/domains/**/*.txt');

console.log('%s to run', names.length);

var bar = new ProgressBar(':bar :percent | :current/:total', {
    total: names.length
});

var reduced = names.reduce(function(memo, name) {
    var reduced_name = name
        .replace('./swot-build/swot-master/lib/domains/', '')
        .replace(/\.txt$/, '');
    var label = fs.readFileSync(name);
    var domain = reduced_name.split('/').reverse().join('.');
    memo[domain] = label.toString().trim();
    bar.tick(1);
    return memo;
}, {});

fs.writeFileSync('swot-data.json', JSON.stringify(reduced, null, 2));
fs.writeFileSync('swot-data-bool.json', JSON.stringify(Object.keys(reduced)));
