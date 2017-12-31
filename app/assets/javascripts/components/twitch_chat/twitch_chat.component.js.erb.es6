(() => {
  'use strict';

  class TwitchChatController {
    constructor($sce) {
      this.$sce = $sce;
    }

    $onInit() {
      let src = `https://www.twitch.tv/embed/${this.channelName}/chat`;
      this.source = this.$sce.trustAsResourceUrl(src);
    }
  }

  TwitchChatController.$inject = ['$sce'];

  angular
    .module('TourneySite')
    .component('twitchChat', {
      templateUrl: '<%= asset_path "components/twitch_chat/twitch_chat.html" %>',
      controller: TwitchChatController,
      bindings: {
        channelName: '<'
      }
    });
})();
