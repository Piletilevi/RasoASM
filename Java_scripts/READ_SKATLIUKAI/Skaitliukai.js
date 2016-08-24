// --------------------------------------------------------------------------
// SKATLIUKU NUSKAITYMAS
var fb = new ActiveXObject("POS.SA97");
fb.Init("COM1",57600,15);
fb.FCancel();
// --------------------------------------------------------------------------
var varZno = fb.GetParameter(3001)
WScript.Echo("Z numeris="+varZno)
var varFrc = fb.GetParameter(3002)
WScript.Echo("Fiskaliniu kvitu skaicius="+varFrc)
var varNrc = fb.GetParameter(3003)
WScript.Echo("Nefiskaliniu kvitu skaicius="+varNrc)
var varNxc = fb.GetParameter(3004)
WScript.Echo("Sekancio kvito numeris="+varNxc)
var varCash = fb.GetParameter(3029)
WScript.Echo("Grynuju kasoje="+varCash)
var varGT = fb.GetParameter(1020)
WScript.Echo("GT="+varGT)
// --------------------------------------------------------------------------
fb.Close();
