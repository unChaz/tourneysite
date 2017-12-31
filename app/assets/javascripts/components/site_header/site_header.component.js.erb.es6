(() => {
  'use strict';

  class HeaderController {
    constructor() {

    }

    $onInit() {
      this.sponsorLink = 'https://rocketleague.ting.com';
      this.sponsorImage = '<%= asset_path "ting-button.png" %>';
    }
  }

  HeaderController.$inject = [];

  angular
    .module('TourneySite')
    .component('siteHeader', {
      templateUrl: '<%= asset_path "components/site_header/site_header.html" %>',
      controller: HeaderController,
      bindings: {
        logoImage: '<'
      }
    });
})();
