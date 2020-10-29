gdjs.Historia2Code = {};
gdjs.Historia2Code.GDHistoriaObjects1= [];
gdjs.Historia2Code.GDHistoriaObjects2= [];
gdjs.Historia2Code.GDBotaoObjects1= [];
gdjs.Historia2Code.GDBotaoObjects2= [];

gdjs.Historia2Code.conditionTrue_0 = {val:false};
gdjs.Historia2Code.condition0IsTrue_0 = {val:false};
gdjs.Historia2Code.condition1IsTrue_0 = {val:false};
gdjs.Historia2Code.condition2IsTrue_0 = {val:false};


gdjs.Historia2Code.mapOfGDgdjs_46Historia2Code_46GDBotaoObjects1Objects = Hashtable.newFrom({"Botao": gdjs.Historia2Code.GDBotaoObjects1});gdjs.Historia2Code.eventsList0 = function(runtimeScene) {

{


gdjs.Historia2Code.condition0IsTrue_0.val = false;
{
gdjs.Historia2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Historia2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.Historia2Code.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.Historia2Code.condition0IsTrue_0.val = false;
{
gdjs.Historia2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Historia2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Historia"), gdjs.Historia2Code.GDHistoriaObjects1);
{for(var i = 0, len = gdjs.Historia2Code.GDHistoriaObjects1.length ;i < len;++i) {
    gdjs.Historia2Code.GDHistoriaObjects1[i].setAnimationName("hist2");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Botao"), gdjs.Historia2Code.GDBotaoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Historia"), gdjs.Historia2Code.GDHistoriaObjects1);

gdjs.Historia2Code.condition0IsTrue_0.val = false;
gdjs.Historia2Code.condition1IsTrue_0.val = false;
{
gdjs.Historia2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Historia2Code.mapOfGDgdjs_46Historia2Code_46GDBotaoObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Historia2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Historia2Code.GDHistoriaObjects1.length;i<l;++i) {
    if ( gdjs.Historia2Code.GDHistoriaObjects1[i].isCurrentAnimationName("hist2") ) {
        gdjs.Historia2Code.condition1IsTrue_0.val = true;
        gdjs.Historia2Code.GDHistoriaObjects1[k] = gdjs.Historia2Code.GDHistoriaObjects1[i];
        ++k;
    }
}
gdjs.Historia2Code.GDHistoriaObjects1.length = k;}}
if (gdjs.Historia2Code.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Historia2Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Historia2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Historia2Code.GDHistoriaObjects1.length = 0;
gdjs.Historia2Code.GDHistoriaObjects2.length = 0;
gdjs.Historia2Code.GDBotaoObjects1.length = 0;
gdjs.Historia2Code.GDBotaoObjects2.length = 0;

gdjs.Historia2Code.eventsList1(runtimeScene);
return;

}

gdjs['Historia2Code'] = gdjs.Historia2Code;
