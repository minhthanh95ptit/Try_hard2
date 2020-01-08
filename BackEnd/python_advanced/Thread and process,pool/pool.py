from multiprocessing import Pool

def poolFunc(id):
   print('Process id : ', id)
   s = 0
   for i in range(1000):
       s += 1
       
   return s
   
if __name__ == '__main__':
   p = Pool(5)
   a = p.map(poolFunc, list(range(5)))
   print(a)