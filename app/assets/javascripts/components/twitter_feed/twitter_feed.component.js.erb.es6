(() => {
  'use strict';

  class TwitterFeedController {
    constructor() {

    }

    $onInit() {

    }
  }

  TwitterFeedController.$inject = [];

  angular
    .module('TourneySite')
    .component('twitterFeed', {
      templateUrl: '<%= asset_path "components/twitter_feed/twitter_feed.html" %>',
      controller: TwitterFeedController,
      bindings: {
        hashtag: '<',
        widgetId: '<'
      }
    });
})();
