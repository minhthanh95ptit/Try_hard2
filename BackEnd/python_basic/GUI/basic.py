from tkinter import *

scr = Tk()
scr.title("Check Button - Tkinter Widgets")

value = BooleanVar() 
value.set(True)

chk1 = Checkbutton(scr, text = "HTML", height=2, width = 20, var=value)
chk2 = Checkbutton(scr, text = "PHP", height=2, width = 20)
chk3 = Checkbutton(scr, text = "CSS", height=2, width = 20, cursor="dotbox")
chk4 = Checkbutton(scr, text = "Ruby", height=2, width = 20)

chk4.select()

chk1.pack()
chk2.pack()
chk3.pack()
chk4.pack()

scr.mainloop()