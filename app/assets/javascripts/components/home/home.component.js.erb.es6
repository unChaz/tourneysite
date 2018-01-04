(() => {
  'use strict';

  class HomeCtrl {
    constructor($window) {
      this.$window = $window;
    }

    $onInit() {
      this.showChat = false;
      this.logoImage = '<%= asset_path "ting-logo.png" %>';
      this.sponsorLink = 'https://ting.com/?lpn=rocketleague';
      this.sponsorImage = '<%= asset_path "ting-banner-3.png" %>';
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

    toggleChat() {
      this.showChat = !this.showChat;
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
        startTimeString: '<'
      }
    });
})();
