import {GameConstants} from "../../GameConstants";

export class Utils {
    public static loadJSON(callback) {
        let xObj = new XMLHttpRequest();
        xObj.overrideMimeType("application/json");
        xObj.open('GET', 'GameData.json', true);
        xObj.onreadystatechange = function() {
            if( xObj.readyState == 4 && xObj.status == 200 ) {
                callback(xObj.responseText);
            }
        }

        xObj.send(null);
    }

    public static getTextStyle(): PIXI.TextStyle {
        return new PIXI.TextStyle({
            align: GameConstants.textStyle.align,
            fontSize: GameConstants.textStyle.fontSize
        });
    }

    public static getRandomNumber(): number {
        return Math.floor(Math.random() * 101);
    }
}