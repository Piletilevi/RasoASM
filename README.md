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


## Execute

```
> ipy print_fiscal_lt.ipy fiscal_json_file.plp
```
or
```
> set PLP_FILENAME=fiscal_json_file.plp
> ipy print_fiscal_lt.ipy
```
