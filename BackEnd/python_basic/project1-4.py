#Bai 4

'''
4.	Một người mua một căn hộ nhưng không đủ tiền nên vay ngân hàng một số tiền là 400 triệu VND. 
Lãi suất ngân hàng là 0% trong năm đầu tiên và 10% từ năm thứ 2 trở đi. 
Nếu mỗi tháng người đó trả ngân hàng 10 triệu thì khi sau bao lâu người đó thanh toán hết khoản nợ.

Bài này khá là phức tạp :(
'''

tienNo = 400000000
tienTraMoiThang = 10000000

demThang = 12
nam = 0
while tienNo > 0 :
    tienConLai = tienNo - tienTraMoiThang
    demThang -= 1
    tienNo = tienConLai

    if demThang == 0:
        tienConLai = tienConLai + tienConLai * 0.1 
        nam += 1
        demThang = 12


demThang = nam * 12 + (12 - demThang) 
print(demThang)