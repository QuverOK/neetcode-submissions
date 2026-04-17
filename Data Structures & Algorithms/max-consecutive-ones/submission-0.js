class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let max = 0;
        let counter = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                counter++;
            }

             if (max < counter) {
                    max = counter;
            }

            if (nums[i] === 0) {
                

                counter = 0;
            }

           
        }

        return max;
    }
}
