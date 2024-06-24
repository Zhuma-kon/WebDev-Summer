x = input()

reversed_x = ''

for digit in x[::-1]:
    if digit != '0' or reversed_x: 
        reversed_x += digit  

if reversed_x:  
    print(int(reversed_x))
else:  
    print(0)