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
        if(preferences[i] == preferences[c]) {count ++;}
        preferences[i] = 0;
    }
    return count;
    
    // your implementation
};
