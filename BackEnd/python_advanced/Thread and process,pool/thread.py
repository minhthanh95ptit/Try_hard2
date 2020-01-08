import time
from threading import Thread

def threadFunc():
   time.sleep(2)
   print('Inside thread')
        
thr = Thread(target=threadFunc)
thr.start()

time.sleep(5)
print('Inside main program')