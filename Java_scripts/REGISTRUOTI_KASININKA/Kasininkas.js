// --------------------------------------------------------------------------
// PREKES-PASLAUGOS GRAZINIMAS (FOperationEx)
var fb = new ActiveXObject("POS.SA97");
fb.Init("COM1",57600,15);
fb.FCancel();
// --------------------------------------------------------------------------
fb.SetParameter(11,"Vardenis Pavardenis")
// --------------------------------------------------------------------------
fb.Close();
