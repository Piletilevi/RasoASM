# RasoASM

## Prerequisite
IronPython has to be installed from http://ironpython.net/


========================================================================
       SHORT "SA97.DLL" INSTALLING DESCRIPTION
   (Full installing description in the file "posdll_en.doc")
========================================================================
1.  If necessary, install the USB driver for fiscal device. How to
    install see in the directory "..\USB\".
2.  Copy all files to the directory "C:\ASM\".
    P.S. Directory "C:\ASM\" must be with full accesses for reading and
    writing.
3.  Electronic journal will be in the  directory "C:\ASM\RASO01FB\".
    P.S. Other copy electronic journal will be in the microSD in the
         fiscal device.
4.  In the file "C:\ASM\posdx.cfg" you can set parameters:
    [MAIN]
    // DLL working in the terminal mode
    Proxy=no
    // using long name for item registration
   LongFOText=no
    // convert Windows fonts to the MS-DOS (only for Latvia)
    COUNTRY=LV
    [INTERFACE]
    // communication port number
    COM=COM2
    // communication port speed
    SPEED=57600
    // if communication settings using us main, set "YES"
    IGNOREINIT=YES
5.  Register "SA97.DLL":
    a) If before was old version, unregister old "sa97.dll" version:
       "Start" -> "Run" -> "regsvr32.exe /u C:\ASM\sa97.dll" -> [Enter].
    b) Copy new version "sa97.dll" to directory "C:\ASM\".
    c) Register new "sa97.dll" version:
       "Start" -> "Run" -> "regsvr32.exe C:\ASM\sa97.dll" -> [Enter].
    P.S. For installing in the Windows Vista sometimes can prevent
         various "Microsoft" settings. Also user must be us administrator.
         For this need:
         a) Mouse left click: "Start" -> "Programs" -> "Accessories" ->;
            Mouse right clicks: "Command Prompt" -> "Run as administrator".
         b) [Run...] -> "msconfig" -> [OK] -> [Continue] -> Tab "Tools" ->
            Select "Disable UAC" -> [Launch];
         c) [Run...] -> "C:\WINDOWS\SYSTEM32\regsvr32.exe C:\ASM\sa97.dll"
            -> [Enter].
6.  Driver "SA97.DLL" have LOG file "C:\ASM\sa97.log". In this file you can
    see the history.
    P.S. Sometimes antivirus programs can prevent write to this LOG file
         and may be slowdown effect.
    P.S. Sometimes with user application and "SA97.DLL" must be disagreement.
         In this case register "SA97.DLL" like the COM+ object.  Uninstall
         the "SA97.DLL" and installing "SA97.MSI".
    P.S. Sometimes in the Windows OS is turned on the blocking unknown
         drivers installing. To turn off this blocking:
         "My Computer" -> "Properties" -> "Hardware" -> "Driver Signing"
         -> and set "Warn - Prompt me each time to choose an action"
========================================================================
