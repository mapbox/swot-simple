var test = require('tape'),
    swot = require('./');

test('swot', function(t) {
    function testAcademic(name, value) {
        t.equal(swot.isAcademic(name), value, name);
    }
    t.equal(testAcademic('lreilly@stanford.edu',          true));
    t.equal(testAcademic('LREILLY@STANFORD.EDU',          true));
    t.equal(testAcademic('Lreilly@Stanford.Edu',          true));
    t.equal(testAcademic('lreilly@slac.stanford.edu',     true));
    t.equal(testAcademic('lreilly@strath.ac.uk',          true));
    t.equal(testAcademic('lreilly@soft-eng.strath.ac.uk', true));
    t.equal(testAcademic('lee@ugr.es',                    true));
    t.equal(testAcademic('lee@uottawa.ca',                true));
    t.equal(testAcademic('lee@mother.edu.ru',             true));
    t.equal(testAcademic('lee@ucy.ac.cy',                 true));
    t.equal(testAcademic('lee@leerilly.net',              false));
    t.equal(testAcademic('lee@gmail.com',                 false));
    t.equal(testAcademic('lee@stanford.edu.com',          false));
    t.equal(testAcademic('lee@strath.ac.uk.com',          false));
    t.equal(testAcademic('stanford.edu',                  true));
    t.equal(testAcademic('slac.stanford.edu',             true));
    t.equal(testAcademic('www.stanford.edu',              true));
    t.equal(testAcademic('http://www.stanford.edu',       true));
    t.equal(testAcademic('http://www.stanford.edu:9393',  true));
    t.equal(testAcademic('strath.ac.uk',                  true));
    t.equal(testAcademic('soft-eng.strath.ac.uk',         true));
    t.equal(testAcademic('ugr.es',                        true));
    t.equal(testAcademic('uottawa.ca',                    true));
    t.equal(testAcademic('mother.edu.ru',                 true));
    t.equal(testAcademic('ucy.ac.cy',                     true));
    t.equal(testAcademic('leerilly.net',                  false));
    t.equal(testAcademic('gmail.com',                     false));
    t.equal(testAcademic('stanford.edu.com',              false));
    t.equal(testAcademic('strath.ac.uk.com',              false));
    t.equal(testAcademic(null,                            false));
    t.equal(testAcademic('',                              false));
    t.equal(testAcademic('the',                           false));
    t.equal(testAcademic(' stanford.edu',                 true));
    t.equal(testAcademic('lee@strath.ac.uk ',             true));
    t.equal(testAcademic(' gmail.com ',                   false));
    t.equal(testAcademic('lee@stud.uni-corvinus.hu',      true));
    t.equal(testAcademic('lee@harvard.edu',               true));
    t.equal(testAcademic('lee@mail.harvard.edu',          true));
    t.end();
});
