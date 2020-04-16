/**
 * Tính số ms chênh lệch giữa date b và date a
 */

function diffMs(a, b) {
 // viết code ở đây
    var dayA = new Date(a);
    var dayB = new Date(b);
    return Math.abs(dayA.getTime() - dayB.getTime());
}