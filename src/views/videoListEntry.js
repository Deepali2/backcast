var VideoListEntryView = Backbone.View.extend({
  // model: Video,
  // collection: Videos,

  // el: '.video-list',

  initialize: function() {
    // this.render();
  },

  

  events: {
    'click .video-list-entry-title': 'select'
  },

  select: function() {
    this.model.select();
  },


  render: function() {
    this.$el.append(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
