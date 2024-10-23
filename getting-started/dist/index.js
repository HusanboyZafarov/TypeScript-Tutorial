"use strict";
let numbers = [1, 2, 3];
let user = [1, "Safir"];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
function calculateTax(income) {
    return income * 0.2;
}
let employee = {
    id: 1,
    name: "Safir",
    retire: (date) => { },
};
