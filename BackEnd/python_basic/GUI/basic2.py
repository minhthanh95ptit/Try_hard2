from tkinter import *

scr = Tk()
scr.title("Check Button (Get Data) - Tkinter Widjgets")
var1 = IntVar()

def display():
    value = var1.get()
    select = ""
    if(value == 1):
        select = "Thank you"
    else:        
        select = "Click I Guess"
   
    label.config(text = select, font=("Arial", 20))

chk1 = Checkbutton(scr, text = "I Guess", var=var1, onvalue=1, offvalue="0",  command=display)
label = Label(scr)

label.pack()
chk1.pack()

scr.mainloop()