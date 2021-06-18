(window.webpackJsonp=window.webpackJsonp||[]).push([["main"],{"../../src/GameConstants.ts":function(e,t,i){"use strict";i.r(t),i.d(t,"GameConstants",(function(){return r}));const r={startLocalTime:{day:1,time:0},rootContainer:{width:1280,height:720},backgroundPath:"data/assets/background.jpg",backgroundSize:{heigth:1920,width:1080},textStyle:{fontSize:36,align:"center"}}},"../../src/index.ts":function(e,t,i){"use strict";i.r(t);var r=i("../pixi.js/lib/index.js"),o=i("../../src/modules/player/model/PlayerModel.ts"),s=i("../../src/modules/player/entity/PlayerEntity.ts"),a=i("../../src/modules/ui/views/UIView.ts"),l=i("../../src/GameConstants.ts"),d=i("../../src/modules/player/view/PlayerView.ts"),h=i("../../src/modules/tasks/view/TasksView.ts");new o.PlayerModel,new s.PlayerEntity;const n=new r.Container,y=new a.UIView,M=new d.PlayerView,p=new h.TasksView,f=new r.Application({backgroundColor:1087931,width:l.GameConstants.rootContainer.width,height:l.GameConstants.rootContainer.height});function c(){document.body.appendChild(f.view),n.width=l.GameConstants.rootContainer.width,n.height=l.GameConstants.rootContainer.height,f.stage.addChild(n),f.renderer.render(f.stage),y.view.addChild(M.view,p.view),n.addChild(y.view),f.ticker.add(e=>{f.renderer.render(f.stage)})}setTimeout(()=>{c()},1e3)},"../../src/modules/player/configs/InitialValuesConfig.ts":function(e,t,i){"use strict";i.r(t),i.d(t,"InitialValuesConfig",(function(){return r}));const r={health:100,time:48,energy:100,satiety:20,mood:50,reaction:0,strategy:0,synergy:0,healthModifier:1,timeModifier:1,energyModifier:1,satietyModifier:1,moodModifier:1,reactionModifier:1,strategyModifier:1,synergyModifier:1}},"../../src/modules/player/entity/PlayerEntity.ts":function(e,t,i){"use strict";i.r(t),i.d(t,"PlayerEntity",(function(){return o}));var r=i("../../src/modules/player/model/PlayerModel.ts");class o{constructor(){this.init()}init(){this.playerModel=new r.PlayerModel,this.defaultTickActions={calcSatiety:this.calculateSatiety(),calcEnergy:this.calculateEnergy(),calcMood:this.calculateMood(),calcHealth:this.calculateHealth()},this.defaultTaskActions={doHometasks:this.doHometasks(),eatDadsFood:this.eatDadsFood(),eatMomsFood:this.eatMomsFood(),eatPizza:this.eatPizza(),goToSchool:this.goToSchool(),helpMom:this.helpMom(),playGameForFun:this.playGameForFun(),playOtherGames:this.playOtherGames(),procrastination:this.procrastination(),restWithFriends:this.restWithFriends(),showerAndCleaning:this.showerAndCleaning(),sleep:this.sleep(),trainGameWithBots:this.trainGameWithBots(),trainReaction:this.trainReaction(),trainStrategy:this.trainStrategy(),trainSynergy:this.trainSynergy()}}runDefaultTickActions(){for(let e in this.defaultTickActions)this.defaultTickActions[e]()}runDefaultTickChanges(e,t,i){this.playerModel.time-=e,this.playerModel.energy-=t,this.playerModel.satiety-=i}doHometasks(){this.runDefaultTickChanges(4,3,7),this.playerModel.mood>0?this.playerModel.mood+=1*this.playerModel.moodModifier:this.playerModel.mood-=1/this.playerModel.moodModifier}eatDadsFood(){this.runDefaultTickChanges(1,3,0),this.playerModel.satiety>0?this.playerModel.satiety+=25*this.playerModel.satietyModifier:this.playerModel.satiety-=25/this.playerModel.satietyModifier}eatMomsFood(){this.runDefaultTickChanges(1,3,0),this.playerModel.satiety>0?this.playerModel.satiety+=75*this.playerModel.satietyModifier:this.playerModel.satiety-=75/this.playerModel.satietyModifier}eatPizza(){this.runDefaultTickChanges(1,3,0),this.playerModel.satiety>0?this.playerModel.satiety+=50*this.playerModel.satietyModifier:this.playerModel.satiety-=50/this.playerModel.satietyModifier,this.playerModel.mood>0?this.playerModel.mood+=5*this.playerModel.moodModifier:this.playerModel.mood-=5/this.playerModel.moodModifier,this.playerModel.health>0?this.playerModel.health+=-5*this.playerModel.healthModifier:this.playerModel.health-=-5/this.playerModel.healthModifier,this.checkWhetherPlayerAlive()}goToSchool(){this.runDefaultTickChanges(12,3,0),this.playerModel.satiety>0?this.playerModel.satiety+=-1.5*this.playerModel.satietyModifier:this.playerModel.satiety-=-1.5/this.playerModel.satietyModifier,this.playerModel.mood>0?this.playerModel.mood+=-.2*this.playerModel.moodModifier:this.playerModel.mood-=-.2/this.playerModel.moodModifier}helpMom(){this.runDefaultTickChanges(2,3,7),this.playerModel.mood>0?this.playerModel.mood+=-2*this.playerModel.moodModifier:this.playerModel.mood-=-2/this.playerModel.moodModifier}playGameForFun(){this.runDefaultTickChanges(1,3,0),this.playerModel.satiety>0?this.playerModel.satiety+=1*this.playerModel.satietyModifier:this.playerModel.satiety-=1/this.playerModel.satietyModifier,this.playerModel.reaction>0?this.playerModel.reaction+=.75*this.playerModel.reactionModifier:this.playerModel.reaction-=.75/this.playerModel.reactionModifier,this.playerModel.strategy>0?this.playerModel.strategy+=.75*this.playerModel.strategyModifier:this.playerModel.strategy-=.75/this.playerModel.strategyModifier,this.playerModel.synergy>0?this.playerModel.synergy+=.75*this.playerModel.synergyModifier:this.playerModel.synergy-=.75/this.playerModel.synergyModifier}playOtherGames(){this.runDefaultTickChanges(1,3,7),this.playerModel.mood>0?this.playerModel.mood+=3*this.playerModel.moodModifier:this.playerModel.mood-=3/this.playerModel.moodModifier}procrastination(){this.runDefaultTickChanges(1,3,7)}restWithFriends(){this.runDefaultTickChanges(4,3,7),this.playerModel.mood>0?this.playerModel.mood+=4*this.playerModel.moodModifier:this.playerModel.mood-=4/this.playerModel.moodModifier}showerAndCleaning(){this.runDefaultTickChanges(1,3,7),this.playerModel.health>0?this.playerModel.health+=1*this.playerModel.healthModifier:this.playerModel.health-=1/this.playerModel.healthModifier}sleep(){this.runDefaultTickChanges(16,0,0),this.playerModel.energy>0?this.playerModel.energy+=12.5*this.playerModel.energyModifier:this.playerModel.energy-=12.5/this.playerModel.energyModifier,this.playerModel.satiety>0?this.playerModel.satiety+=-2.2*this.playerModel.satietyModifier:this.playerModel.satiety-=-2.2/this.playerModel.satietyModifier,this.playerModel.health>0?this.playerModel.health+=.2*this.playerModel.healthModifier:this.playerModel.health-=.2/this.playerModel.healthModifier}trainGameWithBots(){this.runDefaultTickChanges(1,3,7),this.playerModel.reaction>0?this.playerModel.reaction+=1*this.playerModel.reactionModifier:this.playerModel.reaction-=1/this.playerModel.reactionModifier,this.playerModel.strategy>0?this.playerModel.strategy+=1*this.playerModel.strategyModifier:this.playerModel.strategy-=1/this.playerModel.strategyModifier}trainReaction(){this.runDefaultTickChanges(1,3,7),this.playerModel.reaction>0?this.playerModel.reaction+=2.5*this.playerModel.reactionModifier:this.playerModel.reaction-=2.5/this.playerModel.reactionModifier}trainStrategy(){this.runDefaultTickChanges(1,3,7),this.playerModel.strategy>0?this.playerModel.strategy+=2.5*this.playerModel.strategyModifier:this.playerModel.strategy-=2.5/this.playerModel.strategyModifier}trainSynergy(){this.runDefaultTickChanges(1,3,7),this.playerModel.reaction>0?this.playerModel.reaction+=.25*this.playerModel.reactionModifier:this.playerModel.reaction-=.25/this.playerModel.reactionModifier,this.playerModel.strategy>0?this.playerModel.strategy+=.25*this.playerModel.strategyModifier:this.playerModel.strategy-=.25/this.playerModel.strategyModifier,this.playerModel.synergy>0?this.playerModel.synergy+=2.5*this.playerModel.synergyModifier:this.playerModel.synergy-=2.5/this.playerModel.synergyModifier}calculateSatiety(){return this.playerModel.satiety>=10?(this.playerModel.energy-=3,void(this.playerModel.moodModifier=1)):this.playerModel.satiety>0?(this.playerModel.energy-=5,this.playerModel.health-=.25,this.playerModel.moodModifier=.75,void this.checkWhetherPlayerAlive()):(this.playerModel.energy-=6.5,this.playerModel.health-=1,this.playerModel.moodModifier=.5,void this.checkWhetherPlayerAlive())}calculateEnergy(){return this.playerModel.energy>=10?(this.playerModel.satiety-=7,void(this.playerModel.moodModifier=1)):this.playerModel.energy>0?(this.playerModel.satiety-=12,this.playerModel.health-=1,this.playerModel.moodModifier=.75,void this.checkWhetherPlayerAlive()):(this.playerModel.satiety-=18,this.playerModel.health-=4,this.playerModel.moodModifier=.5,void this.checkWhetherPlayerAlive())}calculateMood(){return(this.playerModel.mood=100)?(this.playerModel.reactionModifier=1.25,this.playerModel.strategyModifier=1.25,this.playerModel.synergyModifier=1.25,this.playerModel.energyModifier=1.5,this.playerModel.satietyModifier=1.5,void(this.playerModel.healthModifier=1.5)):this.playerModel.mood>=90?(this.playerModel.reactionModifier=1.1,this.playerModel.strategyModifier=1.1,this.playerModel.synergyModifier=1.1,this.playerModel.energyModifier=1.2,this.playerModel.satietyModifier=1.2,this.playerModel.healthModifier=1.2,void(this.playerModel.health+=2)):this.playerModel.mood>=50?(this.playerModel.reactionModifier=1,this.playerModel.strategyModifier=1,this.playerModel.synergyModifier=1,this.playerModel.energyModifier=1,this.playerModel.satietyModifier=1,this.playerModel.healthModifier=1,void(this.playerModel.health+=1)):this.playerModel.mood>=25?(this.playerModel.reactionModifier=.9,this.playerModel.strategyModifier=.9,this.playerModel.synergyModifier=.9,this.playerModel.energyModifier=.8,this.playerModel.satietyModifier=.8,void(this.playerModel.healthModifier=.8)):this.playerModel.mood>=10?(this.playerModel.reactionModifier=.75,this.playerModel.strategyModifier=.75,this.playerModel.synergyModifier=.75,this.playerModel.energyModifier=.6,this.playerModel.satietyModifier=.6,void(this.playerModel.healthModifier=.6)):this.playerModel.mood>0?(this.playerModel.reactionModifier=.5,this.playerModel.strategyModifier=.5,this.playerModel.synergyModifier=.5,this.playerModel.energyModifier=.4,this.playerModel.satietyModifier=.4,this.playerModel.healthModifier=.4,this.playerModel.health-=2,void this.checkWhetherPlayerAlive()):(this.playerModel.reactionModifier=.1,this.playerModel.strategyModifier=.1,this.playerModel.synergyModifier=.1,this.playerModel.energyModifier=.2,this.playerModel.satietyModifier=.2,this.playerModel.healthModifier=.2,this.playerModel.health-=10,void this.checkWhetherPlayerAlive())}calculateHealth(){return this.playerModel.health>=75?(this.playerModel.reactionModifier=1,this.playerModel.strategyModifier=1,this.playerModel.synergyModifier=1,void(this.playerModel.moodModifier=1)):this.playerModel.health>=50?(this.playerModel.reactionModifier=.9,this.playerModel.strategyModifier=.9,this.playerModel.synergyModifier=.9,void(this.playerModel.moodModifier=.75)):this.playerModel.health>=25?(this.playerModel.reactionModifier=.75,this.playerModel.strategyModifier=.75,this.playerModel.synergyModifier=.75,void(this.playerModel.moodModifier=.5)):this.playerModel.health>=10?(this.playerModel.reactionModifier=.5,this.playerModel.strategyModifier=.5,this.playerModel.synergyModifier=.5,void(this.playerModel.moodModifier=.25)):this.playerModel.health>0?(this.playerModel.reactionModifier=.1,this.playerModel.strategyModifier=.1,this.playerModel.synergyModifier=.1,void(this.playerModel.moodModifier=.1)):void 0}checkWhetherPlayerAlive(){this.playerModel.health}}},"../../src/modules/player/model/PlayerModel.ts":function(e,t,i){"use strict";i.r(t),i.d(t,"PlayerModel",(function(){return o}));var r=i("../../src/modules/player/configs/InitialValuesConfig.ts");class o{get healthModifier(){return this._healthModifier}set healthModifier(e){this._healthModifier=e}get timeModifier(){return this._timeModifier}set timeModifier(e){this._timeModifier=e}get energyModifier(){return this._energyModifier}set energyModifier(e){this._energyModifier=e}get satietyModifier(){return this._satietyModifier}set satietyModifier(e){this._satietyModifier=e}get moodModifier(){return this._moodModifier}set moodModifier(e){this._moodModifier=e}get reactionModifier(){return this._reactionModifier}set reactionModifier(e){this._reactionModifier=e}get strategyModifier(){return this._strategyModifier}set strategyModifier(e){this._strategyModifier=e}get synergyModifier(){return this._synergyModifier}set synergyModifier(e){this._synergyModifier=e}get health(){return this._health}set health(e){this._health=e}get time(){return this._time}set time(e){this._time=e}get energy(){return this._energy}set energy(e){this._energy=e}get satiety(){return this._satiety}set satiety(e){this._satiety=e}get mood(){return this._mood}set mood(e){this._mood=e}get reaction(){return this._reaction}set reaction(e){this._reaction=e}get strategy(){return this._strategy}set strategy(e){this._strategy=e}get synergy(){return this._synergy}set synergy(e){this._synergy=e}constructor(){this.init()}init(){this._health=r.InitialValuesConfig.health,this._time=r.InitialValuesConfig.time,this._energy=r.InitialValuesConfig.energy,this._satiety=r.InitialValuesConfig.satiety,this._mood=r.InitialValuesConfig.mood,this._reaction=r.InitialValuesConfig.reaction,this._strategy=r.InitialValuesConfig.strategy,this._synergy=r.InitialValuesConfig.synergy,this._healthModifier=r.InitialValuesConfig.healthModifier,this._timeModifier=r.InitialValuesConfig.timeModifier,this._energyModifier=r.InitialValuesConfig.energyModifier,this._satietyModifier=r.InitialValuesConfig.satietyModifier,this._moodModifier=r.InitialValuesConfig.moodModifier,this._reactionModifier=r.InitialValuesConfig.reactionModifier,this._strategyModifier=r.InitialValuesConfig.strategyModifier,this._synergyModifier=r.InitialValuesConfig.synergyModifier}}},"../../src/modules/player/view/PlayerView.ts":function(e,t,i){"use strict";i.r(t),i.d(t,"PlayerView",(function(){return s}));var r=i("../../src/modules/player/configs/InitialValuesConfig.ts"),o=i("../../src/modules/utils/Utils.ts");class s{set energy(e){this._energy.text=e}set satiety(e){this._satiety.text=e}set mood(e){this._mood.text=e}set health(e){this._health.text=e}set reaction(e){this._reaction.text=e}set strategy(e){this._strategy.text=e}set synergy(e){this._synergy.text=e}constructor(){this.init()}init(){this.createView(),this.addInitialStats()}createView(){this.view=new PIXI.Container}addInitialStats(){const e=o.Utils.getTextStyle();let t=new PIXI.Text(r.InitialValuesConfig.energy.toString(),e),i=new PIXI.Text(r.InitialValuesConfig.satiety.toString(),e),s=new PIXI.Text(r.InitialValuesConfig.mood.toString(),e),a=new PIXI.Text(r.InitialValuesConfig.health.toString(),e),l=new PIXI.Text(r.InitialValuesConfig.reaction.toString(),e),d=new PIXI.Text(r.InitialValuesConfig.strategy.toString(),e),h=new PIXI.Text(r.InitialValuesConfig.synergy.toString(),e);t.position.set(548,31),i.position.set(548,114),s.position.set(548,193),a.position.set(548,275),l.position.set(1313,63),d.position.set(1313,166),h.position.set(1313,268),this.view.addChild(t,i,s,a,l,d,h)}}},"../../src/modules/tasks/view/TaskView.ts":function(e,t,i){"use strict";i.r(t),i.d(t,"TaskView",(function(){return o}));var r=i("../../src/modules/utils/Utils.ts");class o extends PIXI.Container{constructor(e,t,i){super();const o=r.Utils.getTextStyle();let s=new PIXI.Text(e,o);s.position.x=0,s.interactive=!0,s.buttonMode=!0,s.on("pointertap",()=>{this.setTaskCallback(i)});let a=new PIXI.Text(t,o);a.position.x=700;let l=new PIXI.Container;l.addChild(s,a),this.addChild(l)}setTaskCallback(e){}}},"../../src/modules/tasks/view/TasksView.ts":function(e,t,i){"use strict";i.r(t),i.d(t,"TasksView",(function(){return a}));var r=i("../tslib/tslib.es6.js"),o=i("../../src/modules/utils/Utils.ts"),s=i("../../src/modules/tasks/view/TaskView.ts");class a{constructor(){this.init()}init(){this.createView(),this.parseGameData().then(()=>{this.addTasks()})}createView(){this.view=new PIXI.Container,this.view.position.set(15,350)}parseGameData(){return r.__awaiter(this,void 0,void 0,(function*(){yield new Promise(e=>{o.Utils.loadJSON(t=>{this.gameData=JSON.parse(t),e()})})}))}addTasks(){let e=0;const t=Object.entries(this.gameData);for(let i=0;i<t.length;i++){let r=Object.entries(t[i][1]);for(let t=0;t<r.length;t++){e+=40;let i=r[t][1],o=new s.TaskView(i.title,i.description,i.changes);o.position.y=e,this.view.addChild(o)}}}}},"../../src/modules/ui/views/UIView.ts":function(e,t,i){"use strict";i.r(t),i.d(t,"UIView",(function(){return o}));var r=i("../../src/GameConstants.ts");class o{constructor(){this.init()}init(){this.createView(),this.addBackground()}createView(){this.view=new PIXI.Container,this.view.scale.set(r.GameConstants.rootContainer.width/r.GameConstants.backgroundSize.heigth,r.GameConstants.rootContainer.height/r.GameConstants.backgroundSize.width)}addBackground(){this.view.addChild(PIXI.Sprite.from("data/assets/background.jpg"))}}},"../../src/modules/utils/Utils.ts":function(e,t,i){"use strict";i.r(t),i.d(t,"Utils",(function(){return o}));var r=i("../../src/GameConstants.ts");class o{static loadJSON(e){let t=new XMLHttpRequest;t.overrideMimeType("application/json"),t.open("GET","GameData.json",!0),t.onreadystatechange=function(){4==t.readyState&&200==t.status&&e(t.responseText)},t.send(null)}static getTextStyle(){return new PIXI.TextStyle({align:r.GameConstants.textStyle.align,fontSize:r.GameConstants.textStyle.fontSize})}static getRandomNumber(){return Math.floor(101*Math.random())}}}},[["../../src/index.ts","runtime","npm.pixi.js","npm.pixi-gl-core","npm.resource-loader","vendors~main"]]]);
//# sourceMappingURL=main.ead32ea28a742751815f.js.map