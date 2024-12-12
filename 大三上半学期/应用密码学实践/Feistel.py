import random
def string_to_binary(input_string):
    """
    将字符串转换为二进制形式的字符串
    """
    return ''.join(format(ord(char), '08b') for char in input_string)
def generate_random_binary(length):
    """
    生成随机的二进制数组
    """
    return ''.join(random.choice('01') for _ in range(length))
def round_function(binary1, binary2):
    """
    对两个二进制字符串进行按位与计算
    """
    return ''.join('1' if b1 == '1' and b2 == '1' else '0' for b1, b2 in zip(binary1, binary2))
def binary_xor(binary1, binary2):
    """
    对两个二进制字符串进行按位异或计算
    """
    return ''.join('1' if b1 != b2 else '0' for b1, b2 in zip(binary1, binary2))

def binary_to_string(binary_string):
    """
        将二进制字符串转换回可读的字符
        """
    # 确保二进制字符串长度是8的倍数
    if len(binary_string) % 8 != 0:
        raise ValueError("二进制字符串的长度必须是8的倍数")

    # 按每8位切分并转换为字符
    characters = [
        chr(int(binary_string[i:i + 8], 2)) for i in range(0, len(binary_string), 8)
    ]
    return ''.join(characters)

def feistel(data, number_of_round):
    data_bin = string_to_binary(data)
    random_key = generate_random_binary(int(len(data_bin)//2))
    right, left = data_bin[len(data_bin)//2:], data_bin[:len(data_bin)//2:]
    ciper_book = []
    for i in range(number_of_round):
        right_new = round_function(right, random_key)
        left, right= right, binary_xor(left, right_new)
        ciper_book.append(right_new)
    ciptertext_bin =left + right
    ciptertext = binary_to_string(ciptertext_bin)
    return ciptertext, ciper_book

def feistel_discode(cipertext, ciper_book):
    cipertext_bin = string_to_binary(cipertext)
    right, left = cipertext_bin[len(cipertext_bin)//2:], cipertext_bin[:len(cipertext_bin)//2]
    for i in range(len(ciper_book)):
        left, right = binary_xor(right, ciper_book[len(ciper_book)-i-1]), left
    plaintext_bin =left + right
    plaintext = binary_to_string(plaintext_bin)
    print(f"The palintext of the ciptertext is: {plaintext}")
    return plaintext

plaintext = 'My name is jerryhuang'
cipertext ,ciper_book= feistel(plaintext, 9)
print(f"The ciptertext generate by feistel is: {cipertext}")
print(f"The cipter_book of the ciptertext is {ciper_book}")
feistel_discode(cipertext, ciper_book)