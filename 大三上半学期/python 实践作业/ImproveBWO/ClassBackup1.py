import numpy as np
from matplotlib import pyplot as plt
import math
import random
import copy
import re  # 正则表达式模块
import benchmarks  # 假定此模块提供目标函数和细节
import BWO  # 假定此模块实现了优化算法

# 封装：使用类封装与BWO算法相关的属性和方法
class BWO_CLASS:
    def __init__(self, population_size=300, max_iterations=500, objective_function="F9"):
        self.population_size = population_size
        self.max_iterations = max_iterations
        # 使用正则表达式验证目标函数名称是否符合规范
        if not re.match(r"^[A-Za-z0-9_]+$", objective_function):
            raise ValueError("目标函数名称包含非法字符！")
        self.objective_function = objective_function

    def BWO_function(self):
        try:
            func_details = benchmarks.getFunctionSet(self.objective_function)
            lb, ub, dim = func_details[1], func_details[2], func_details[3]
            fobj = getattr(benchmarks, self.objective_function, None)

            if fobj is None:
                raise AttributeError(f"目标函数{self.objective_function}在benchmarks模块中未找到！")

            print(f"目标函数: {self.objective_function}, 最大迭代: {self.max_iterations}, 种群数量: {self.population_size}")
            print(f"搜索范围: [{lb}, {ub}], 维度: {dim}")
        except Exception as e:
            print(f"执行BWO_function时发生错误: {e}")

# 继承与多态：定义子类实现不同的行为
class BWO_solution(BWO_CLASS):
    def BWO_function(self):
        try:
            func_details = benchmarks.getFunctionSet(self.objective_function)
            lb, ub, dim = func_details[1], func_details[2], func_details[3]
            fobj = getattr(benchmarks, self.objective_function, None)

            if fobj is None:
                raise AttributeError(f"目标函数{self.objective_function}在benchmarks模块中未找到！")

            # 调用BWO模块执行算法
            result = BWO.BWO(fobj, lb, ub, dim, self.population_size, self.max_iterations)
            print(f"优化结果: {result}")
        except Exception as e:
            print(f"执行BWO_solution的BWO_function时发生错误: {e}")

# 自省功能：检查类和方法的属性
def inspect_class(cls):
    print(f"检查类: {cls.__name__}")
    print(f"方法列表: {[method for method in dir(cls) if callable(getattr(cls, method)) and not method.startswith('__')]}\n")

if __name__ == '__main__':
    try:
        # 创建基类实例并调用方法
        bwo_test = BWO_CLASS()
        bwo_test.BWO_function()

        # 创建子类实例并调用方法
        bwo_solution = BWO_solution()
        bwo_solution.BWO_function()

        # 使用自省功能检查类
        inspect_class(BWO_CLASS)
        inspect_class(BWO_solution)
    except Exception as e:
        print(f"主程序运行时发生错误: {e}")
