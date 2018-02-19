import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('posts', function() {
    this.route('post', function() {
      this.route('user', { path: '/user', resetNamespace: true });
    });
  });
});

export default Router;
