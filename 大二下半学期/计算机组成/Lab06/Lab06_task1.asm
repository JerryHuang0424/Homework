.data
str1: .asciiz "The char is lowercase"
str2: .asciiz "The char is upcase"
prompt:.asciiz "Enter a charater: "


.text
main:
	# Print the prompt message
	li $v0, 4          # syscall code for print string
	la $a0, prompt     # address of the prompt message
    	syscall
	
  	  # Read a character
    	li $v0, 12         # syscall code for read character
    	syscall
    	move $a0, $v0      # move the character to $a0
    	jal islower
    	
    	beq $v0,1,print_lowercase

print_not_lowercase:
    	li $v0, 4          # syscall code for print string
   	la $a0, str2   # address of the not lowercase message
    	syscall
   	j end_program

print_lowercase:
    	li $v0, 4          # syscall code for print string
   	la $a0, str1  # address of the lowercase message
    	syscall

end_program:
    li $v0, 10         # syscall code for exit
    syscall
    
islower:
	blt $a0,'a',else
	bgt $a0,'z',else
	li $v0,1
	jr $ra
	
else:
	li $v0,0
	jr $ra
	
	