from main import ExtendedOptimizationRunner

N = 50
Max_iter = 500
F_name = 'F9'
extra_param = 'Some Extra Info'


optimizer = ExtendedOptimizationRunner(N, Max_iter, F_name, extra_param)

# Run the optimization
mean_fitness, std_fitness = optimizer.run()

# Plot the convergence curve
optimizer.plot_convergence_curve()

# Call additional feature
optimizer.additional_feature()