from threading import Thread

a = [0] * 5

def threadFunc(id):
   s = 0
   for i in range(1000):
       s += 1
       
   a[id] = s

if __name__ == '__main__':
   threads = []
   
   for i in range(5):
       t = Thread(target=threadFunc, args=(i,))
       threads.append(t)
       t.start()
       
   for thr in threads:
       thr.join()
       
   print(a)