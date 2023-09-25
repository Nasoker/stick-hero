import { _decorator, Color, Component, Graphics, Node } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('CircleDrawer')
export class CircleDrawer extends Component {
    @property(Graphics)
    graphics: Graphics

    onLoad() {
        // Set the fill color to green
        this.graphics.fillColor = Color.GREEN;

        // Draw an ellipse (oval) at (0, 0) with a width of 100 and height of 50
        this.graphics.ellipse(0, 0, 85, 50);

        // Fill the ellipse with the specified color
        this.graphics.fill();
    }
}