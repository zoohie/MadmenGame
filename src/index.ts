import * as PIXI from "pixi.js";

const app = new PIXI.Application({
    backgroundColor: 0x1099bb
});

function init() {
    // load assets and fonts
    document.body.appendChild(app.view);
    setup();
}

function setup() {

    // game loop
    app.ticker.add((delta) => {
        stats.begin();

        // update game here

        stats.end();
    });
}

init();