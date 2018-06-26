var VideoListEntryView = Backbone.View.extend({
  model: Video,
  collection: Videos,

  // el: '.video-list-entry',

  initialize: function() {
    this.render();
    this.on('select', function() {
      
    })
  },


  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
