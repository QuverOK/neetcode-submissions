class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let maxRight = arr[arr.length - 1];
        let temp = 0;
        for (let i = arr.length - 1; i >= 0; i--) {         
            if (i === arr.length - 1) {
                arr[arr.length - 1] = -1;
            } else {
                temp = arr[i];
                arr[i] = maxRight;
                maxRight = Math.max(temp, maxRight);
            }
        }
        return arr;
    }
}
