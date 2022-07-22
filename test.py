
def findSum(arr, n, target):
    mp = {}
    result = [0]*2
    for i in range(n):
        findElement = target-arr[i]
        if(findElement in mp):
            result[0] = mp[findElement]
            result[1] = arr[i]
            break
        else:
            mp[arr[i]] = arr[i]
    return result
 
# driver code
arr = [1,3,4,2,7,0]
n = len(arr)
search = 7
ans = findSum(arr,n,search)
print(f"{min(ans[0], ans[1])} {max(ans[0], ans[1])}")