.data
str1: .asciiz "Please enter the value of a: "
str2: .asciiz "Please enter the value of b: "
str3: .asciiz "Please enter the value of c: "



.text
	#(a+b)
	li $v0,4	#service code for print string
	la $a0,str1	#load address if str1 into $a0
	syscall		#print str1
	li $v0,5	#service code of read integer
	syscall 	#read the input integer
	move $s0,$v0	#save input integer into $s0
	
	li $v0,4	#service code for print string
	la $a0,str2	#load address if str1 into $a0
	syscall		#print str1
	li $v0,5	#service code of read integer
	syscall 	#read the input integer
	move $s1,$v0	#save input integer into $s0
	
	add $s0,$s0,$s1#add inout a and input b,then save the result into $s0
	
	#(c+101)
	li $v0,4	#service code for print string
	la $a0,str3	#load address if str1 into $a0
	syscall		#print str1
	li $v0,5	#service code of read integer
	syscall 	#read the input integer
	move $s1,$v0	#save input integer into $s0
	
	addi $s1,$s1,101#add c and 101, then save the result into $s1
	
	#(a+b)-(c+101)
	sub $s0,$s0,$s1
	
	#print the result
	li $v0,1	#service code for print integer
	move $a0,$s0	#load the result into $a0
	syscall
	
	li $v0,10	#service code for ecit
	syscall
	
	
	
	
	
	
	