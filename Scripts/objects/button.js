let objects;
(function(objects) {
  class Button extends Image {
    /**
     * Creates an instance of Button
     * @param {string} [source = "" ]
     * @param {number}[width = 0]
     * @param {number} [height = 0]
     *
     */
    constructor(source = "", width = 0, height = 0) {
      super(width, height);

      this.src = source;

      this.addEventListener("mouseover", function() {
        this.style.opacity = 0.5; // sets the alpha transparency to 30%;
      });

      this.addEventListener("mouseout", function() {
        this.style.opacity = 1.0; // sets the alpha transparency to 0%;
      });
    }
  }

  objects.Button = Button;
})(objects || (objects = {}));
