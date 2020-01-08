#Bai 3
'''
3.	Một người có 100 triệu VND và quyết định gửi tiết kiệm. 
Người đó gửi theo kỳ hạn từng 6 tháng một, kết thúc kỳ hạn số tiền lãi được chuyển nhập vào gốc để gửi cho kỳ hạn tiếp. 
Lãi suất cho một kỳ hạn là 3%. Viết chương trình để in ra số tiền của người đó sau các kỳ hạn từ 1 đến 10.

'''

tienGoc = 100000000
laiSuatMotKyHan = 0.03

soKyHan = int(input(''))

for i in range(1,soKyHan + 1):
    tongTien = tienGoc + tienGoc * laiSuatMotKyHan
    tienGoc = tongTien

print('Tong Tien:', tongTien)