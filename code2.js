gdjs.HistoriaCode = {};
gdjs.HistoriaCode.GDHistoriaObjects1= [];
gdjs.HistoriaCode.GDHistoriaObjects2= [];
gdjs.HistoriaCode.GDBotaoObjects1= [];
gdjs.HistoriaCode.GDBotaoObjects2= [];

gdjs.HistoriaCode.conditionTrue_0 = {val:false};
gdjs.HistoriaCode.condition0IsTrue_0 = {val:false};
gdjs.HistoriaCode.condition1IsTrue_0 = {val:false};
gdjs.HistoriaCode.condition2IsTrue_0 = {val:false};


gdjs.HistoriaCode.mapOfGDgdjs_46HistoriaCode_46GDBotaoObjects1Objects = Hashtable.newFrom({"Botao": gdjs.HistoriaCode.GDBotaoObjects1});gdjs.HistoriaCode.eventsList0 = function(runtimeScene) {

{


gdjs.HistoriaCode.condition0IsTrue_0.val = false;
{
gdjs.HistoriaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.HistoriaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Historia2", false);
}}

}


};gdjs.HistoriaCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.HistoriaCode.condition0IsTrue_0.val = false;
{
gdjs.HistoriaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.HistoriaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Historia"), gdjs.HistoriaCode.GDHistoriaObjects1);
{for(var i = 0, len = gdjs.HistoriaCode.GDHistoriaObjects1.length ;i < len;++i) {
    gdjs.HistoriaCode.GDHistoriaObjects1[i].setAnimationName("hist1");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Botao"), gdjs.HistoriaCode.GDBotaoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Historia"), gdjs.HistoriaCode.GDHistoriaObjects1);

gdjs.HistoriaCode.condition0IsTrue_0.val = false;
gdjs.HistoriaCode.condition1IsTrue_0.val = false;
{
gdjs.HistoriaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.HistoriaCode.mapOfGDgdjs_46HistoriaCode_46GDBotaoObjects1Objects, runtimeScene, true, false);
}if ( gdjs.HistoriaCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.HistoriaCode.GDHistoriaObjects1.length;i<l;++i) {
    if ( gdjs.HistoriaCode.GDHistoriaObjects1[i].isCurrentAnimationName("hist1") ) {
        gdjs.HistoriaCode.condition1IsTrue_0.val = true;
        gdjs.HistoriaCode.GDHistoriaObjects1[k] = gdjs.HistoriaCode.GDHistoriaObjects1[i];
        ++k;
    }
}
gdjs.HistoriaCode.GDHistoriaObjects1.length = k;}}
if (gdjs.HistoriaCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.HistoriaCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.HistoriaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HistoriaCode.GDHistoriaObjects1.length = 0;
gdjs.HistoriaCode.GDHistoriaObjects2.length = 0;
gdjs.HistoriaCode.GDBotaoObjects1.length = 0;
gdjs.HistoriaCode.GDBotaoObjects2.length = 0;

gdjs.HistoriaCode.eventsList1(runtimeScene);
return;

}

gdjs['HistoriaCode'] = gdjs.HistoriaCode;
