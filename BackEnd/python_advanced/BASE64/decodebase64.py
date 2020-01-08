import base64

msg = 'WGluIGNow6Bv'
msg_bytes = msg.encode()
decoded_msg_bytes = base64.b64decode(msg_bytes)
decoded_msg = decoded_msg_bytes.decode('utf-8')

print(decoded_msg)
