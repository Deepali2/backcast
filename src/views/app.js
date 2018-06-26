var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    //videos is a collection
    this.videos = new Videos();
    this.render();
    this.videoList = new VideoListView();
    this.videoPlayer = new VideoPlayerView();
    this.searchView = new SearchView();
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
