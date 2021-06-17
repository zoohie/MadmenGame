import {Utils} from "../../utils/Utils";
import {IPlayerStats} from "../interfaces/IPlayerStats";
import {PlayerView} from "../../player/view/PlayerView";

export class TaskView extends PIXI.Container {
    private PlayerView: PlayerView;

    constructor(title: string, description: string, changes: IPlayerStats) {
        super();

        const textStyle = Utils.getTextStyle();

        let titleText: PIXI.Text = new PIXI.Text(title, textStyle);
        titleText.position.x = 0;
        titleText.interactive = true;
        titleText.buttonMode = true;
        titleText.on("pointertap", () => {
            this.setTaskCallback(changes);
        });

        let descriptionText: PIXI.Text = new PIXI.Text(description, textStyle);
        descriptionText.position.x = 700;

        let taskContainer: PIXI.Container = new PIXI.Container();

        taskContainer.addChild(
            titleText,
            descriptionText
        );

        this.addChild(taskContainer);
    }

    private setTaskCallback(changes: IPlayerStats): void {
        // TODO: Add update on changes

        // model.health -= changes.health / 10;
        // model.time -= changes.time / 10;
        // model.energy -= changes.energy / 10;
        // model.satiety -= changes.satiety / 10;
        // model.mood -= changes.mood / 10;
        // model.reaction -= changes.reaction / 10;
        // model.strategy -= changes.strategy / 10;
        // model.synergy -= changes.synergy / 10;
    }
}