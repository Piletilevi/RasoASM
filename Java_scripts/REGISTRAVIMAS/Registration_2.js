// --------------------------------------------------------------------------
// PREKES-PASLAUGOS REGISTRAVIMAS (FOperationEx)
var fb = new ActiveXObject("POS.SA97");
fb.Init("COM1",57600,15);
fb.FCancel();
// --------------------------------------------------------------------------
fb.FStart(0);
fb.Print("* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ");
fb.FOperationEx("4444444444444","Prekës pavadinimas",1.0,3,2.5,2,0);
fb.Print("* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ");
fb.FFinish7("KREDITAS1",0.0,1,"KREDITAS2",0.0,2,"KREDITAS3",0.0,3,"KREDITAS4",0.0,5,"KREDITAS5",0.0,0,"GRYNIEJI",2.50,0,"LAISVA",0.0,6)
// --------------------------------------------------------------------------
fb.Close();
