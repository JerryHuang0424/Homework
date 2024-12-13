.data
str1: .asciiz "Enter an interger value: "
str2: .asciiz "The result is: "

.globl main
.text
main:
	#input the first interge into $s0
	li $v0,4	#service code for print string
	la $a0,str1	#service code for load address str1 to $a0
	syscall
	li $v0,5	#service code for read interge
	syscall
	move $s0,$v0	#save input integer into $s0
	
	#input the second integer into $s1
	li $v0,4	#service code foe print string
	la $a0,str1	#load the str1 into $a0
	syscall
	li $v0, 5	#service code for read integer
	syscall
	move $s1,$v0
	
	#calculate A+2B-5
	add $s2,$s1,$0
	add $s1,$s1,$s2	#double the second integer
	add $s0,$s0,$s1	#A+2B
	subi $s0,$s0,5	#A+2B-5
	
	
	#output the result
	li $v0,4	#service code for print string
	la $a0,str2	#load str2 address into $a0
	syscall
	li $v0,1	#service code for print integer
	move $a0,$s0
	syscall
	
	li $v0,10
	syscall
	
	
	