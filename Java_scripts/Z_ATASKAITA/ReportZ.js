// --------------------------------------------------------------------------
// DIENOS Z ATASKAITA
var fb = new ActiveXObject("POS.SA97");
fb.Init("COM1",57600,15);
fb.FCancel();
// --------------------------------------------------------------------------
fb.ReportZ();
// --------------------------------------------------------------------------
fb.Close();
