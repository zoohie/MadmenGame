import {GameConstants} from "../../../GameConstants";

export class UIView {
    public view: PIXI.Container;

    constructor() {
        this.init();
    }

    private init(): void {
        this.createView();
        this.addBackground();
    }

    private createView(): void {
        this.view = new PIXI.Container();

        this.view.scale.set(
            GameConstants.rootContainer.width / GameConstants.backgroundSize.heigth,
            GameConstants.rootContainer.height / GameConstants.backgroundSize.width
        );
    }

    private addBackground(): void {
        this.view.addChild(PIXI.Sprite.from('data/assets/background.jpg'));
    }
}