.data
str1: .asciiz "\nEnter an integer value: "
str2: .asciiz "You enterd: "
str3: .asciiz "\nRepeat[y/n]?"

.globl main
.text
main:
	li $v0,4	#service code for print string
	la $a0,str1	#load address of str1 into $a0
	syscall		#print tring in str1
	li $v0,5	#service code for read integer
	syscall		#read input integer
	move $s0,$v0	#save input value in $s0
	
	
	add $s1,$s0,$0	#copy input value to Es1
	addu $s0,$s0,$s1	#double the input value
	
	
	li $v0,4	#service code for print string
	la $a0,str2	#load address of str2 into $a0
	syscall		#print str2 string
	li $v0,1	#service code of print integer
	move $a0,$s0	#copy input value
	syscall		#print integer
	
	
	li $v0,4	#service code for print string
	la $a0,str3	#load address of str3 into $a0
	syscall
	
	li $v0,12	#service code for read char
	syscall		#read input char
	move $s0,$v0	#save read char in $s0
	li $s1,'y'	#save the address of y to $s1
	sub $s0,$s0,$s1
	
	beq $s0,$0,main
	
	
	li $v0,10	#service code to ecit program
	syscall		#exit