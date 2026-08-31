function solution(num_list) {
    var answer = 1;
    var square = 0;
    
    for (let i = 0; i < num_list.length; i++) {
        answer *= num_list[i];
        square += num_list[i]
    }
    
    if (answer < square ** 2) {
        return 1;
    }
    
    return 0;
}