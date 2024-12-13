.data
str1: .asciiz "Please enter an integer value"
str2: .asciiz "The result is: "


.text
main:
	#input the integer
	li $v0,4
	la $a0,str1
	syscall
	li $v0,5
	syscall
	move $t0,$v0
	
	li $t1,0xAAAAAAAA
	li $t2,0X55555555
	and $t3,$t0,$t1
	and $t4,$t2,$t0
	srl $t3,$t3,1
	sll $t4,$t4,1
	or $t0,$t3,$t4
	
	li $v0,4
	la $a0,str2
	syscall
	li $v0,1
	move $a0,$t0
	syscall
	
	li $v0,10
	syscall
