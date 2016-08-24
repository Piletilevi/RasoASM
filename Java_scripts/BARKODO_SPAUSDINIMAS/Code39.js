// --------------------------------------------------------------------------
// BARKODO Code39 SPAUSDINIMAS
var fb = new ActiveXObject("POS.SA97");
fb.Init("COM1",57600,15);
fb.FCancel();
// --------------------------------------------------------------------------
fb.FStart(0);
fb.Print("Barcode Code39:NK12312345NUOL18")
fb.SendEsc("1D6B044E4B31323331323334354E554F4C313800")
fb.FFinish7("KREDITAS1",0.0,1,"KREDITAS2",0.0,2,"KREDITAS3",0.0,3,"KREDITAS4",0.0,5,"KREDITAS5",0.0,0,"GRYNIEJI",0.0,0,"LAISVA",0.0,6)
// --------------------------------------------------------------------------
fb.Close();
