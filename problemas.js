function puzzle(N) {

    A = 1
    
    B = 1
    
    C = 1
    
    D = 1
    
     {
    
    X = D + 2 * C + 3 * B + 4 * A
    
    A = B
    
    B = C
    
    C = D
    
    D = X
    
    }
    
    return D % 10000000000 // últimos 10 dígitos de D
    
    }
    
    puzzle(10)

    console.log(puzzle(10))
    
   