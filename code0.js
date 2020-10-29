gdjs.LogoCode = {};
gdjs.LogoCode.GDlogoObjects1= [];
gdjs.LogoCode.GDlogoObjects2= [];
gdjs.LogoCode.GDlogoObjects3= [];

gdjs.LogoCode.conditionTrue_0 = {val:false};
gdjs.LogoCode.condition0IsTrue_0 = {val:false};
gdjs.LogoCode.condition1IsTrue_0 = {val:false};


gdjs.LogoCode.eventsList0 = function(runtimeScene) {

{


gdjs.LogoCode.condition0IsTrue_0.val = false;
{
gdjs.LogoCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LogoCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.LogoCode.GDlogoObjects2);
{for(var i = 0, len = gdjs.LogoCode.GDlogoObjects2.length ;i < len;++i) {
    gdjs.LogoCode.GDlogoObjects2[i].setOpacity(0);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.LogoCode.GDlogoObjects2);
{for(var i = 0, len = gdjs.LogoCode.GDlogoObjects2.length ;i < len;++i) {
    gdjs.LogoCode.GDlogoObjects2[i].setOpacity(gdjs.LogoCode.GDlogoObjects2[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 50));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.LogoCode.GDlogoObjects1);

gdjs.LogoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LogoCode.GDlogoObjects1.length;i<l;++i) {
    if ( gdjs.LogoCode.GDlogoObjects1[i].getOpacity() >= 200 ) {
        gdjs.LogoCode.condition0IsTrue_0.val = true;
        gdjs.LogoCode.GDlogoObjects1[k] = gdjs.LogoCode.GDlogoObjects1[i];
        ++k;
    }
}
gdjs.LogoCode.GDlogoObjects1.length = k;}if (gdjs.LogoCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


};gdjs.LogoCode.eventsList1 = function(runtimeScene) {

{


gdjs.LogoCode.eventsList0(runtimeScene);
}


};

gdjs.LogoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LogoCode.GDlogoObjects1.length = 0;
gdjs.LogoCode.GDlogoObjects2.length = 0;
gdjs.LogoCode.GDlogoObjects3.length = 0;

gdjs.LogoCode.eventsList1(runtimeScene);
return;

}

gdjs['LogoCode'] = gdjs.LogoCode;
