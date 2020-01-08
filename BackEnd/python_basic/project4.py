'''
Project 4: Chuyển phát âm tiếng Việt của một số trong phạm vi 1-99 
thành giá trị số đó. Ví dụ : tám mươi lăm → 85
'''

list_1 = ['không','một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín', 'mười']
list_2 = ['một', 'hai', 'ba', 'tư', 'lăm', 'sáu', 'bảy', 'tám', 'chín']
text = "chín mươi"

list_word =  text.split()

if len(list_word) == 1:
    chuso =  list_word[0]
    print(list_1.index(chuso))
elif len(list_word) == 2:
    if list_word[1] ==  'mươi' :
        print(list_1.index(list_word[0]) * 10)
    else:
        print(10 + list_1.index(list_word[0]))
elif len(list_word) == 3:
    print(list_1.index(list_word[0]) * 10 + list_2.index(list_word[2]) + 1 )