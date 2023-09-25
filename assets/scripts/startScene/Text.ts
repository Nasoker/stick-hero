import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Text')
export class Text extends Component {
    @property(Node)
    textLabel: Node;

    onLoad() {
        this.node.on(Node.EventType.TOUCH_END, this.onButtonClick, this);
    }

    onButtonClick() {
        console.log('Button Clicked!');
    }
}


