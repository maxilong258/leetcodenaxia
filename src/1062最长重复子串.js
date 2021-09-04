function longestRepeatingSubstring(s) {
    var l = 0;
    var r = s.length - 1;
    while (l < r) {
        var mid = l + (r - l + 1) / 2;
        if (f(s, mid)) {
            l = mid;
        }
        else {
            r = mid - 1;
        }
    }
    return l;
    function f(s, length) {
        var seen = new Set();
        for (var i = 0; i <= s.length - length; i++) {
            var j = i + l - 1;
            var sub = s.substring(i, j + 1);
            if (seen.has(sub))
                return true;
            seen.add(sub);
        }
        return false;
    }
}
var str = 'aaaaa';
console.log(longestRepeatingSubstring(str));
