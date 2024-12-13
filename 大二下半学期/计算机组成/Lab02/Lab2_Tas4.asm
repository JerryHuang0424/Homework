.data
prompt1: .asciiz "Enter first integer: "
prompt2: .asciiz "Enter second integer: "
msg_equal: .asciiz "equal\n"
msg_not_equal: .asciiz "not equal\n"

.text
.globl main
main:
    # get the first integer
    li $v0, 4
    la $a0, prompt1
    syscall

    li $v0, 5
    syscall
    move $t0, $v0

    # get the second integer
    li $v0, 4
    la $a0, prompt2
    syscall

    li $v0, 5
    syscall
    move $t1, $v0

    # compare two integer
    beq $t0, $t1, equal
    b not_equal

equal:
    li $v0, 4
    la $a0, msg_equal
    syscall
    j end

not_equal:
    li $v0, 4
    la $a0, msg_not_equal
    syscall

end:
    li $v0, 10
    syscall