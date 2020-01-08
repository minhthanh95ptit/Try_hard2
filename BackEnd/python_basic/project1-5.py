#Bai 5
'''
5.	Chuyển một số trong phạm vi 0-99 thành phát âm tiếng Việt.
 Ví dụ : 85 → tám mươi lăm
'''

so = int(input('Nhap:'))
str1 = ''
str2 = ''

hangDonVi = so % 10

if hangDonVi == 1:
    str2 = 'Mốt'
elif hangDonVi == 2:
    str2 = 'Hai'
elif hangDonVi == 3:
    str2 = 'Ba'
elif hangDonVi == 4:
    str2 = 'Tư'
elif hangDonVi == 5:
    str2 = 'Lăm'
elif hangDonVi == 6:
    str2 = 'Sáu'
elif hangDonVi == 7:
    str2 = 'Bảy'
elif hangDonVi == 8:
    str2 = 'Tám'
elif hangDonVi == 9:
    str2 = 'Chín'
elif hangDonVi == 0:
    str2 = 'Mươi'

so //= 10

hangChuc = so % 10 

if hangChuc == 1:
    str1 = 'Một'
elif hangChuc == 2:
    str1 = 'Hai'
elif hangChuc == 3:
    str1 = 'Ba'
elif hangChuc == 4:
    str1 = 'Bốn'
elif hangChuc == 5:
    str1 = 'Năm'
elif hangChuc == 6:
    str1 = 'Sáu'
elif hangChuc == 7:
    str1 = 'Bảy'
elif hangChuc == 8:
    str1 = 'Tám'
elif hangChuc == 9:
    str1 = 'Chín'

kq =''
if hangDonVi != 0:
    kq = str1 + ' Mươi ' + str2
else:
    kq = str1 + ' ' + str2 

print(kq)
