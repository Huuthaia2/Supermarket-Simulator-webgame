/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "sensor_landscape";

//-----libs-begin-----
loadLib("libs/laya.core.js")
loadLib("libs/laya.ui.js")
loadLib("libs/laya.d3.js")
loadLib("libs/laya.physics3D.js")
loadLib("external/md5/md5.js")
loadLib("external/bignumber/bignumber.js")
loadLib("external/NevMesh.js")
// loadLib("hagoJs/hagosdk-web.js")
// loadLib("hagoJs/hago-force-webgl1-patch.js")
//-----libs-end-------
loadLib("js/bundle.js");