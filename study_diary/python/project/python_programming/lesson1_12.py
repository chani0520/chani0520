# 👉 8 변수 선언
# num = 1
# name = '1'
#
# new_num = int(name)
#
# print(new_num, type(new_num))
#
# num = name
# print(num, type(num))

# 👉 9 print로 출력하기
# print('Hi', 'Mike', sep=',', end='.\n')

# 👉 10 수치
# import math
#
# result = math.sqrt(25)
# print(result)
#
# y = math.log2(10)
# print(y)
#
# print(help(math))

# 👉 11 문자열
# print('hello')
# print("hello")
# print("I don't know")
# print('I don\'t know')
# print('say "I don\'t know"')
# print("say \"I don't know\"")
#
# print('hello. \nHow are you?')
# print(r'C:\name\name')
# print('C:\\name\\name')
#
# # \ 는 다음라인부터 출력하라는 의미
# print("##################")
# print("""\
# line1
# line2
# line3\
# """)
# print("##################")
#
# print('Hi.' * 3 + 'Mike.')
#
# # 특별히 긴 길이의 스트링을 출력할때 주로 사용한다고 함
# print('Py''thon')
# print('aaaaaaaaaaaaaaaaaaaaaaaa'
#       'bbbbbbbbbbbbbbbbbbbbbbbb')
# s = 'aaaaaaaaaaaaaaaaaaaaaaaa' \
#     'bbbbbbbbbbbbbbbbbbbbbbbb'
# print(s)
#
# # 리터럴끼리는 위처럼 붙여서 출력할수 있지만, 아래처럼 변수를 사용해서 print출력할때는 '+' 붙여야 함
# prefix = 'Py'
# print(prefix + 'thon')

# 👉 12 문자열의 인덱스와 슬라이스
word = 'python'
print(word[0])
print(word[1])
print(word[-1])
print(word[0:2])
print(word[2:5])
print('######## SLICE ##########')
print(word[0:2])
print(word[:2])
print('##################')
print(word[2:])
print('##################')
word = 'j' + word[1:]
print(word)
print(word[:])
print('##################')
n = len(word)
print(n)
