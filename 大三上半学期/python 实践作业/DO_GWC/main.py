import numpy as np
import time
import matplotlib.pyplot as plt
import DO
import get_function
from get_function import Get_Functions_details


N = 50
Max_iter = 500
F_name = 'F9'

# 加载选定基准函数的细节
lb, ub, dim, fobj = Get_Functions_details(F_name)

best_fitnesses = []

for _ in range(20):
    start_time = time.time()
    Bestfitness,Bestposition,Convergencecurve =DO.do(N, Max_iter, lb, ub, dim, fobj)
    Run_time = time.time() - start_time
    best_fitnesses.append(Bestfitness)

    print(f"Run completed in {Run_time:.2e} seconds. Best fitness: {Bestfitness:.2e}")


mean_fitness = np.mean(best_fitnesses)
std_fitness = np.std(best_fitnesses)

# 输出均值和方差
print(f"\n平均最佳适应度: {mean_fitness:.2e}")
print(f"最佳适应度的方差: {std_fitness:.2e}")


plt.semilogy(range(1, Max_iter + 1), Convergencecurve, color='r', linewidth=2.5)
plt.title('Convergence Curve')
plt.xlabel('Iteration')
plt.ylabel('Best Score Obtained So Far')
plt.grid()
plt.show()