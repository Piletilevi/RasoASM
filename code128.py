import string

def encode_code128(chaine):

    def testnum(chaine):
        for i in chaine:
            if not i in string.digits:
                return False
        return True

    Code128 = ""
    tableB = True
    i = 0
    while i < len(chaine):
        if tableB == True:
            #"B == 1a"
            if i < len(chaine) - 4:
                if testnum(chaine[i:4]):
                    if i == 0:
                        #"START_C"
                        Code128 = chr(210) #f
                    else:
                        #"CODE_C"
                        Code128 = Code128 + chr(204) #f
                    tableB = False
                else:
                    if i == 0:
                        #"START_B"
                        Code128 = chr(209) #f
                        tableB = True
            else:
                if i == 0:
                    #"START_B"
                    Code128 = chr(209) #f
                    tableB = True
        if tableB == False:
            #"B == 0"
            if testnum(chaine[i:i+2]) and i <= (len(chaine) - 2):
                dummy = int(chaine[i:i+2])
                #"TABLE_C processing 2:%s"%chaine[i:i+2]
                if dummy < 95:
                    dummy += 32
                else:
                    dummy += 105 #f
                Code128 = Code128 + chr(dummy)
                i = i + 2
            else:
                #"TABLE_C->CODE_B"
                Code128 = Code128 + chr(205) #f
                tableB = True
        if tableB == True:
            #"B==1b"
            Code128 = Code128 + chaine[i]
            i = i + 1
    for i, dum in enumerate(Code128):
        dummy = ord(dum)
        if dummy < 127:
            dummy -= 32
        else:
            dummy -= 105 #f
        if i == 0:
            checksum = dummy
        checksum += i * dummy
        while checksum >= 103: # mod 103
            checksum -= 103
    if checksum < 95:
        checksum += 32
    else:
        checksum += 105 #f
    Code128 = Code128 + chr(checksum) + chr(211)
    # return Code128
    return Code128.encode('hex').upper()

print encode_code128('foo')
