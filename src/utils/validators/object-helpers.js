let objectHelpers = function (array, valueToComparison, objProperty, newObjProperty) {
    array.map( function (element) {
        if (element[objProperty] === valueToComparison) {
            return {...array, newObjProperty};
        }
        return array;
    })
}

export default objectHelpers;