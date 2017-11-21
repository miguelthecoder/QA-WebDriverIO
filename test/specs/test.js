var assert = require('assert');

describe('frontier page', function() {
        it('should detect if an element is visible', function () {
            browser.url('https://internet.frontier.com/');
            var isVisible = browser.isVisible('img');
            console.log(isVisible); // outputs: true
        });
        // closing it
  });
// closing describe
