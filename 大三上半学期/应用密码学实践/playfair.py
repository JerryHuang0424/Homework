import numpy as np
import string
def in_matrix(matrix,item):
    for row in matrix:
        if item in row:
            return True
    return False

def generate_cipher_book(key):
    key =''.join(filter(str.isalpha, key.lower()))
    cipher_book = np.full((5,5),None,dtype=object)
    list_key = list(key)
    # 密码本基于密钥生成，先将密钥按此输入到密码本中，如果存在相同字母就跳过
    i = 0
    for value in list_key:
        if value == "j" or value == "i" :
            value = "i"
        if not in_matrix(cipher_book, value):
            cipher_book[int(i/5),int(i%5)] = value
            i +=1

    i = 0
    #用剩余的字母把密码本填满
    lower = string.ascii_lowercase
    for value in lower:
        if value == "j" or value == "i":
            value = "i"
        if not in_matrix(cipher_book, value):
            for i in range(25):
                if cipher_book[int(i / 5), i % 5] == None:
                    cipher_book[int(i / 5), i % 5] = value
                else:
                    continue
                break
    return cipher_book

def find_locations(cipher_book, value):
    value_in_function = value
    if value_in_function == "j" or value_in_function == "i":
        value_in_function = "i"
    for i in range(25):
        if value_in_function == cipher_book[int(i / 5)][int(i % 5)]:
            return int(i / 5), int(i % 5)
    return 26
def playfair(plainText, key):
    clean_text = ''.join(filter(str.isalpha, plainText.lower()))
    #生成密码本
    cipher_book = generate_cipher_book(key)

    text_list = list(clean_text)

    #对明文进行编码，使其变为两个字母一组，例如JerryHuang变为：je rr yh ua ng，如果明文的字母个数为奇数，就在最后一个字母后面加一个紧随的字母，例如最后一个剩余的是a，就跟一个b
    if len(text_list)%2 != 0:
        last_word = text_list[-1]
        if last_word == "z":
            next_word = "a"
        else:
            next_word = chr(ord(last_word)+1)

        text_list.append(next_word)

    print(text_list)
    print(len(text_list))

    #生成存储字母组的矩阵
    word_list = [[None for _ in range(2)] for _ in range(int(len(text_list) / 2))]
    for i in range(int(len(text_list)/2)):
        for j in range(2):
            word_list[i][j] = text_list[2*i+j]

    print(word_list)
    #生成存储密文用的string类型变量
    cipherText = ""
    #找到每个字母在密码本中的位置，并按照规则改变位置
    for i in range(len(word_list)):
        index = 0
        value_row0, value_col0 = find_locations(cipher_book,word_list[i][index])
        index = 1
        value_row1, value_col1 = find_locations(cipher_book,word_list[i][index])

        if value_row0 == value_row1:
            if value_col0 ==4 and value_col1 != 4:
                value_col0 = 0
                value_col1 += 1
                cipherText += cipher_book[value_row0][value_col0]
                cipherText += cipher_book[value_row1][value_col1]
            elif value_col1 ==4 and value_col0 !=4:
                value_col1 = 0
                value_col0 += 1
                cipherText += cipher_book[value_row0][value_col0]
                cipherText += cipher_book[value_row1][value_col1]
            elif value_col0 ==4 and value_col1 ==4:
                value_col0 = 0
                value_col1 = 0
                cipherText += cipher_book[value_row0][value_col0]
                cipherText += cipher_book[value_row1][value_col1]
            else:
                value_col0 += 1
                value_col1 += 1
                cipherText += cipher_book[value_row0][value_col0]
                cipherText += cipher_book[value_row1][value_col1]
        elif value_col0 == value_col1:
            if value_row0 ==4 and value_row1 !=4:
                value_row0 = 0
                value_row1 += 1
                cipherText += cipher_book[value_row0][value_col0]
                cipherText += cipher_book[value_row1][value_col1]
            elif value_row1 ==4 and value_row0 !=4:
                value_row1 = 0
                value_row0 += 1
                cipherText += cipher_book[value_row0][value_col0]
                cipherText += cipher_book[value_row1][value_col1]
            else:
                value_row0 += 1
                value_row1 += 1
                cipherText += cipher_book[value_row0][value_col0]
                cipherText += cipher_book[value_row1][value_col1]
        else:
            temp = value_col0
            value_col0 = value_col1
            value_col1 = temp
            cipherText += cipher_book[value_row0][value_col0]
            cipherText += cipher_book[value_row1][value_col1]

    return cipherText
def playfair_discode(cipherText, key):
    plain_text = ""
    code_book = generate_cipher_book(key)
    text_list = list(cipherText)
    for i in range(int(len(text_list)/2)):
        value_row0, value_col0 = find_locations(code_book,text_list[i*2])
        value_row1, value_col1 = find_locations(code_book,text_list[i*2+1])
        if value_row0 == value_row1:
            if value_col0 ==0 and value_col1 !=0:
                value_col0 = 4
                value_col1 -= 1
                plain_text += code_book[value_row0][value_col0]
                plain_text += code_book[value_row1][value_col1]
            elif value_col0 != 0 and value_col1 ==0:
                value_col1 = 4
                value_col0 -= 1
                plain_text += code_book[value_row0][value_col0]
                plain_text += code_book[value_row1][value_col1]
            elif value_col0 == 0 and value_col1 ==0:
                value_col0 = 4
                value_col1 = 4
                plain_text += code_book[value_row0][value_col0]
                plain_text += code_book[value_row1][value_col1]
            else:
                value_col0 -= 1
                value_col1 -= 1
                plain_text += code_book[value_row0][value_col0]
                plain_text += code_book[value_row1][value_col1]
        elif value_col0 == value_col1:
            if value_row0 ==0 and value_row1 !=0:
                value_row0 = 4
                value_row1 -= 1
                plain_text += code_book[value_row0][value_col0]
                plain_text += code_book[value_row1][value_col1]
            elif value_row1 ==0 and value_row0 !=0:
                value_row1 = 4
                value_row0 -= 1
                plain_text += code_book[value_row0][value_col0]
                plain_text += code_book[value_row1][value_col1]
            else:
                value_row0 -= 1
                value_row1 -= 1
                plain_text += code_book[value_row0][value_col0]
                plain_text += code_book[value_row1][value_col1]
        else:
            temp = value_col0
            value_col0 = value_col1
            value_col1 = temp
            plain_text += code_book[value_row0][value_col0]
            plain_text += code_book[value_row1][value_col1]

    print(plain_text)

plainText = "My name is jerryHuang"
key = "jerryhuang"
cipherText = playfair(plainText, key)
print(cipherText)
print(playfair_discode(cipherText,key))
