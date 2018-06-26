var VideoListView = Backbone.View.extend({
  collection: new Videos(),
  el: '.list',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    // for each video
    var videoCollection = this.collection;
    console.log(videoCollection);
    videoCollection.forEach(function(item) {
      var newVideo = new VideoListEntryView();
      $('.video-list').append(newVideo);
    })
      // create new videolistentry
      // append that entry to div with class of .video-list
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
