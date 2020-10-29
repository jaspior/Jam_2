gdjs.MenuCode = {};
gdjs.MenuCode.GDBotaoObjects1= [];
gdjs.MenuCode.GDBotaoObjects2= [];
gdjs.MenuCode.GDText2Objects1= [];
gdjs.MenuCode.GDText2Objects2= [];
gdjs.MenuCode.GDTextObjects1= [];
gdjs.MenuCode.GDTextObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBotaoObjects1Objects = Hashtable.newFrom({"Botao": gdjs.MenuCode.GDBotaoObjects1});gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Historia", false);
}}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Botao"), gdjs.MenuCode.GDBotaoObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDBotaoObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDBotaoObjects1.length = 0;
gdjs.MenuCode.GDBotaoObjects2.length = 0;
gdjs.MenuCode.GDText2Objects1.length = 0;
gdjs.MenuCode.GDText2Objects2.length = 0;
gdjs.MenuCode.GDTextObjects1.length = 0;
gdjs.MenuCode.GDTextObjects2.length = 0;

gdjs.MenuCode.eventsList1(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
