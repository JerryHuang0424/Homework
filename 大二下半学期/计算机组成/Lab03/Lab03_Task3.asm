.data
str1: .asciiz "$s2= "
str2: .asciiz "$s3= "
str3: .asciiz "$s4= "
str4: .asciiz "\n "

.globl main
.text
main:
	li $s1,0x87654321	#intilize $s1 into 0x87654321
	sll $s2,$s1,16
	srl $s3,$s1,8
	sra $s4,$s1,12
	
	li $v0,4	#service code for print srting
	la $a0,str1
	syscall
	move $a0,$s2
	li $v0,34
	syscall
	li $v0,4
	la $a0,str4
	syscall
	
	li $v0,4	#service code for print srting
	la $a0,str2
	syscall
	move $a0,$s3
	li $v0,34
	syscall
	li $v0,4
	la $a0,str4
	syscall
	
	li $v0,4	#service code for print srting
	la $a0,str3
	syscall
	move $a0,$s4
	li $v0,34
	syscall
	li $v0,4
	la $a0,str4
	syscall
	
	li $v0,10
	syscall
	
