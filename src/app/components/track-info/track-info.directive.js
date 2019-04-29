class TrackInfoDirective {
  constructor(themeManager) {
    'ngInject';
    let directive = {
      restrict: 'E',
      templateUrl: themeManager.getHtmlPath('track-info', 'components/track-info'),
      scope: false,
      controller: TrackInfoController,
      controllerAs: 'trackInfo',
      bindToController: true,
      scope: {
        isInFooter: "@"
      }
    };
    return directive;
  }
}

class TrackInfoController {
  constructor($scope, playerService) {
    'ngInject';
    this.$scope = $scope;
    this.playerService = playerService;

    this.isInFooter = this.$scope.isInFooter || false;

    console.log(this.isInFooter);
  }


}

export default TrackInfoDirective;
