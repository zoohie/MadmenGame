import {InitialValuesConfig} from "../configs/InitialValuesConfig";
import {Utils} from "../../utils/Utils";

export class PlayerView {
    set energy(value: string) {
        this._energy.text = value;
    }

    set satiety(value: string) {
        this._satiety.text = value;
    }

    set mood(value: string) {
        this._mood.text = value;
    }

    set health(value: string) {
        this._health.text = value;
    }

    set reaction(value: string) {
        this._reaction.text = value;
    }

    set strategy(value: string) {
        this._strategy.text = value;
    }

    set synergy(value: string) {
        this._synergy.text = value;
    }

    private _energy: PIXI.Text;
    private _satiety: PIXI.Text;
    private _mood: PIXI.Text;
    private _health: PIXI.Text;
    private _reaction: PIXI.Text;
    private _strategy: PIXI.Text;
    private _synergy: PIXI.Text;

    public view: PIXI.Container;

    constructor() {
        this.init();
    }

    private init(): void {
        this.createView();
        this.addInitialStats();
    }

    private createView(): void {
        this.view = new PIXI.Container();
    }

    private addInitialStats(): void {
        const textStyle = Utils.getTextStyle();

        let energy: PIXI.Text = new PIXI.Text(InitialValuesConfig.energy.toString(), textStyle);
        let satiety: PIXI.Text = new PIXI.Text(InitialValuesConfig.satiety.toString(), textStyle);
        let mood: PIXI.Text = new PIXI.Text(InitialValuesConfig.mood.toString(), textStyle);
        let health: PIXI.Text = new PIXI.Text(InitialValuesConfig.health.toString(), textStyle);
        let reaction: PIXI.Text = new PIXI.Text(InitialValuesConfig.reaction.toString(), textStyle);
        let strategy: PIXI.Text = new PIXI.Text(InitialValuesConfig.strategy.toString(), textStyle);
        let synergy: PIXI.Text = new PIXI.Text(InitialValuesConfig.synergy.toString(), textStyle);

        energy.position.set(548, 31);
        satiety.position.set(548, 114);
        mood.position.set(548, 193);
        health.position.set(548, 275);
        reaction.position.set(1313, 63);
        strategy.position.set(1313, 166);
        synergy.position.set(1313, 268);

        this.view.addChild(
            energy,
            satiety,
            mood,
            health,
            reaction,
            strategy,
            synergy
        );
    }
}