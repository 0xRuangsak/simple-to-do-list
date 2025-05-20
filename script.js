let to_do = [];

function add(val) {
    to_do.push(val);
}
function remove(val) {
    const index = to_do.indexOf(val);
    to_do.splice(index, val);
}
function shift_left(val) {
    const index = to_do.indexOf(val);
    if ((index > 0) && (index < to_do.length())) {
        to_do[index],to_do[index - 1] = to_do[index - 1], to_do[index];
    }
}
function shift_right(val) {
    const index = to_do.indexOf(val);
    if ((index > 0) && (index < to_do.length())) {
        to_do[index],to_do[index + 1] = to_do[index + 1], to_do[index];
    }
}