'use strict';

describe('Service: teamProvider', function () {

  // load the service's module
  beforeEach(module('thisgameweekApp'));

  // instantiate service
  var teamProvider;
  beforeEach(inject(function (_teamProvider_) {
    teamProvider = _teamProvider_;
  }));

  it('should do something', function () {
    expect(!!teamProvider).toBe(true);
  });

});
