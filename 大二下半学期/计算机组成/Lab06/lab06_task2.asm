.data
prompt: .asciiz "Enter a number: "
result_msg: .asciiz "The factorial is: "
newline: .asciiz "\n"

    .text
    .globl main

main:
    # Print the prompt message
    li $v0, 4              # syscall code for print string
    la $a0, prompt         # address of the prompt message
    syscall

    # Read an integer from the user
    li $v0, 5              # syscall code for read integer
    syscall
    move $a0, $v0          # move the input number to $a0

    # Call the fact function
    jal fact

    # Print the result message
    li $v0, 4              # syscall code for print string
    la $a0, result_msg     # address of the result message
    syscall

    # Print the factorial result
    move $a0, $v0          # move the result from $v0 to $a0
    li $v0, 1              # syscall code for print integer
    syscall

    # Print a newline
    li $v0, 4              # syscall code for print string
    la $a0, newline        # address of the newline character
    syscall

    # Exit the program
    li $v0, 10             # syscall code for exit
    syscall
    
fact:
    addi $sp, $sp, -4     # 在栈上为返回地址预留空间
    sw $ra, 0($sp)        # 保存返回地址

    # 检查 n 是否小于 1
    slti $t0, $a0, 1      # 将 $t0 设置为 (n < 1) 的结果
    beq $t0, $zero, else  # 如果 $t0 为 0，跳转到 else 分支

    # 如果 n >= 1，则返回 1
    li $v0, 1             # 将 $v0 设置为 1
    j end                 # 跳转到 end 分支

else:
    # 计算 n * fact(n-1) 的结果
    addi $sp, $sp, -4     # 为递归调用预留空间
    addi $a0, $a0, -1     # 将 n 减 1，并传递给递归调用的参数
    jal fact              # 调用递归函数 fact，并保存返回地址
    lw $ra, 0($sp)        # 恢复返回地址
    addi $sp, $sp, 4      # 回收递归调用的栈空间

    # 计算 n * fact(n-1) 的结果
    mul $v0, $a0, $v0     # 将 $v0 设置为 n * fact(n-1)

end:
    lw $ra, 0($sp)        # 恢复返回地址
    addi $sp, $sp, 4      # 回收栈空间
    jr $ra                # 返回到调用点

