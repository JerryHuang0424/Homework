.data

str1: .asciiz "Please enter a integer: "
str2: .asciiz "Number of 1's in binary representation: "

.globl main
.text
main:
	#input the integer
	li $v0, 4
  	la $a0, str1
    	syscall
    	
    	#read the input integer
    	li $v0,5
    	syscall
    	move $t0,$v0	#save inout integer into $t0
    	
    	li $t1,0	#intialize a counter for the number of 1 is zero
    	
check_loop:

	andi $t2, $t0, 1
	beqz $t2,shift_loop
	addi $t1,$t1,1
shift_loop:	
	srl $t0,$t0,1
	bnez $t0,check_loop

	li $v0,4
	la $a0,str2
	syscall
	
	li $v0,1
	move $a0,$t1
	syscall
	
	li $v0,10
	syscall
    	
    	
