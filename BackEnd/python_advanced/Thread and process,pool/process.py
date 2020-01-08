from multiprocessing import Process

def processFunc(pid):    
   s = 0
   for i in range(10000000):
       s += 1
       
   print(f'Process id : {pid}, result : {s}')

if __name__ == '__main__':
   processes = []
   
   for i in range(5):
       p = Process(target=processFunc, args=(i,))
       processes.append(p)
       p.start()
       
   for p in processes:
       p.join()
   
   print('All process completed')
