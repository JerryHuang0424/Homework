import numpy as np


# 基准函数类，用于存放各种基准函数
class BenchmarkFunctions:
    # 球函数
    @staticmethod
    def sphere_func(x):
        return np.sum(x ** 2)

    # Schwefel 2.22函数
    @staticmethod
    def schwefel_222_func(x):
        return np.sum(np.abs(x)) + np.prod(np.abs(x))

    # Powell和函数
    @staticmethod
    def powell_sum_func(x):
        return np.sum(np.abs(x) ** (np.arange(len(x)) + 1))

    # Schwefel 1.2函数
    @staticmethod
    def schwefel_12_func(x):
        return np.sum([np.sum(x[:i + 1]) ** 2 for i in range(len(x))])

    # Schwefel 2.21函数
    @staticmethod
    def schwefel_221_func(x):
        return np.max(np.abs(x))

    # Rosenbrock函数
    @staticmethod
    def rosenbrock_func(x):
        return np.sum([100 * (x[i + 1] - x[i] ** 2) ** 2 + (x[i] - 1) ** 2 for i in range(len(x) - 1)])

    # Step函数
    @staticmethod
    def step_func(x):
        return np.sum((x + 0.5) ** 2)

    # Quartic函数
    @staticmethod
    def quartic_func(x):
        return np.sum((np.arange(1, len(x) + 1) * x ** 4)) + np.random.uniform(0, 1)

    # Zakharov函数
    @staticmethod
    def zakharov_func(x):
        term1 = np.sum(x ** 2)
        term2 = np.sum(0.5 * np.arange(1, len(x) + 1) * x) ** 2
        term3 = np.sum(0.5 * np.arange(1, len(x) + 1) * x) ** 4
        return term1 + term2 + term3


# 抽象基类，定义了优化算法的基本结构，这里可以被不同具体优化算法类继承
class OptimizationAlgorithm:
    def __init__(self, pop_size, Tmax, ub, lb, dim):
        self.__pop_size = pop_size  # 种群大小，设为私有变量，外部不能直接访问修改
        self._Tmax = Tmax  # 最大迭代次数，私有变量
        self._ub = ub  # 变量上界，私有变量
        self._lb = lb  # 变量下界，私有变量
        self._dim = dim  # 变量维度，私有变量
        self._Gb_Fit = np.inf  # 全局最优适应度值，初始化为无穷大，保护变量，子类可访问
        self._Gb_Sol = None  # 全局最优解，保护变量，子类可访问
        self._Conv_curve = np.zeros(Tmax)  # 收敛曲线，保护变量，子类可访问

    def _initialization(self):
        """
        初始化种群，私有方法，外部不能直接调用，子类可调用
        """
        return np.random.rand(self.__pop_size, self._dim) * (self._ub - self._lb) + self._lb

    def _evaluate_fitness(self, X, func_num):
        """
        计算种群中个体的适应度值，保护方法，子类可调用
        """
        fitness = np.array([self._wrapper_fhd(X[i, :], func_num) for i in range(self.__pop_size)])
        return fitness

    def _wrapper_fhd(self, x, func_num):
        """
        包装函数，根据函数编号调用相应的基准函数，保护方法，子类可调用
        """
        func_dict = {
            1: BenchmarkFunctions.sphere_func,
            2: BenchmarkFunctions.schwefel_222_func,
            3: BenchmarkFunctions.powell_sum_func,
            4: BenchmarkFunctions.schwefel_12_func,
            5: BenchmarkFunctions.schwefel_221_func,
            6: BenchmarkFunctions.rosenbrock_func,
            7: BenchmarkFunctions.step_func,
            8: BenchmarkFunctions.quartic_func,
            9: BenchmarkFunctions.zakharov_func
        }
        if func_num in func_dict:
            return func_dict[func_num](x)
        else:
            raise ValueError("Invalid function number")

    def run(self, func_num):
        """
        抽象方法，具体的优化算法逻辑需要在子类中实现，体现多态性
        """
        raise NotImplementedError("Subclasses must implement the run method")


# CPO算法类，继承自OptimizationAlgorithm抽象基类
class CPO(OptimizationAlgorithm):
    def __init__(self, pop_size, Tmax, ub, lb, dim):
        super().__init__(pop_size, Tmax, ub, lb, dim)

    def run(self, func_num):
        """
        实现CPO算法的具体逻辑，覆盖了父类的抽象方法run，体现多态性
        """
        self._Gb_Fit = np.inf
        self._Gb_Sol = None
        X = self._initialization()
        fitness = self._evaluate_fitness(X, func_num)
        self._Gb_Fit, index = np.min(fitness), np.argmin(fitness)
        self._Gb_Sol = X[index, :]
        Xp = np.copy(X)
        opt = 0  # 针对最小化问题的最优适应度值（这里设为0，可根据实际情况调整）
        t = 0

        while t < self._Tmax and self._Gb_Fit > opt:
            for i in range(len(X)):
                U1 = np.random.rand(self._dim) > np.random.rand(self._dim)
                rand_index1 = np.random.randint(len(X))
                rand_index2 = np.random.randint(len(X))

                if np.random.rand() < np.random.rand():
                    y = (X[i, :] + X[rand_index1, :]) / 2
                    X[i, :] = X[i, :] + np.random.randn(self._dim) * np.abs(2 * np.random.rand() * self._Gb_Sol - y)
                else:
                    Yt = 2 * np.random.rand() * (1 - t / self._Tmax) ** (t / self._Tmax)
                    U2 = np.random.rand(self._dim) < 0.5
                    S = np.random.rand() * U2
                    if np.random.rand() < 0.8:
                        St = np.exp(fitness[i] / (np.sum(fitness) + np.finfo(float).eps))
                        S = S * Yt * St
                        X[i, :] = (1 - U1) * X[i, :] + U1 * (
                                    X[rand_index1, :] + St * (X[rand_index2, :] - X[rand_index1, :]) - S)
                    else:
                        Mt = np.exp(fitness[i] / (np.sum(fitness) + np.finfo(float).eps))
                        Vtp = X[rand_index1, :]
                        Ft = np.random.rand(self._dim) * (Mt * (-X[i, :] + Vtp))
                        S = S * Yt * Ft
                        X[i, :] = (self._Gb_Sol + (0.2 * (1 - np.random.rand()) + np.random.rand()) * (
                                    U2 * self._Gb_Sol - X[i, :])) - S

                X[i, :] = np.clip(X[i, :], self._lb, self._ub)
                nF = self._wrapper_fhd(X[i, :], func_num)
                if fitness[i] < nF:
                    X[i, :] = Xp[i, :]
                else:
                    Xp[i, :] = X[i, :]
                    fitness[i] = nF
                    if nF <= self._Gb_Fit:
                        self._Gb_Sol = X[i, :]
                        self._Gb_Fit = nF

            self._Conv_curve[t] = self._Gb_Fit
            t += 1

        return self._Gb_Fit, self._Gb_Sol, self._Conv_curve








# 示例用法
pop_size = 50  # 种群大小示例值，可根据需求调整
Tmax = 100  # 最大迭代次数示例值，可根据需求调整
ub = 10  # 变量上界示例值，可根据需求调整
lb = -10  # 变量下界示例值，可根据需求调整
dim = 10  # 变量维度示例值，可根据需求调整
func_num = 1  # 选择使用的基准函数编号，这里示例选择球函数，可根据需求调整

cpo_algorithm = CPO(pop_size, Tmax, ub, lb, dim)
best_fit, best_sol, conv_curve = cpo_algorithm.run(func_num)
print("Best fitness:", best_fit)
print("Best solution:", best_sol)
















