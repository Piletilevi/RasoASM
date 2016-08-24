// --------------------------------------------------------------------------
// PREKES-PASLAUGA SU KOMENTARAIS
var fb = new ActiveXObject("POS.SA97");
fb.Init("COM1",57600,15);
fb.FCancel();
// --------------------------------------------------------------------------
fb.Print("             Garantinës sàlygos:")
fb.Print("12345678901234567890123456789012345678901234567")
fb.Print("Textas Textas Textas Textas Textas Textas Texts")
fb.Print("Textas Textas Textas Textas Textas Textas Texts")
fb.Print("Textas Textas Textas Textas Textas Textas Texts")
fb.Print("Textas Textas Textas Textas Textas Textas Texts")
fb.Print("Textas Textas Textas Textas Textas Textas Texts")
fb.NFFinish()
// --------------------------------------------------------------------------
fb.Close();
