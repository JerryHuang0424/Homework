.data
str1: .asciiz "$s3= "
str2: .asciiz "$s4= "
str3: .asciiz "$s5= "
str4: .asciiz "$s6= "
str5: .asciiz "\n"

.globl main
.text
main:
	li $s1,0x12345678
	li $s2,0xffff9a00
	
	and $s3,$s1,$s2	#$s3=
	or $s4,$s1,$s2	#$s4=
	xor $s5,$s1,$s2	#$s5=
	nor $s6,$s1,$s2	#$s4=
	
	li $v0,4	#service code for print strin
	la $a0,str1	#load str1 into $a0
	syscall
	move $a0,$s3
	li $v0,34	#service code for print integer
	syscall
	li $v0,4
	la $a0,str5
	syscall
	
	li $v0,4	#service code for print strin
	la $a0,str2	#load str1 into $a0
	syscall
	move $a0,$s4
	li $v0,34	#service code for print integer
	syscall
	li $v0,4
	la $a0,str5
	syscall
	
	li $v0,4	#service code for print strin
	la $a0,str3	#load str1 into $a0
	syscall
	move $a0,$s5
	li $v0,34	#service code for print integer
	syscall
	li $v0,4
	la $a0,str5
	syscall
	
	li $v0,4	#service code for print strin
	la $a0,str4	#load str1 into $a0
	syscall
	move $a0,$s6
	li $v0,34	#service code for print integer
	syscall
	li $v0,4
	la $a0,str5
	syscall
	
	li $v0,10
	syscall 	