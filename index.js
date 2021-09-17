// Add your Circle class here
// Circle
// 1) correctly returns the radius property of a Circle instance using `circle.radius`
// gets
// 2) the diameter of a circle using the pseudo-property `circle.diameter`
// 3) the circumference of a circle using the pseudo-property `circle.circumference`
// 4) the area of a circle using the pseudo-property `circle.area`
// sets
// 5) the radius using the pseudo-property `circle.diameter`
// 6) the radius using the pseudo-property `circle.circumference`
// 7) the radius using the pseudo-property `circle.area`
class Circle {
    constructor(radius) {
        this.radius = radius;
    };

    get diameter() {
        return this.radius * 2;
    };

    get circumference() {
        return 2 * Math.PI * this.radius;
    };

    get area() {
        return Math.PI * (this.radius * this.radius);
    };

    set diameter(diameter) {
        this.radius = diameter / 2;
    };

    set circumference(circumference) {
        this.radius = circumference / (Math.PI * 2)
    };

    set area(area) {
        this.radius = Math.sqrt(area / Math.PI);
    };
};