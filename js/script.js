var dataURL = 'http://www.reddit.com/.json';

new Vue({
  el: '#app',
  data: {
    items: null,
	title: "Vue Json Iteration"
  },
  created: function () {
    this.fetchData();
  },
  methods: {
    fetchData: function () {
		var self = this;
		$.get(dataURL, function( data ) {
			// Placeholders for self/nsfw items
			if (data.data.thumbnail == "image" || data.data.thumbnail == "self" || data.data.thumbnail == "default")  {
				data.data.thumbnail = "img/self.png"
			} else if (data.data.thumbnail == "nsfw") {
				data.data.thumbnail = "img/nsfw.png"
			}
			data.data.thumbnail = "img/nsfw.png"
			self.items = data.data.children;
			console.log(data.data.children);
		});
    }
  }
});
