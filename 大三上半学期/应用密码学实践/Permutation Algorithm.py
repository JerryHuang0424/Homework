import random
import string

import string
from collections import Counter
import matplotlib.pyplot as plt

def count_letters_and_plot(text):
    # 转换为小写并过滤非字母字符
    # 转换为小写并去除非字母字符
    cleaned_text = ''.join(filter(str.isalpha, text.lower()))

    # 统计字母频率
    letter_counts = Counter(cleaned_text)

    # 按字母顺序排序
    letters = list(string.ascii_lowercase)
    counts = [letter_counts[letter] for letter in letters]

    # 绘制柱状图
    plt.figure(figsize=(10, 6))
    plt.bar(letters, counts, color='skyblue')
    plt.title("Letter Frequency in Text", fontsize=14)
    plt.xlabel("Letters", fontsize=12)
    plt.ylabel("Frequency", fontsize=12)
    plt.xticks(fontsize=10)
    plt.yticks(fontsize=10)
    plt.grid(axis='y', linestyle='--', alpha=0.7)

    # 显示图形
    plt.tight_layout()
    plt.show()

# 示例输入


code_list = list(range(0, 26))
random.shuffle(code_list)
def permutation(plainText,code_list):
    # upper是一个序列，包含所有的大写字母，lower同样也是一个序列，包含所有的小写字母
    upper = string.ascii_uppercase
    lower = string.ascii_lowercase


    print(plainText)

    cipherText = ""

    for i in plainText:
        if 'A' <= i <= 'Z':
            cipherText += upper[code_list[ord(i) - ord('A')]]
        elif 'a' <= i <= 'z':
            cipherText += lower[code_list[ord(i) - ord('a')]]
        else:
            cipherText += i

    print(cipherText)

    print("The key of this ciphertext is:")
    for i in range(0, 26):
        print(f"{chr(i + ord('A'))}-{chr(code_list[i] + ord('A'))}", end=' ')
    print("\n")
    return cipherText

def permutation_discode(cipherText,code_list):
    print("Decode starting")

    upper = string.ascii_uppercase
    lower = string.ascii_lowercase

    plaintext = ""

    inverse_code_list = list(range(0,26))
    for i, value in enumerate(code_list):
        inverse_code_list[value] = i

    print(inverse_code_list)

    for i in cipherText:
        if 'A' <= i <= 'Z':
            plaintext += upper[inverse_code_list[ord(i)-ord('A')]]
        elif 'a' <= i <= 'z':
            plaintext += lower[inverse_code_list[ord(i)-ord('a')]]
        else:
            plaintext += i

    print(plaintext)
    return plaintext

plainText = 'The quick brown fox jumps over a lazy dog while zebras watch quietly from afar. Jack loves quirky vibes and enjoys exploring xylophones in his spare time. Bright sunlight dazzles as he ventures into the lush garden, finding joy in every unique moment. A wizard offered him five juicy kiwis.'
cipher = permutation(plainText,code_list)


plaintext_by_decode = permutation_discode(cipher,code_list)

count_letters_and_plot(cipher)
