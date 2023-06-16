AFRAME.registerComponent("play-on-click", {
  schema: {
    isPlaying: { type: "boolean", default: false }
  },

  init: function() {
    this.videoEl = this.el.getAttribute("material").src;
    this.onClick = this.onClick.bind(this);    
  },

  //Add your code here
});
