/*
    *
    *  ABSTRACION:
    *   Hide the details and complexity.
    *   Show the essentials
    * 
*/
function Circle(_radius) {

    console.log('this-->', this);

    this.radius = _radius;

    let defaultLocation = { x: 0, y: 0};
    let computeOptimumLocation = function(factor) {

    }
    // Scope is temporary and it dies but closure stays

    this.draw = function() {
        let x, y; // draw scope
        computeOptimumLocation(0.1); // draw closure
        console.log('draw'); // draw closure
    }
    /* After execution of the draw() function,
        defaultLocation and computeOptimumLcation
        will continue to stay in memory*/

    // Read-Only Method
    this.getDefaultLocation = function() {
        return defaultLocation;
    };

    // Read-Only Property
    Object.defineProperty(
        this,
        'defaultLocation',
        {
            get: function() {
                return defaultLocation; /*this variable 
                is in the closure of the inner function*/
            },
            set: function(value) {
                if (!value.x || !value.y)
                    throw new Error('Invalid location.');
                
                defaultLocation = value;
            }
        }
    );

}

const circle = new Circle(10);
circle.draw();
circle.getDefaultLocation();// Read-Only Method
circle.getDefaultLocation;// Read-Only Property