import base64

msg = 'Xin chào'
msg_bytes = msg.encode('utf-8')
b64_msg_bytes = base64.b64encode(msg_bytes)
b64_msg = b64_msg_bytes.decode()

print(b64_msg)
