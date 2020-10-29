gdjs.GameCode = {};
gdjs.GameCode.GDPlataformaObjects1= [];
gdjs.GameCode.GDPlataformaObjects2= [];
gdjs.GameCode.GDPlataformaObjects3= [];
gdjs.GameCode.GDPlataformaObjects4= [];
gdjs.GameCode.GDChaoObjects1= [];
gdjs.GameCode.GDChaoObjects2= [];
gdjs.GameCode.GDChaoObjects3= [];
gdjs.GameCode.GDChaoObjects4= [];
gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDPlayerObjects3= [];
gdjs.GameCode.GDPlayerObjects4= [];
gdjs.GameCode.GDBarraObjects1= [];
gdjs.GameCode.GDBarraObjects2= [];
gdjs.GameCode.GDBarraObjects3= [];
gdjs.GameCode.GDBarraObjects4= [];
gdjs.GameCode.GDDoceObjects1= [];
gdjs.GameCode.GDDoceObjects2= [];
gdjs.GameCode.GDDoceObjects3= [];
gdjs.GameCode.GDDoceObjects4= [];
gdjs.GameCode.GDCenarioObjects1= [];
gdjs.GameCode.GDCenarioObjects2= [];
gdjs.GameCode.GDCenarioObjects3= [];
gdjs.GameCode.GDCenarioObjects4= [];
gdjs.GameCode.GDInimigo1Objects1= [];
gdjs.GameCode.GDInimigo1Objects2= [];
gdjs.GameCode.GDInimigo1Objects3= [];
gdjs.GameCode.GDInimigo1Objects4= [];
gdjs.GameCode.GDPausaObjects1= [];
gdjs.GameCode.GDPausaObjects2= [];
gdjs.GameCode.GDPausaObjects3= [];
gdjs.GameCode.GDPausaObjects4= [];
gdjs.GameCode.GDPlayObjects1= [];
gdjs.GameCode.GDPlayObjects2= [];
gdjs.GameCode.GDPlayObjects3= [];
gdjs.GameCode.GDPlayObjects4= [];
gdjs.GameCode.GDreplayObjects1= [];
gdjs.GameCode.GDreplayObjects2= [];
gdjs.GameCode.GDreplayObjects3= [];
gdjs.GameCode.GDreplayObjects4= [];
gdjs.GameCode.GDmenuObjects1= [];
gdjs.GameCode.GDmenuObjects2= [];
gdjs.GameCode.GDmenuObjects3= [];
gdjs.GameCode.GDmenuObjects4= [];
gdjs.GameCode.GDMaskObjects1= [];
gdjs.GameCode.GDMaskObjects2= [];
gdjs.GameCode.GDMaskObjects3= [];
gdjs.GameCode.GDMaskObjects4= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};


gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCenarioObjects2Objects = Hashtable.newFrom({"Cenario": gdjs.GameCode.GDCenarioObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCenarioObjects2Objects = Hashtable.newFrom({"Cenario": gdjs.GameCode.GDCenarioObjects2});gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Barra"), gdjs.GameCode.GDBarraObjects2);
gdjs.GameCode.GDCenarioObjects2.length = 0;

{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCenarioObjects2Objects, 0, 0, "BackGround");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDCenarioObjects2Objects, (( gdjs.GameCode.GDCenarioObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDCenarioObjects2[0].getWidth()), 0, "BackGround");
}{for(var i = 0, len = gdjs.GameCode.GDBarraObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBarraObjects2[i].setWidth(300);
}
}{runtimeScene.getVariables().getFromIndex(4).setNumber(0.1);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Pause");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Menu");
}{runtimeScene.getVariables().getFromIndex(5).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(6).setNumber(1);
}{for(var i = 0, len = gdjs.GameCode.GDBarraObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBarraObjects2[i].returnVariable(gdjs.GameCode.GDBarraObjects2[i].getVariables().getFromIndex(0)).setNumber((gdjs.GameCode.GDBarraObjects2[i].getWidth()));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = !(gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 1));
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "nightmare.wav", true, 30, 1);
}}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getX() < -((gdjs.GameCode.GDPlayerObjects2[i].getWidth())) / 2 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setX(-((gdjs.GameCode.GDPlayerObjects2[i].getWidth())) / 2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects1[i].getX() > gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.GameCode.GDPlayerObjects1[i].getWidth()) / 2 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.GameCode.GDPlayerObjects1[i].getWidth()) / 2);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlataformaObjects2Objects = Hashtable.newFrom({"Plataforma": gdjs.GameCode.GDPlataformaObjects2});gdjs.GameCode.eventsList2 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDPlataformaObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlataformaObjects2Objects, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), gdjs.randomInRange(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene)), "");
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.GameCode.GDPlataformaObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlataformaObjects2[i].addForce(-(gdjs.randomInRange(15, 100)), 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Plataforma"), gdjs.GameCode.GDPlataformaObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlataformaObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlataformaObjects1[i].getX() < -((gdjs.GameCode.GDPlataformaObjects1[i].getWidth())) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlataformaObjects1[k] = gdjs.GameCode.GDPlataformaObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlataformaObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlataformaObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlataformaObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlataformaObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).sub(1);
}}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cenario"), gdjs.GameCode.GDCenarioObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCenarioObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCenarioObjects2[i].getX() <= -((gdjs.GameCode.GDCenarioObjects2[i].getWidth())) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCenarioObjects2[k] = gdjs.GameCode.GDCenarioObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCenarioObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDCenarioObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDCenarioObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCenarioObjects2[i].setX((gdjs.GameCode.GDCenarioObjects2[i].getWidth()));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Cenario"), gdjs.GameCode.GDCenarioObjects1);
{for(var i = 0, len = gdjs.GameCode.GDCenarioObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCenarioObjects1[i].setX(gdjs.GameCode.GDCenarioObjects1[i].getX() - (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3))));
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDDoceObjects2Objects = Hashtable.newFrom({"Doce": gdjs.GameCode.GDDoceObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDDoceObjects2Objects = Hashtable.newFrom({"Doce": gdjs.GameCode.GDDoceObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDChaoObjects2Objects = Hashtable.newFrom({"Chao": gdjs.GameCode.GDChaoObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDDoceObjects1Objects = Hashtable.newFrom({"Doce": gdjs.GameCode.GDDoceObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});gdjs.GameCode.eventsList4 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDDoceObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDDoceObjects2Objects, gdjs.randomInRange(0, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)), 0, "");
}{runtimeScene.getVariables().getFromIndex(2).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chao"), gdjs.GameCode.GDChaoObjects2);
gdjs.copyArray(runtimeScene.getObjects("Doce"), gdjs.GameCode.GDDoceObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDDoceObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDChaoObjects2Objects, true, runtimeScene, true);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDDoceObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDDoceObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDoceObjects2[i].returnVariable(gdjs.GameCode.GDDoceObjects2[i].getVariables().getFromIndex(0)).add((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDDoceObjects2[i].getVariables().getFromIndex(0))) / 10);
}
}{for(var i = 0, len = gdjs.GameCode.GDDoceObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDoceObjects2[i].addForce(-(5), (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDDoceObjects2[i].getVariables().getFromIndex(0))), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Doce"), gdjs.GameCode.GDDoceObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDDoceObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Barra"), gdjs.GameCode.GDBarraObjects1);
/* Reuse gdjs.GameCode.GDDoceObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDDoceObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDoceObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(2).sub(1);
}{for(var i = 0, len = gdjs.GameCode.GDBarraObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBarraObjects1[i].setWidth(gdjs.GameCode.GDBarraObjects1[i].getWidth() + (5));
}
}}

}


};gdjs.GameCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDBarraObjects2, gdjs.GameCode.GDBarraObjects3);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBarraObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDBarraObjects3[i].getVariableNumber(gdjs.GameCode.GDBarraObjects3[i].getVariables().getFromIndex(0)) < 50 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBarraObjects3[k] = gdjs.GameCode.GDBarraObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDBarraObjects3.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].setAnimationName("Aboba");
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBarraObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDBarraObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBarraObjects2[i].returnVariable(gdjs.GameCode.GDBarraObjects2[i].getVariables().getFromIndex(0)).sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)));
}
}{for(var i = 0, len = gdjs.GameCode.GDBarraObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBarraObjects2[i].setWidth(gdjs.GameCode.GDBarraObjects2[i].getWidth() - (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4))));
}
}{runtimeScene.getVariables().getFromIndex(4).add(0.0001);
}}

}


};gdjs.GameCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Barra"), gdjs.GameCode.GDBarraObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBarraObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDBarraObjects2[i].getVariableNumber(gdjs.GameCode.GDBarraObjects2[i].getVariables().getFromIndex(0)) < 1) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBarraObjects2[k] = gdjs.GameCode.GDBarraObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBarraObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Barra"), gdjs.GameCode.GDBarraObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBarraObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBarraObjects1[i].getVariableNumber(gdjs.GameCode.GDBarraObjects1[i].getVariables().getFromIndex(0)) < 1 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBarraObjects1[k] = gdjs.GameCode.GDBarraObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBarraObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(6).setNumber(0);
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDInimigo1Objects2Objects = Hashtable.newFrom({"Inimigo1": gdjs.GameCode.GDInimigo1Objects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDInimigo1Objects1Objects = Hashtable.newFrom({"Inimigo1": gdjs.GameCode.GDInimigo1Objects1});gdjs.GameCode.eventsList7 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDInimigo1Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDInimigo1Objects2Objects, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + (( gdjs.GameCode.GDInimigo1Objects2.length === 0 ) ? 0 :gdjs.GameCode.GDInimigo1Objects2[0].getWidth()), gdjs.randomFloatInRange((( gdjs.GameCode.GDInimigo1Objects2.length === 0 ) ? 0 :gdjs.GameCode.GDInimigo1Objects2[0].getHeight()), gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - (( gdjs.GameCode.GDInimigo1Objects2.length === 0 ) ? 0 :gdjs.GameCode.GDInimigo1Objects2[0].getHeight())), "");
}{runtimeScene.getVariables().getFromIndex(1).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Inimigo1"), gdjs.GameCode.GDInimigo1Objects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDInimigo1Objects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDInimigo1Objects2[i].getX() < -((gdjs.GameCode.GDInimigo1Objects2[i].getWidth())) - 20 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDInimigo1Objects2[k] = gdjs.GameCode.GDInimigo1Objects2[i];
        ++k;
    }
}
gdjs.GameCode.GDInimigo1Objects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDInimigo1Objects2 */
{for(var i = 0, len = gdjs.GameCode.GDInimigo1Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDInimigo1Objects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(1).sub(1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Inimigo1"), gdjs.GameCode.GDInimigo1Objects2);
{for(var i = 0, len = gdjs.GameCode.GDInimigo1Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDInimigo1Objects2[i].addForce(-(1), 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Inimigo1"), gdjs.GameCode.GDInimigo1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDInimigo1Objects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Barra"), gdjs.GameCode.GDBarraObjects1);
/* Reuse gdjs.GameCode.GDInimigo1Objects1 */
{for(var i = 0, len = gdjs.GameCode.GDBarraObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBarraObjects1[i].setWidth(gdjs.GameCode.GDBarraObjects1[i].getWidth() - (10));
}
}{for(var i = 0, len = gdjs.GameCode.GDBarraObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBarraObjects1[i].returnVariable(gdjs.GameCode.GDBarraObjects1[i].getVariables().getFromIndex(0)).sub(10);
}
}{for(var i = 0, len = gdjs.GameCode.GDInimigo1Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDInimigo1Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(1).sub(1);
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPausaObjects2Objects = Hashtable.newFrom({"Pausa": gdjs.GameCode.GDPausaObjects2});gdjs.GameCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Pausa"), gdjs.GameCode.GDPausaObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPausaObjects2Objects, runtimeScene, true, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(5).setNumber(0);
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Pause");
}{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 1);
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.GameCode.GDPlayObjects1});gdjs.GameCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.GameCode.GDPlayObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayObjects1Objects, runtimeScene, true, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(5).setNumber(1);
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Pause");
}}

}


};gdjs.GameCode.eventsList10 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 1;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 0;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDmenuObjects2Objects = Hashtable.newFrom({"menu": gdjs.GameCode.GDmenuObjects2});gdjs.GameCode.eventsList11 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDreplayObjects1Objects = Hashtable.newFrom({"replay": gdjs.GameCode.GDreplayObjects1});gdjs.GameCode.eventsList12 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.GameCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.GameCode.GDmenuObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDmenuObjects2Objects, runtimeScene, true, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("replay"), gdjs.GameCode.GDreplayObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDreplayObjects1Objects, runtimeScene, true, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList14 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Menu");
}
{ //Subevents
gdjs.GameCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList15 = function(runtimeScene) {

{


gdjs.GameCode.eventsList0(runtimeScene);
}


{


gdjs.GameCode.eventsList1(runtimeScene);
}


{


gdjs.GameCode.eventsList2(runtimeScene);
}


{


gdjs.GameCode.eventsList3(runtimeScene);
}


{


gdjs.GameCode.eventsList4(runtimeScene);
}


{


gdjs.GameCode.eventsList6(runtimeScene);
}


{


gdjs.GameCode.eventsList7(runtimeScene);
}


{


gdjs.GameCode.eventsList10(runtimeScene);
}


{


gdjs.GameCode.eventsList14(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDPlataformaObjects1.length = 0;
gdjs.GameCode.GDPlataformaObjects2.length = 0;
gdjs.GameCode.GDPlataformaObjects3.length = 0;
gdjs.GameCode.GDPlataformaObjects4.length = 0;
gdjs.GameCode.GDChaoObjects1.length = 0;
gdjs.GameCode.GDChaoObjects2.length = 0;
gdjs.GameCode.GDChaoObjects3.length = 0;
gdjs.GameCode.GDChaoObjects4.length = 0;
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects4.length = 0;
gdjs.GameCode.GDBarraObjects1.length = 0;
gdjs.GameCode.GDBarraObjects2.length = 0;
gdjs.GameCode.GDBarraObjects3.length = 0;
gdjs.GameCode.GDBarraObjects4.length = 0;
gdjs.GameCode.GDDoceObjects1.length = 0;
gdjs.GameCode.GDDoceObjects2.length = 0;
gdjs.GameCode.GDDoceObjects3.length = 0;
gdjs.GameCode.GDDoceObjects4.length = 0;
gdjs.GameCode.GDCenarioObjects1.length = 0;
gdjs.GameCode.GDCenarioObjects2.length = 0;
gdjs.GameCode.GDCenarioObjects3.length = 0;
gdjs.GameCode.GDCenarioObjects4.length = 0;
gdjs.GameCode.GDInimigo1Objects1.length = 0;
gdjs.GameCode.GDInimigo1Objects2.length = 0;
gdjs.GameCode.GDInimigo1Objects3.length = 0;
gdjs.GameCode.GDInimigo1Objects4.length = 0;
gdjs.GameCode.GDPausaObjects1.length = 0;
gdjs.GameCode.GDPausaObjects2.length = 0;
gdjs.GameCode.GDPausaObjects3.length = 0;
gdjs.GameCode.GDPausaObjects4.length = 0;
gdjs.GameCode.GDPlayObjects1.length = 0;
gdjs.GameCode.GDPlayObjects2.length = 0;
gdjs.GameCode.GDPlayObjects3.length = 0;
gdjs.GameCode.GDPlayObjects4.length = 0;
gdjs.GameCode.GDreplayObjects1.length = 0;
gdjs.GameCode.GDreplayObjects2.length = 0;
gdjs.GameCode.GDreplayObjects3.length = 0;
gdjs.GameCode.GDreplayObjects4.length = 0;
gdjs.GameCode.GDmenuObjects1.length = 0;
gdjs.GameCode.GDmenuObjects2.length = 0;
gdjs.GameCode.GDmenuObjects3.length = 0;
gdjs.GameCode.GDmenuObjects4.length = 0;
gdjs.GameCode.GDMaskObjects1.length = 0;
gdjs.GameCode.GDMaskObjects2.length = 0;
gdjs.GameCode.GDMaskObjects3.length = 0;
gdjs.GameCode.GDMaskObjects4.length = 0;

gdjs.GameCode.eventsList15(runtimeScene);
return;

}

gdjs['GameCode'] = gdjs.GameCode;
