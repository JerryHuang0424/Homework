def EuclideanAlgorithm(a,b):
    if b == 0:
        return 1,0,a
    else:
        x, y, res = EuclideanAlgorithm(b, a % b)
        x, y = y, (x-(a//b*y))
        return x, y, res

print("Please enter two numbers separated by a space:")
a, b = map(int, input().split())
x, y, res = EuclideanAlgorithm(a,b)
print(f"The greatest common divider of {a} and {b} is {res}")
print(f"And we also find the root of Xa + Yb =gcd(a,b), the equation is {x}*{a}+{y}*{b}={res}")