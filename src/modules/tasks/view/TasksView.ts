import {Utils} from "../../utils/Utils";
import {TaskView} from "./TaskView";
import {ITaskData} from "../interfaces/ITaskData";

export class TasksView {
    public view: PIXI.Container;

    private gameData: Array<any>;

    constructor() {
        this.init();
    }

    public init(): void {
        this.createView();

        this.parseGameData().then(() => {
            this.addTasks();
        });
    }

    private createView(): void {
        this.view = new PIXI.Container();
        this.view.position.set(15, 350);
    }

    private async parseGameData(): Promise<any> {
        await new Promise((resolve) => {
            Utils.loadJSON((response) => {
                this.gameData = JSON.parse(response);

                resolve();
            });
        });
    }

    private addTasks(): void {
        let offsetY: number = 0;

        const categories = Object.entries(this.gameData);

        for( let i = 0; i < categories.length; i++ ) {
            let tasks = Object.entries(categories[i][1]);

            for( let j = 0; j < tasks.length; j++ ) {
                offsetY += 40;

                let task: ITaskData = tasks[j][1] as ITaskData;

                let taskView: TaskView = new TaskView(
                    task.title,
                    task.description,
                    task.changes
                );

                taskView.position.y = offsetY;

                this.view.addChild(taskView);
            }
        }
    }
}