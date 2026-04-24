class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let maxRight = arr[arr.length - 1];
        let temp = 0;
        for (let i = arr.length - 2; i >= 0; i--) {         
            temp = arr[i];
            arr[i] = maxRight;
            maxRight = Math.max(temp, maxRight);
        }
        arr[arr.length - 1] = -1;

        return arr;
    }
}
