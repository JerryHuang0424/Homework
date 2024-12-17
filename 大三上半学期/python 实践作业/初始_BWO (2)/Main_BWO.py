import numpy as np
from matplotlib import pyplot as plt
import math
import random
import copy
import benchmarks
import BWO

# parameter setting
Max_iteration = 500   # the number of iterations
SearchAgents_no = 50  # the upper limit of population
Function_name = 'F8'  # the function need to test

# test functions
func_details1= benchmarks.getFunctionSet(Function_name)
lb = func_details1[1]
ub = func_details1[2]
dim = func_details1[3]
fobj = getattr(benchmarks, Function_name)

# BWO
x = BWO.BWO(fobj, lb, ub, dim, SearchAgents_no, Max_iteration)

# result
IterCurve = x.convergence
Best_fitness = x.best
Best_Pos = x.bestIndividual

'''
# print results and their mean and variance 
of a test function after 20 circles
'''
output_arr = np.zeros(20)
for i in range(20):
    x = BWO.BWO(fobj, lb, ub, dim, SearchAgents_no, Max_iteration)
    print(x.best)
    output_arr[i] = x.best
print(f"Result of this circle is {output_arr}")

mean_value = np.mean(output_arr)
print(f"Their mean is {mean_value}")

variance_value = np.var(output_arr)
print(f"Their variance is {variance_value}")


# diagram drawing
part1 = [Function_name,"of BWO"]
name1 = ' '.join(part1)
plt.figure(1)
plt.semilogy(IterCurve, 'r-', linewidth=2)
plt.xlabel('Iteration', fontsize='medium')
plt.ylabel("Fitness", fontsize='medium')
plt.grid()
plt.title(name1, fontsize='large')
label = [name1]
plt.legend(label, loc='upper right')
plt.show()
