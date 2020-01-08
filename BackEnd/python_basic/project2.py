from datetime import datetime
import pytz

dt = datetime.now()

print(dt)

tz_NY = pytz.timezone('America/New_York')
datetime_NY = datetime.now(tz_NY)
print('NY:',datetime_NY.strftime("%m/%d/%Y, %H:%M:%S"))

tz_LD = pytz.timezone('Europe/London')
datetime_LD = datetime.now(tz_LD)
print('LD:',datetime_LD.strftime("%m/%d/%Y, %H:%M:%S"))