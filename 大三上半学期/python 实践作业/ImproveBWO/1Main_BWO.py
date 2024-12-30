import numpy as np
from matplotlib import pyplot as plt
import benchmarks
import time
import BWO
import BWO_CPO_combine_firstStage
import BWO_CPO_combine_SecdStage
import BWO_DO_combine_firstStage
import BWO_DO_combine_SecdStage
import BWO_MGO_combine_firstStage
import BWO_improved_DO
import BWO_self
import BWO_DO1_CPO2
import math
import random
import copy

best_fitness_values = []

# parameter setting
Max_iteration = 500   # the number of iterations
SearchAgents_no = 50  # the upper limit of population
Function_name = 'F1'  # the function need to test

func_details1= benchmarks.getFunctionSet(Function_name)
lb = func_details1[1]
ub = func_details1[2]
dim = func_details1[3]
fobj = getattr(benchmarks, Function_name)

time_itera=20

best_arr =np.zeros(time_itera)
best_time_arr = np.zeros(time_itera)
useTime_arr = np.zeros(time_itera)

best_arr = np.zeros(time_itera)
best_time = np.zeros(time_itera)
usetime = np.zeros(time_itera)
begin_time = time.time()

for i in range(time_itera):

    begin_time2 = time.time()

    x = BWO_improved_DO.BWO(fobj, lb, ub, dim, SearchAgents_no, Max_iteration)
    best_arr[i] = x.best
    best_time[i] = x.bestTime
    usetime[i] = x.endTime - begin_time2

    # output the best fitness after every run
    print(f"Run {i + 1} Best Fitness: {x.best}")
    best_fitness_values.append(x.best)

IterCurve = x.convergence
print(best_arr)
print(best_time)
print(np.sum(usetime))


mean_value = np.mean(best_arr)
# output the totally best record of 20 best fitness values
min_best_fitness = min(best_fitness_values)

print(f"Their mid-value is：{np.median(best_arr)}")
print(f"Their variance is：{np.var(best_arr)}")
print(f"Find the optimal solution in the iteration {np.mean(best_time)}")
print(f"The total operation time is：{np.sum(usetime)}")
print(f"Best Fitness among all runs: {min_best_fitness}")

# diagram drawing
part1 = [Function_name, "of BWO"]
name1 = ' '.join(part1)
plt.figure(figsize=(10, 6))
plt.semilogy(IterCurve, '-o', color='red', linewidth=2, markevery=10)
plt.xlabel('Iteration', fontsize=14)
plt.ylabel("Fitness", fontsize=14)
plt.grid(True, which="both", ls="--", alpha=0.5)
plt.title(name1, fontsize=16)
label = [name1]
plt.legend(label, loc='upper right', fontsize=14)
plt.show()