(() => {
  'use strict';

  class TwitchStreamController {
    constructor($sce) {
      this.$sce = $sce;
    }

    $onInit() {
      let src = `https://player.twitch.tv/?channel=${this.channelName}`;
      this.source = this.$sce.trustAsResourceUrl(src);
    }
  }

  TwitchStreamController.$inject = ['$sce'];

  angular
    .module('TourneySite')
    .component('twitchStream', {
      templateUrl: '<%= asset_path "components/twitch_stream/twitch_stream.html" %>',
      controller: TwitchStreamController,
      bindings: {
        channelName: '<'
      }
    });
})();
