var data = require('./swot-data.json');

var blacklist = {
    'si.edu': true,
    'america.edu': true
};

/**
 * Check an email for whether it is from an educational domain or not.
 *
 * @param {String} email
 * @return {(boolean|String)} false, if the email is not educational.
 * otherwise, a string describing the domain.
 */
function isAcademic(email) {
    if (typeof email !== 'string') return false;
    var parts = email.split('@'), domain = parts[parts.length - 1];
    console.log(data[domain], domain);
    return (blacklist[domain] === undefined && data[domain] !== undefined);
}

/**
 * Check an email for whether it is from an educational domain or not.
 *
 * @param {String} email
 * @return {(boolean|String)} false, if the email is not educational.
 * otherwise, a string describing the domain.
 */
function getInstitutionName(email) {
    if (typeof email !== 'string') return false;
    var parts = email.split('@'), domain = parts[parts.length - 1];
    return (blacklist[domain] === undefined && data[domain] !== undefined) ?
        domains[domain] : false;
}

module.exports.isAcademic = isAcademic;
module.exports.getInstitutionName = getInstitutionName;
