# 👉 13 문자의 메서드
# s = 'My name is Mike. Hi Mike.'
# print(s)
#
# is_start = s.startswith('My')
# print(is_start)
#
# is_start = s.startswith('x')
# print(is_start)
#
# print('#############################')
#
# print(s.find('Mike'))
# print(s.rfind('Mike'))
# print(s.count('Mike'))
# print(s.capitalize())
# print(s.title())
# print(s.upper())
# print(s.lower())
# print(s.replace('Mike', 'Nancy'))

# 👉 14 문자의 대입
# >>> 'a is {}'.format('a')
# 'a is a'
# >>> 'a is {} {} {}'.format(1, 2, 3)
# 'a is 1 2 3'
# >>> 'a is {0} {1} {2}'.format(1, 2, 3)
# 'a is 1 2 3'
# >>> 'a is {2} {1} {0}'.format(1, 2, 3)
# 'a is 3 2 1'
# >>> 'My name is {0} {1}'.format('Chan', 'Kim')
# 'My name is Chan Kim'
# >>> 'My name is {0} {1}. I'm {1} {0}'.format('Chan', 'Kim')
#   File "<stdin>", line 1
#     'My name is {0} {1}. I'm {1} {0}'.format('Chan', 'Kim')
#                            ^
# SyntaxError: invalid syntax
# >>> 'My name is {0} {1}. Im {1} {0}'.format('Chan', 'Kim')
# 'My name is Chan Kim. Im Kim Chan'
# >>> 'My name is {name} {family}. Im {family} {name}'.format(name='Chan', family='Kim')
# 'My name is Chan Kim. Im Kim Chan'
# >>> 1
# 1
# >>> '1'
# '1'
# >>> str(1)
# '1'
# >>> x = str(1)
# >>> type(x)
# <class 'str'>
# >>> str(3.14)
# '3.14'
# >>> str(True)
# 'True'
# >>>

# 👉 15 f-strings
# Python 3.6부터, format대신 f-strings를 쓸수 있음
# 새로운 스타일로 처리속도도 빨라졌으니, 아래와 같이 사용
a = 'a'
print(f'a is {a}')

x, y, z = 1, 2, 3
print(f'a is {x}, {y}, {z}')
print(f'a is {z}, {y}, {x}')

name = 'Chan'
family = 'Kim'
print(f'My name is {name} {family}. I am {family} {name}')
