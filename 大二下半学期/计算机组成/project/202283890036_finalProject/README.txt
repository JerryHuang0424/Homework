The circle file of CPU-Design contains all the contents of the processor, so we did not list separate files such as RegisterFile separately.
The Instruction Memory file in the compressed package contains four instructions, including code for addi, lw, sw, and beq.

//if the rom(instruction memory) in circuit_design is empty, test instruction is here
20000001    //add 1 immediately to register 0
acc00000    //save the data in register [0] to memory address[0]
8c270000   //load th data in memory address[0] to register[7]
10070000  //if the data in register[0] and register[7] is equal, jump to instruction 1:20000001