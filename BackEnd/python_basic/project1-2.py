#Bai 2

'''
2.	Nhập vào từ bàn phím 3 giá trị ngày, tháng, năm của một ngày 
trong thế kỉ 21. Kiểm tra ngày đó có tồn tại không. 
Ví dụ:  
Ngày 29/2/2000 :có tồn tại  
Ngày 29/2/2001 :không tồn tại  
Ngày 31/7/2010 :có tồn tại  
Ngày 31/6/2016 :không tồn tại

Gợi ý:
Check theo tháng:
TH1 :Nếu là tháng 2
    - Check theo năm
        + Nếu năm nhuận -> tháng có số ngày trong khoảng 0 <= day <= 29
        + Nếu không nhuận -> tháng có số ngày trong khoảng 0 <= day <= 28

TH2: Nếu là tháng 1,3,5,7,8,10,12 
    - Ngày thuộc 0 <= day <= 31
TH3: Nếu là tháng 4 6, 8, 9, 11
    - Ngày thuộc 0 <= day <= 30
TH4: Nếu tháng không thuộc 1-> 12 thì in ra không tồn tại

'''

ngay = int(input('Ngay:'))
thang = int(input('Thang:'))
nam = int(input('Nam:'))


if thang == 2:
    if (nam % 4 == 0 and nam % 100 != 0) or (nam % 100 == 0 and nam % 400 == 0):
        if ngay <= 29:
            print('Có tồn tại')
        else:
            print('Không tồn tại')
    else:
        if ngay <= 28:
            print('Có tồn tại')
        else:
            print('Không tồn tại')
else:
    if (thang == 1 or thang == 3 or thang == 5 or thang == 7 or thang == 8 or thang == 10 or thang == 12):
        if ngay >= 0 and ngay <= 31:
            print('Có tồn tại')
        else:
            print('Không tồn tại')
    elif (thang == 4 or thang == 6 or thang == 9 or thang == 11) :
        if ngay >= 0 and ngay <= 30:
            print('Có tồn tại')
        else:
            print('Không tồn tại')
    else:
        print('Không tồn tại')
