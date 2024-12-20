
import numpy as np
from matplotlib import pyplot as plt
import math
import random
import copy
import benchmarks
import BWO
import time
import BWO_combine

''' --------------------------- 参数设置 ----------------------------------'''
SearchAgents_no = 50  # 种群量级
Function_name = 'F9'  # 测试函数
Max_iteration = 500   # 迭代次数

''' ------------------------ 获取测试函数细节 F1~F23 ----------------------------------'''
#func_details = benchmarks.getFunctionDetails(Function_name)
func_details1= benchmarks.getFunctionSet(Function_name)
lb = func_details1[1]
ub = func_details1[2]
dim = func_details1[3]
fobj = getattr(benchmarks, Function_name) # 获取函数求解



# ''' ------------------------ 白鲸求解 ----------------------------------'''
# begin_time=time.time()
# x = DO_BWO.BWO(fobj, lb, ub, dim, SearchAgents_no, Max_iteration)
# print(f"在第{x.bestTime}次迭代时找到最优解")
# print(f"本次迭代所用的时间为：{abs(begin_time-x.endTime)}")
# ''' ------------------------ 求解结果 ----------------------------------'''
# IterCurve = x.convergence
# Best_fitness = x.best
# Best_Pos = x.bestIndividual
#
# ''' ------------------------ 绘图 ----------------------------------'''
# part1 = ['DO_BWO', Function_name]
# name1 = ' '.join(part1)
# plt.figure(1)
# plt.semilogy(IterCurve, 'r-', linewidth=2)
# plt.xlabel('Iteration', fontsize='medium')
# plt.ylabel("Fitness", fontsize='medium')
# plt.grid()
# plt.title(name1, fontsize='large')
# label = [name1]
# plt.legend(label, loc='upper right')
# plt.savefig('./BWO_Python.jpg')
# plt.show()
#
# ''' ------------------------ 白鲸求解 ----------------------------------'''
# begin_time=time.time()
# x = BWO.BWO(fobj, lb, ub, dim, SearchAgents_no, Max_iteration)
# print(f"在第{x.bestTime}次迭代时找到最优解")
# print(f"本次迭代所用的时间为：{abs(begin_time-x.endTime)}")
# ''' ------------------------ 求解结果 ----------------------------------'''
# IterCurve = x.convergence
# Best_fitness = x.best
# Best_Pos = x.bestIndividual
#
# ''' ------------------------ 绘图 ----------------------------------'''
# part1 = ['BWO', Function_name]
# name1 = ' '.join(part1)
# plt.figure(1)
# plt.semilogy(IterCurve, 'r-', linewidth=2)
# plt.xlabel('Iteration', fontsize='medium')
# plt.ylabel("Fitness", fontsize='medium')
# plt.grid()
# plt.title(name1, fontsize='large')
# label = [name1]
# plt.legend(label, loc='upper right')
# plt.savefig('./BWO_Python.jpg')
# plt.show()

time_itera=20

best_arr =np.zeros(time_itera)
best_time_arr = np.zeros(time_itera)
useTime_arr = np.zeros(time_itera)

best_arr_DOBWO = np.zeros(time_itera)
best_time_DOBWO = np.zeros(time_itera)
usetime_DOBWO = np.zeros(time_itera)
# output_arr =[1,2,3,4,5]

for i in range(time_itera):
    begin_time = time.time()

    x = BWO.BWO(fobj, lb, ub, dim, SearchAgents_no, Max_iteration)
    print(x.best)
    best_arr[i] = x.best
    best_time_arr[i] = x.bestTime
    useTime_arr[i] = x.endTime - begin_time

    begin_time2 = time.time()
    x = DO_BWO.BWO(fobj, lb, ub, dim, SearchAgents_no, Max_iteration)
    best_arr_DOBWO[i] = x.best
    best_time_DOBWO[i] = x.bestTime
    usetime_DOBWO[i] = x.endTime - begin_time2
    # ''' ------------------------ 求解结果 ----------------------------------'''
    # IterCurve = x.convergence
    # Best_fitness = x.best
    # Best_Pos = x.bestIndividual

    # ''' ------------------------ 绘图 ----------------------------------'''
    # part1 = ['BWO', Function_name]
    # name1 = ' '.join(part1)
    # plt.figure(1)
    # plt.semilogy(IterCurve, 'r-', linewidth=2)
    # plt.xlabel('Iteration', fontsize='medium')
    # plt.ylabel("Fitness", fontsize='medium')
    # plt.grid()
    # plt.title(name1, fontsize='large')
    # label = [name1]
    # plt.legend(label, loc='upper right')
    # plt.savefig('./BWO_Python.jpg')
    # plt.show()

print(best_arr)
print(best_time_arr)
print(useTime_arr)

print(best_arr_DOBWO)
print(best_time_DOBWO)
print(usetime_DOBWO)


mean_value = np.mean(best_arr)
print(f"BWO算法求解的中位数为：{np.median(best_arr)}")
print(f"BWO算法求解的方差为：{np.var(best_arr)}")
print(f"BWO算法完成500次迭代平均用时为：{np.mean(useTime_arr)}")
print(f"BWO算法平均在{np.mean(best_time_arr)}次迭代时找到最优解")
print("/n")
print(f"DO_BWO算法求解的中位数为：{np.median(best_arr_DOBWO)}")
print(f"DO_BWO算法求解的方差为：{np.var(best_arr_DOBWO)}")
print(f"DO_BWO算法完成500次迭代平均用时为：{np.mean(usetime_DOBWO)}")
print(f"DO_BWO算法平均在{np.mean(best_time_DOBWO)}次迭代时找到最优解")




