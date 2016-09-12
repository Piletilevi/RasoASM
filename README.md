# RasoASM


## PLP files

[Sample .plp files](https://github.com/Piletilevi/printsrv/tree/master/sample_plp)  

PLP (PiletiLevi Print) files are JSON.  
```
{
  "info": "fiscal",
  "operation": "sale",
  "salesPoint": "* Bilietai BO",
  "printer": {
    "type": "fiscal",
    "systemName": "RasoASM"
  }
  "payments": [
    {
    ...
```
**Note**  
RasoASM only deals with PLP files where `printer.type = "fiscal"` and `printer.systemName = "RasoASM"`


## Developing prerequisite

IronPython has to be installed from http://ironpython.net/

## Compile distributable

- ipy pyc.py /main:print_fiscal_lt.ipy /target:exe
- deploy print_fiscal_lt.exe and print_fiscal_lt.dll
