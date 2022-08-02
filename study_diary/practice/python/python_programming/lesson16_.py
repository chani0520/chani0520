# 👉 16 리스트형
# >>> l = [1, 20, 4, 50, 2, 1, 2]
# >>> l
# [1, 20, 4, 50, 2, 1, 2]
# >>> l[0]
# 1
# >>> l[1]
# 20
# >>> l[-1]
# 2
# >>> l[-2]
# 1
# >>> l[0:2]
# [1, 20]
# >>> l[:2]
# [1, 20]
# >>> l[2:5]
# [4, 50, 2]
# >>> l[2:]
# [4, 50, 2, 1, 2]
# >>> l[:]
# [1, 20, 4, 50, 2, 1, 2]
# >>> len(l)
# 7
# >>> type(l)
# <class 'list'>
# >>> list('abcdefg')
# ['a', 'b', 'c', 'd', 'e', 'f', 'g']
# >>> l
# [1, 20, 4, 50, 2, 1, 2]
# >>> l[100]
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# IndexError: list index out of range
# >>> n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# >>> n
# [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# >>> n[::2]
# [1, 3, 5, 7, 9]
# >>> n[::-1]
# [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
# >>> a = ['a', 'b', 'c']
# >>> n = [1, 2, 3]
# >>> x = [a, n]
# >>> x
# [['a', 'b', 'c'], [1, 2, 3]]
# >>> x[0]
# ['a', 'b', 'c']
# >>> x[1]
# [1, 2, 3]
# >>> x[0][1]
# 'b'
# >>> x[1][2]
# 3

# 👉 17 리스트의 조작
# >>> s = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
# >>> s
# ['a', 'b', 'c', 'd', 'e', 'f', 'g']
# >>> s[0]
# 'a'
# >>> s[0] = 'X'
# >>> s
# ['X', 'b', 'c', 'd', 'e', 'f', 'g']
# >>> s[2:5]
# ['c', 'd', 'e']
# >>> s[2:5] = ['C', 'D', 'E']
# >>> s
# ['X', 'b', 'C', 'D', 'E', 'f', 'g']
# >>> s[2:5] = []
# >>> s
# ['X', 'b', 'f', 'g']
# >>> s[:] = []
# >>> s
# []
# >>> n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# >>> n
# [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# >>> n.append(100)
# >>> n
# [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100]
# >>> n.insert(0, 200)
# >>> n
# [200, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100]
# >>> n.pop()
# 100
# >>> n
# [200, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# >>> n.pop(0)
# 200
# >>> n
# [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# >>> del n[0]
# >>> n
# [2, 3, 4, 5, 6, 7, 8, 9, 10]
# >>> del n
# >>> n
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# NameError: name 'n' is not defined
# >>> n = [1, 2, 2, 2, 3]
# >>> n.remove(2)
# >>> n
# [1, 2, 2, 3]
# >>> n.remove(2)
# >>> n.remove(2)
# >>> n
# [1, 3]
# >>> n.remove(2)
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# ValueError: list.remove(x): x not in list
# >>> a = [1, 2, 3, 4, 5]
# >>> b = [6, 7, 8, 9, 10]
# >>> a
# [1, 2, 3, 4, 5]
# >>> b
# [6, 7, 8, 9, 10]
# >>> x = a + b
# >>> x
# [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# >>> a
# [1, 2, 3, 4, 5]
# >>> b
# [6, 7, 8, 9, 10]
# >>> a += b
# >>> a
# [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# >>> x = [1, 2, 3, 4, 5]
# >>> y = [6, 7, 8, 9, 10]
# >>> x.extend(y)
# >>> x
# [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# 👉 18 리스트의 메소드
# r = [1, 2, 3, 4, 5, 1, 2, 3]
# print(r.index(3, 3))
#
# print(r.count(3))
#
# if 5 in r:
#     print('exist')
#
# if 100 in r:
#     print('exist')
#
# r.sort()
# print(r)
#
# r.sort(reverse=True)
# print(r)
#
# r.reverse()
# print(r)
#
# s = 'My name is Mike.'
# to_split = s.split(' ')
# print(to_split)
#
# x = ' ### '.join(to_split)
# print(x)
#
# print(help(list))

# 👉 19 리스트의 복사
# i = [1, 2, 3, 4, 5]
# j = i # 주소값 참조
# j[0] = 100
# print('j =', j)
# print('i =', i)
#
# print('###############')
#
# x = [1, 2, 3, 4, 5]
# y = x.copy()
# # y = x[:]
# y[0] = 100
# print('y =', y)
# print('x =', x)
#
# print('###############')
#
# X = 20
# Y = X
# Y = 5
# print(X, id(X))
# print(Y, id(Y))
#
# # 리스트의 경우 주소 참조
# X = ['a', 'b']
# Y = X
# Y[0] = 'P'
# print(X, id(X))
# print(Y, id(Y))

# 👉 20 리스트의 사용 예
# 주로 변동이 잦은 값들을 관리하고 싶을때 리스트를 사용해서 개발
# >>> seat = []
# >>> min = 0
# >>> max = 5
# >>> min <= len(seat) < max
# True
# >>> seat.append('p')
# >>> min <= len(seat) < max
# True
# >>> len(seat)
# 1
# >>> seat.append('p')
# >>> seat.append('p')
# >>> len(seat)
# 3
# >>> seat.append('p')
# >>> len(seat)
# 4
# >>> min <= len(seat) < max
# True
# >>> seat.append('p')
# >>> len(seat)
# 5
# >>> min <= len(seat) < max
# False
# >>> len(seat)
# 5
# >>> seat.pop(0)
# 'p'
# >>> min <= len(seat) < max
# True















































