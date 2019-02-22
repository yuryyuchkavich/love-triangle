/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  
    var count = 0;
    for (var i = 0; i< preferences.length ; i++){
        
        var a = preferences[i]-1;
        var b = preferences[a]-1;
        var c =preferences[b] -1;
        var a1 = preferences[i];
        var b1 = preferences[a];
        var c1 =preferences[b];
        
        if((preferences[i] == preferences[c])&&(a!=b)&&(b!=c)&&(a1!=b1)&&(b1!=c1)&&(c1!=a1)) {count ++;
         preferences[a] =null;
        preferences[b]=-null;
        preferences[c]=-null;}
        }
    return count;
        
    // your implementation
};
