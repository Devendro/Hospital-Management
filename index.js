var stateObject = {
    "India": {
        "Delhi": ["New Delhi", "Central Delhi", "East Delhi", "North Delhi", "North East Delhi", "North West Delhi", "	Shahdara", "South Delhi", "	South East Delhi", "South West Delhi", "West Delhi"],

        "Kerala": ["Thiruvananthapuram", "Palakkad"],

        "Goa": ["North Goa", "South Goa"],

        "Maharashtra": ["Ahmadnagar", "Akola",
            "Amravati",
            "Aurangabad",
            "Bhandara",
            "Beed",
            "Buldana",
            "Chandrapur",
            "Dhule",
            "Gadchiroli",
            "Gondiya",
            "Hingoli",
            "Jalgaon",
            "Jalna",
            "Kolhapur",
            "Latur",
            "Mumbai",
            "Mumbai Suburban",
            "Nagpur",
            "Nanded",
            "Nandurbar",
            "Nashik",
            "Osamanabad",
            "Parbhani",
            "Pune",
            "Raigad",
            "Ratnagiri",
            "Sangli",
            "Satara",
            "Sindhudurg",
            "Solapur",
            "Thane",
            "Wardha",
            "Washim",
            "Yavatmal"
        ]
    },
    "Australia": {
        "South Australia": ["Dunstan", "Mitchell"],
        "Victoria": ["Altona", "Euroa"]
    }, "Canada": {
        "Alberta": ["Acadia", "Bighorn"],
        "Columbia": ["Washington", ""]
    },
}
window.onload = function () {
    var countySel = document.getElementById("countySel"),
        stateSel = document.getElementById("stateSel"),
        districtSel = document.getElementById("districtSel");
    for (var country in stateObject) {
        countySel.options[countySel.options.length] = new Option(country, country);
    }
    countySel.onchange = function () {
        stateSel.length = 1; // remove all options bar first
        districtSel.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done
        for (var state in stateObject[this.value]) {
            stateSel.options[stateSel.options.length] = new Option(state, state);
        }
    }
    countySel.onchange(); // reset in case page is reloaded
    stateSel.onchange = function () {
        districtSel.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done
        var district = stateObject[countySel.value][this.value];
        for (var i = 0; i < district.length; i++) {
            districtSel.options[districtSel.options.length] = new Option(district[i], district[i]);
        }
    }
}