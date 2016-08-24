// --------------------------------------------------------------------------
// PREKES-PASLAUGA SU KOMENTARAIS
var fb = new ActiveXObject("POS.SA97");
fb.Init("COM1",57600,15);
fb.FCancel();
// --------------------------------------------------------------------------
fb.FStart(0);
fb.FOperation("Prekës pavadinimas",1.0,2.5,0);
fb.Print("             Garantinës sàlygos:")
fb.Print("12345678901234567890123456789012345678901234567")
fb.Print("Textas Textas Textas Textas Textas Textas Texts")
fb.Print("Textas Textas Textas Textas Textas Textas Texts")
fb.Print("Textas Textas Textas Textas Textas Textas Texts")
fb.Print("Textas Textas Textas Textas Textas Textas Texts")
fb.Print("Textas Textas Textas Textas Textas Textas Texts")
fb.SendEsc("1D2102") // Horizontal 0 Vertikaliai 2
fb.Print("        ")
fb.SendEsc("1D2112") // Horizontal 1 Vertikaliai 2
fb.Print("         5 EUR")
fb.SendEsc("1D2122") // Horizontal 1 Vertikaliai 2
fb.Print("     5 EUR")
fb.SendEsc("1B2101") // Vertikaliai FontB
fb.FFinish3("KREDITAS1",0,1,"KREDITAS2",0,2,"GRYNIEJI",110,0)
// --------------------------------------------------------------------------
fb.Close();
