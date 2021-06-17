import * as PIXI from "pixi.js";
import {PlayerModel} from "./modules/player/model/PlayerModel";
import {PlayerEntity} from "./modules/player/entity/PlayerEntity";
import {UIView} from "./modules/ui/views/UIView";
import {GameConstants} from "./GameConstants";
import {PlayerView} from "./modules/player/view/PlayerView";
import {TasksView} from "./modules/tasks/view/TasksView";

const PLAYER_MODEL: PlayerModel = new PlayerModel();
const PLAYER_ENTITY: PlayerEntity = new PlayerEntity();
const ROOT_VIEW = new PIXI.Container();
const UI_VIEW: UIView = new UIView();
const PLAYER_VIEW: PlayerView = new PlayerView();
const TASKS_VIEW: TasksView = new TasksView();

const app = new PIXI.Application({
    backgroundColor: 0x1099bb,
    width: GameConstants.rootContainer.width,
    height: GameConstants.rootContainer.height,
});

function init() {
    addCanvasToStage();
    setRootViewDimensions();
    addRootViewToStage();
    addOtherViewsToRootView();

    //Add 'onclick' events handlers for each action in UI
    setup();
}

function addCanvasToStage() {
    document.body.appendChild(app.view);
}

function setRootViewDimensions() {
    ROOT_VIEW.width = GameConstants.rootContainer.width;
    ROOT_VIEW.height = GameConstants.rootContainer.height;
}

function addRootViewToStage() {
    app.stage.addChild(ROOT_VIEW);
    app.renderer.render(app.stage);
}

function addOtherViewsToRootView() {
    UI_VIEW.view.addChild(
        PLAYER_VIEW.view,
        TASKS_VIEW.view
    );

    ROOT_VIEW.addChild(UI_VIEW.view);
}

function setup() {
    app.ticker.add((delta) => {
        app.renderer.render(app.stage);
    });
}

setTimeout(() => {
    init();
}, 1000);