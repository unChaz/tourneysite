(() => {
  'use strict';

  class HeaderController {
    constructor() {

    }

    $onInit() {
      this.sponsorLink = 'https://ting.com/?lpn=rocketleague';
      this.sponsorImage = '<%= asset_path "ting-button-2.png" %>';
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
