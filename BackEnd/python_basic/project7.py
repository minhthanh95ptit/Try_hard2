'''
Một file csv chứa danh sách các mặt hàng đã được bán ra của một cửa hàng trong ngày, 
mỗi dòng là thông tin về một lần khách mua hàng bao gồm :
mã hàng hóa, số lượng hàng hóa bán ra, giá bán ra, giá gốc nhập về. 
Các dòng khác nhau có thể có cùng mã hàng hóa (nhiều người mua cùng 1 mặt hàng). 
Viết chương trình tạo ra file csv trong đó mỗi dòng chứa thông tin về tình trạng kinh doanh của một mặt hàng, 
gồm các cột : mã hàng hóa (chỉ tính một lần duy nhất cho các lần mua khác nhau của cùng một mặt hàng), tổng số lượng đã bán, tổng doanh số (số tiền thu được do bán hàng), tổng lợi nhuận (số tiền thu được sau khi trừ đi giá gốc nhập về). 
Các mặt hàng xếp theo trình tự giảm dần của doanh số. 
Ví dụ :

File input.csv:

VINAMILK01, 5, 27000, 20000

THMILK03, 10, 28000, 20000

OMACHI05, 2, 6000, 4000

VINAMILK01, 5, 27000, 20000

VINAMILK01, 10, 27000, 20000

OMACHI05, 5, 6000, 4000

File output.csv:

VINAMILK01, 20, 540000, 140000

THMILK03, 10, 280000, 80000

OMACHI05, 7, 42000, 14000

'''

listSP = []
with open('output7.csv', 'w', encoding='utf-8') as fout:
    with open('input7.csv', 'r', encoding='utf-8') as fin:

        
        for line in fin:
            tenma, doanhso, tienban, tiengoc = line.strip().split(',')

            doanhso = int(doanhso)
            tienban = float(tienban)
            tiengoc = float(tiengoc)

            #Append vao List
            listSP.append({
                'tenma' : tenma,
                'doanhso' : doanhso,
                'tienban' : tienban,
                'tiengoc' : tiengoc,
                'doanhthu': doanhso * tienban,
                'loinhuan' : doanhso * ( tienban - tiengoc)
            })
             
        SP = {}
       
        for sale in listSP:
            tenma = sale['tenma']   
            if tenma not in SP:
                SP[tenma] = {'doanhso' : 0, 'doanhthu' : 0, 'loinhuan' : 0}
            
            SP[tenma]['doanhso'] += sale['doanhso']
            SP[tenma]['doanhthu'] += sale['doanhthu']
            SP[tenma]['loinhuan'] += sale['loinhuan']

        result = sorted(SP.items(), reverse= True)

        for item in result:
        #    print(item)
           # fout.write(item)
            fout.write(f"{item[0]}, {item[1]['doanhso']}, {item[1]['doanhthu']}, {item[1]['loinhuan']}\n")

#        print(result)

#            fout.write(motSP)
          #  fout.write(listSP)


