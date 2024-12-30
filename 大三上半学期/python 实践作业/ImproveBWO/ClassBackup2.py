import numpy as np
import benchmarks
import BWO
import re

class bwoClass:
    def __init__(self, SearchAgents_no, Max_iteration, Function_name):
        self._SearchAgents_no = SearchAgents_no
        self._Max_iteration = Max_iteration
        self._Function_name = Function_name
        self._check_function_name()
        self._initialize_function_details()

    def _check_function_name(self):
        # limit the format of any function name
        pattern = r'^F\d+$'
        if not re.match(pattern, self._Function_name):
            raise ValueError("Function_name must be in the form like 'F1', 'F2' until to 'F9'.")

    def _initialize_function_details(self):
        # Exception Handling
        try:
            func_details = benchmarks.getFunctionSet(self._Function_name)
            self._lb = func_details[1]
            self._ub = func_details[2]
            self._dim = func_details[3]
            self._objf = getattr(benchmarks, self._Function_name)
        except AttributeError:
            raise AttributeError(f"{self._Function_name} is not a valid function in benchmarks module.")

    def get_lb(self):
        return self._lb

    def get_ub(self):
        return self._ub

    def get_dim(self):
        return self._dim

    def get_objf(self):
        return self._objf

    def bwoFunction(self):
        pass

class bwoSolution(bwoClass):
    def __init__(self, SearchAgents_no, Max_iteration, Function_name):
        super().__init__(SearchAgents_no, Max_iteration, Function_name)

        print(f"Type of self: {type(self)}")
        print(f"ID of self: {id(self)}")
        print(f"Attributes of self: {dir(self)}")
        if hasattr(self, '_Function_name'):
            print(f"Function name: {getattr(self, '_Function_name')}")
        if callable(self.bwoFunction):
            print("bwoFunction is callable.")

    def bwoFunction(self):
        x = BWO.BWO(
            self.get_objf(),
            self.get_lb(),
            self.get_ub(),
            self.get_dim(),
            self._SearchAgents_no,
            self._Max_iteration
        )
        best_fitness = x.best
        return best_fitness

if __name__ == '__main__':
    SearchAgents_no = 50
    Max_iteration = 500
    Function_name = "F1"

    try:
        results = []
        for _ in range(20):
            bwo = bwoSolution(SearchAgents_no, Max_iteration, Function_name)
            result = bwo.bwoFunction()
            results.append(result)
    except ValueError as ve:
        print(f"ValueError: {ve}")
    except AttributeError as ae:
        print(f"AttributeError: {ae}")
    else:
        print(f"Result of this circle is {results}")
        mean_value = np.mean(results)
        variance_value = np.var(results)
        print(f"Their mean is {mean_value}")
        print(f"Their variance is {variance_value}")
    finally:
        print("Program execution completed.")