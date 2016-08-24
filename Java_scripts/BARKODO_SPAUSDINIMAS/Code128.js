// --------------------------------------------------------------------------
// BARKODO Code128 SPAUSDINIMAS
var fb = new ActiveXObject("POS.SA97");
fb.Init("COM1",57600,15);
fb.FCancel();
// --------------------------------------------------------------------------
fb.FStart(0);
fb.Print("Barcode Code128:0112345678901297")
fb.SendEsc("1D6B49127B4230313132333435363738393031323937") // Barkodo spausdinimas
fb.FFinish7("KREDITAS1",0.0,1,"KREDITAS2",0.0,2,"KREDITAS3",0.0,3,"KREDITAS4",0.0,5,"KREDITAS5",0.0,0,"GRYNIEJI",0.0,0,"LAISVA",0.0,6)
// --------------------------------------------------------------------------
fb.Close();
