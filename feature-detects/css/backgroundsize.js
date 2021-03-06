/*!
{
  "name": "Background Size",
  "property": "backgroundsize",
  "aliases": [],
  "tags": ["css"],
  "knownBugs": ["This will false positive in Opera Mini -- http://github.com/Modernizr/Modernizr/issues/396"],
  "doc" : null,
  "authors": [],
  "references": [{
    "name": "Related Issue",
    "href": "http://github.com/Modernizr/Modernizr/issues/396"
  }]
}
!*/
define(['Modernizr', 'testAllProps'], function( Modernizr, testAllProps ) {
  Modernizr.addTest('backgroundsize', testAllProps('backgroundSize'));
});
