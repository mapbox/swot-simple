var data = require('./swot-data.json'),
    tldjs = require('tldjs');

var tlds = require('./tlds.json').reduce(function(memo, _) {
    memo[_] = true;
    return memo;
}, {});

var blacklist = {
    'si.edu': true,
    'america.edu': true
};

/**
 * Check an email for whether it is from an educational domain or not.
 *
 * @param {String} email a full email address
 * @returns {boolean} whether the email is educational
 * @example
 * swot.isAcademic('me@gmail.com'); // false
 * swot.isAcademic('lee@harvard.edu'); // true
 */
function isAcademic(email) {
    if (typeof email !== 'string') return false;

    var domain = email.trim().toLowerCase().substring(email.indexOf("@") + 1)
    var parts = domain.split('.')
    var numberOfSub = parts.length - 2 
    while (numberOfSub >= 0) {
        var domain = parts.slice(Math.max(parts.length - (numberOfSub + 2), 0)).join('.')
        if(!!(domain &&
        blacklist[domain] === undefined &&
        (data[domain] !== undefined ||
         tlds[tldjs.getPublicSuffix(domain)]))) {
            return true
        }
        numberOfSub--
    }
    return false
}

/**
 * Check an email for whether it is from an educational domain or not,
 * and if it is a known educational institution, return its name.
 *
 * @param {String} email a full email address
 * @returns {(boolean|String)} false, if the email is not educational.
 * otherwise, a string describing the domain.
 * @example
 * swot.getInstitutionName('lreilly@cs.strath.ac.uk');
 * // "University of Strathclyde"
 */
function getInstitutionName(email) {
    if (typeof email !== 'string') return false;

    var parts = email.split('@'),
        domain = tldjs.getDomain(parts[parts.length - 1]);

    return data[domain];
}

module.exports.isAcademic = isAcademic;
module.exports.getInstitutionName = getInstitutionName;
