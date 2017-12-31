(() => {
  'use strict';

  class CountdownController {
    constructor($timeout) {
      this.$timeout = $timeout;
    }

    $onInit() {
      let end = new Date(this.endTime);
      this.interval(end);
    }

    interval(end) {
      let now = new Date().getTime();

      let distance = end - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.setCountdownText(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

      if (distance < 0) {
        this.onEnd();
      }

      this.$timeout(() => {
        this.interval(end);
      }, 1000);
    }

    setCountdownText(text) {
      this.countdownText = text;

    }
  }

  CountdownController.$inject = ['$timeout'];

  angular
    .module('TourneySite')
    .component('countdown', {
      templateUrl: '<%= asset_path "components/countdown/countdown.html" %>',
      controller: CountdownController,
      bindings: {
        endTime: '<',
        onEnd: '&'
      }
    });
})();
