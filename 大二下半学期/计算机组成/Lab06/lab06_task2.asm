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
    addi $sp, $sp, -4     # ��ջ��Ϊ���ص�ַԤ���ռ�
    sw $ra, 0($sp)        # ���淵�ص�ַ

    # ��� n �Ƿ�С�� 1
    slti $t0, $a0, 1      # �� $t0 ����Ϊ (n < 1) �Ľ��
    beq $t0, $zero, else  # ��� $t0 Ϊ 0����ת�� else ��֧

    # ��� n >= 1���򷵻� 1
    li $v0, 1             # �� $v0 ����Ϊ 1
    j end                 # ��ת�� end ��֧

else:
    # ���� n * fact(n-1) �Ľ��
    addi $sp, $sp, -4     # Ϊ�ݹ����Ԥ���ռ�
    addi $a0, $a0, -1     # �� n �� 1�������ݸ��ݹ���õĲ���
    jal fact              # ���õݹ麯�� fact�������淵�ص�ַ
    lw $ra, 0($sp)        # �ָ����ص�ַ
    addi $sp, $sp, 4      # ���յݹ���õ�ջ�ռ�

    # ���� n * fact(n-1) �Ľ��
    mul $v0, $a0, $v0     # �� $v0 ����Ϊ n * fact(n-1)

end:
    lw $ra, 0($sp)        # �ָ����ص�ַ
    addi $sp, $sp, 4      # ����ջ�ռ�
    jr $ra                # ���ص����õ�

