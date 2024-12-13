.data
    input_prompt:   .asciiz "Enter an integer: "
    output_result:  .asciiz "Hexadecimal representation: "

.text
    # Prompt the user for input
    li $v0, 4
    la $a0, input_prompt
    syscall

    # Read the integer input from the user
    li $v0, 5
    syscall
    move $t0, $v0  # Store the input in $t0

    # Display the result
    li $v0, 4
    la $a0, output_result
    syscall

    # Convert and display the hexadecimal representation
    li $v0, 34  # Syscall number for "print hex"
    move $a0, $t0
    syscall

    # Exit the program
    li $v0, 10
    syscall