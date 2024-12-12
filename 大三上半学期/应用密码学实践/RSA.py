from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_OAEP
from Crypto.Random import get_random_bytes

# 生成RSA密钥对
def generate_rsa_keys(bits=2048):
    key = RSA.generate(bits)
    private_key = key.export_key()
    public_key = key.publickey().export_key()
    return private_key, public_key

# 使用公钥加密
def encrypt_message(public_key, message):
    rsa_key = RSA.import_key(public_key)
    cipher = PKCS1_OAEP.new(rsa_key)
    encrypted_message = cipher.encrypt(message.encode())
    return encrypted_message

# 使用私钥解密
def decrypt_message(private_key, encrypted_message):
    rsa_key = RSA.import_key(private_key)
    cipher = PKCS1_OAEP.new(rsa_key)
    decrypted_message = cipher.decrypt(encrypted_message).decode()
    return decrypted_message

# 示例：生成密钥、加密和解密
if __name__ == "__main__":
    # 生成RSA密钥对
    private_key, public_key = generate_rsa_keys()

    # 待加密的消息
    message = "Hello, this is a secret message!"

    # 使用公钥加密
    encrypted_message = encrypt_message(public_key, message)
    print(f"Encrypted Message: {encrypted_message.hex()}")

    # 使用私钥解密
    decrypted_message = decrypt_message(private_key, encrypted_message)
    print(f"Decrypted Message: {decrypted_message}")
