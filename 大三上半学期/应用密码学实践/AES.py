from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
import base64


# 加密函数
def aes_encrypt(data, key):
    # AES要求密钥长度为16、24或32字节
    key = key.encode('utf-8')  # 转为字节
    cipher = AES.new(key, AES.MODE_CBC)  # 使用CBC模式创建AES对象

    # 对数据进行填充，使其长度为16的倍数
    data = data.encode('utf-8')  # 转为字节
    padded_data = pad(data, AES.block_size)  # 填充

    # 加密数据
    encrypted_data = cipher.encrypt(padded_data)

    # 返回加密后的数据，包含IV（初始向量）
    # 将IV和加密数据一起返回，方便解密时使用
    return base64.b64encode(cipher.iv + encrypted_data).decode('utf-8')


# 解密函数
def aes_decrypt(encrypted_data, key):
    encrypted_data = base64.b64decode(encrypted_data)  # 解码Base64数据

    # 提取IV（前16个字节是IV）
    iv = encrypted_data[:16]
    encrypted_data = encrypted_data[16:]  # 剩下的是加密数据

    # 创建AES对象，并使用提取的IV
    key = key.encode('utf-8')  # 转为字节
    cipher = AES.new(key, AES.MODE_CBC, iv)  # 使用CBC模式创建AES对象

    # 解密数据，并移除填充
    decrypted_data = unpad(cipher.decrypt(encrypted_data), AES.block_size)

    return decrypted_data.decode('utf-8')


# 示例使用
key = "JerryHuangandyou"  # 密钥需要是16、24或32字节（16字节为AES-128）
data = "This is a secret message"

# 加密
encrypted = aes_encrypt(data, key)
print("Encrypted:", encrypted)

# 解密
decrypted = aes_decrypt(encrypted, key)
print("Decrypted:", decrypted)
