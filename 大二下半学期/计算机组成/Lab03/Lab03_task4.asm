.data
prompt: .asciiz "Enter an alphabetic character: "
newline: .asciiz "\n"
resultChar: .asciiz "Converted charater: "
error_msg: .asciiz "Invalid input. Please enter an alphabetic character.\n"


.text
main:
    # Prompt the user for input
    li $v0, 4       # Print string
    la $a0, prompt
    syscall

    # Read a character from user input
    li $v0, 12      # Read character
    syscall
    move $t0, $v0   # Store the input character
    li $v0,4
    la $a0,newline
    syscall

    #check if lower case 
    li $t1,'a'
    li $t2,'z'
    bgt $t0,$t2,Error_case
    blt $t0,$t1,upper_case
    
    #convert to upper case
    li $t3,0x20
    sub $t0,$t0,$t3
    j print_result
upper_case:
	li $t1,'A'
	li $t2,'Z'
	blt $t0,$t1,Error_case
	
	#convert lower case
	add $t0,$t0,$t3
print_result:
	li $v0,4	#service code for print string
	la $a0,resultChar
	syscall
	li $v0,11
	move $a0,$t0
	syscall
	j exit
Error_case:
	li $v0,4	#service code for print string
	la $a0,error_msg
	syscall
	
exit:
	li $v0,10
	syscall

    
