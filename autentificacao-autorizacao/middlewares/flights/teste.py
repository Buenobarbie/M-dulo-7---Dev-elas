a = {};
parar = "fals"
while(parar != "false"):
    parar = input()
    if(parar):
        a[parar[:3]] = parar[5:]

print(a)