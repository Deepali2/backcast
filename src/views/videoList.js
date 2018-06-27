var VideoListView = Backbone.View.extend({
  // collection: new Videos(),
  el: '.list',

  initialize: function() {
    this.render();
    $('.video-list').append(this.collection.map(function(video) {
      return new VideoListEntryView({model: video}).render().el;
    }));
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },



  template: templateURL('src/templates/videoList.html')

});
