var AppView = Backbone.View.extend({

  // collection: new Videos(window.exampleVideoData),
  

  el: '#app',

  initialize: function() {
    //videos is a collection
    this.videos = new Videos(window.exampleVideoData);
    this.model = this.videos.models[0];
    this.render();
    this.videoList = new VideoListView({collection: this.videos});
    this.videoPlayer = new VideoPlayerView({collection: this.videos, model: this.model});
    this.searchView = new SearchView();

    this.listenTo(this.videos, 'select', video => {
      new VideoPlayerView({model: video, collection: this.videos});
    });
  },


  render: function() {
    this.$el.html(this.template());
    return this;
    
  },

  template: templateURL('src/templates/app.html')

});
