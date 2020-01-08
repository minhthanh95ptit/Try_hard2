#Bai 1:
'''
1.	Viết chương trình tìm 2 số khi biết tổng và tỉ số. 
Nhập vào từ bàn phím các giá trị S : tổng 2 số, R : tỉ số của 2 số, 
in ra màn hình giá trị 2 số đó

Loi giai:
    x + y = S -> x = S - y
    x / y = R -> (S - y) / y = R -> y = S / ( R + 1)



# Nhap tong 

S = int(input('S = '))
R = float(input('R = '))

y = S / (R + 1)
x = S - y

print('x = ',x)
print('y = ',y)