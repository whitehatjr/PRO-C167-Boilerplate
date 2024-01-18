AFRAME.registerComponent("play-on-click", {
  schema: {
    isPlaying: { type: "boolean", default: false }
  },

  init: function() {
    this.videoEl = this.el.getAttribute("material").src;
    this.onClick = this.onClick.bind(this);    
  },

  play: function() {
    window.addEventListener("click", this.onClick);
  },
  onClick: function(evt) {
    if (!this.videoEl) {
      return;
    }

    //Add your code here
  }
});
