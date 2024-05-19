/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    return traverseArray(nums,target);
};

var traverseArray = function(numsArray, target){
    for(let i=0;i<=numsArray.length-1;i++){
        let res =  sumElementAndMatch(i, numsArray[i], numsArray,target);
        if(res){
            return res;
        }
    }
}

var sumElementAndMatch = function(index, number, numsArray, target){
    for(let i=0;i<numsArray.length-1;i++){
        if(i!=index){
            if(number+numsArray[i] == target){
                return [index,i];
            }
        }
    }
}

