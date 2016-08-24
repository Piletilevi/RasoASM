// --------------------------------------------------------------------------
// BARKODO EAN13 SPAUSDINIMAS
var fb = new ActiveXObject("POS.SA97");
fb.Init("COM1",57600,15);
fb.FCancel();
// --------------------------------------------------------------------------
fb.FStart(0);
fb.Print("Barcode EAN13:1234567890128")
fb.SendEsc("1D6B0231323334353637383930313200")
fb.FFinish7("KREDITAS1",0.0,1,"KREDITAS2",0.0,2,"KREDITAS3",0.0,3,"KREDITAS4",0.0,5,"KREDITAS5",0.0,0,"GRYNIEJI",0.0,0,"LAISVA",0.0,6)
// --------------------------------------------------------------------------
fb.Close();
