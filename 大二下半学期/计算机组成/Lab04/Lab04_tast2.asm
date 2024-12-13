.data
    input_prompt_n1:   .asciiz "Enter the first integer (n1): "
    input_prompt_n2:   .asciiz "Enter the second integer (n2): "
    output_result:     .asciiz "Sum of numbers from n1 to n2: "

.text
    # Prompt the user for n1
    li $v0, 4
    la $a0, input_prompt_n1
    syscall

    # Read n1 from the user
    li $v0, 5
    syscall
    move $t0, $v0  # Store n1 in $t0

    # Prompt the user for n2
    li $v0, 4
    la $a0, input_prompt_n2
    syscall

    # Read n2 from the user
    li $v0, 5
    syscall
    move $t1, $v0  # Store n2 in $t1

    # Initialize the sum to 0
    li $t2, 0

    # Loop to calculate the sum
sum_loop:
    add $t2, $t2, $t0  # Add n1 to the sum
    addi $t0, $t0, 1   # Increment n1

    # Check if n1 is greater than n2
    bgt $t0, $t1, sum_done

    # Repeat the loop
    j sum_loop

sum_done:
    # Display the result
    li $v0, 4
    la $a0, output_result
    syscall

    # Display the sum (in $t2)
    li $v0, 1
    move $a0, $t2
    syscall

    # Exit the program
    li $v0, 10
    syscall