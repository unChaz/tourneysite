(() => {
  'use strict';

  class HomeCtrl {
    constructor($window) {
      this.$window = $window;
    }

    $onInit() {
      console.log(this.twitchChannel)
      this.logoImage = '<%= asset_path "ting-logo.png" %>';
      this.verticalBanner = '<%= asset_path "vertical-banner.png" %>';
      let now = new Date();
      now.setHours(0,0,0,0);
      if (new Date(this.liveDate) > now) {
        this.live = false;
      } else {
        this.live = true;
      }

    }

    timesUp() {
      this.live = true;
    }
  }

  HomeCtrl.$inject = ['$window'];

  angular
    .module('TourneySite')
    .component('home', {
      templateUrl: '<%= asset_path "components/home/home.html" %>',
      controller: HomeCtrl,
      bindings: {
        liveDate: '<',
        twitchChannel: '<',
        twitterWidgetId: '<',
        twitterhashtag: '<'
      }
    });
})();
