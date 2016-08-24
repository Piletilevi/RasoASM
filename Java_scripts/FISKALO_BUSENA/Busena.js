// --------------------------------------------------------------------------
// FISKALO BUSENOS NUSKAITYMAS
var fb = new ActiveXObject("POS.SA97");
fb.Init("COM1",57600,15);
fb.FCancel();
// --------------------------------------------------------------------------
var varBusena = fb.GetParameter(1015);
WScript.Echo("Iki kvito Busena="+varBusena)
fb.FStart(0);
fb.FOperation("Prekës pavadinimas",1.0,2.5,0);
varBusena=fb.GetParameter(1015)
WScript.Echo("Kvito viduje Busena="+varBusena)
fb.FFinish7("KREDITAS1",0.0,1,"KREDITAS2",0.0,2,"KREDITAS3",0.0,3,"KREDITAS4",0.0,5,"KREDITAS5",0.0,0,"GRYNIEJI",2.50,0,"LAISVA",0.0,6)
varBusena=fb.GetParameter(1015)
WScript.Echo("Po kvito Busena="+varBusena)
// --------------------------------------------------------------------------
fb.Close();
