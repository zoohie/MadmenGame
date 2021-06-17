import * as PIXI from "pixi.js";
import {PlayerModel} from "./modules/player/model/PlayerModel";
import {PlayerEntity} from "./modules/player/entity/PlayerEntity";

const PLAYER_MODEL: PlayerModel = new PlayerModel();
const PLAYER_ENTITY: PlayerEntity = new PlayerEntity();

const app = new PIXI.Application({
    backgroundColor: 0x1099bb
});

function init() {
    // load assets and fonts
    document.body.appendChild(app.view);
    setup();

    PLAYER_MODEL.init();
    PLAYER_ENTITY.init();
    //Add 'onclick' events handlers for each action in UI
}

function setup() {
    app.ticker.add((delta) => {
        // Each tick call next
        // PLAYER_ENTITY.runDefaultTickActions();
    });
}

init();