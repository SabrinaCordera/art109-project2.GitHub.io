

//this section changes text


// Function to handle the click event for the "job" span
function changeJobText() {
    var jobSpan = document.getElementById("job");
    var jobs = ["office manager", "CEO", "accountant"]; // Add more job titles as needed

    // Find the current text in the array
    var currentIndex = jobs.indexOf(jobSpan.innerHTML);

    // Get the next job title
    var nextIndex = (currentIndex + 1) % jobs.length;
    var nextJob = jobs[nextIndex];

    // Set the text to the next job title
    jobSpan.innerHTML = nextJob;
}

// Function to handle the click event for the "food" span
function changeFoodText() {
    var foodSpan = document.getElementById("food");
    var food = ["donuts", "coffee", "bagels"]; // Add more food titles as needed

    // Find the current text in the array
    var currentIndex = food.indexOf(foodSpan.innerHTML);

    // Get the next job title
    var nextIndex = (currentIndex + 1) % food.length;
    var nextFood = food[nextIndex];

    // Set the text to the next job title
    foodSpan.innerHTML = nextFood;
}

// Function to handle the click event for the "momact" span
function changeMomActText() {
    var momactSpan = document.getElementById("momact");
    var momact = ["gardening", "hairstyling", "nails", "cooking"]; // Add more activities as needed

    // Find the current text in the array
    var currentIndex = momact.indexOf(momactSpan.innerHTML);

    // Get the next momact title
    var nextIndex = (currentIndex + 1) % momact.length;
    var nextMomact = momact[nextIndex];

    // Set the text to the next momact title
    momactSpan.innerHTML = nextMomact;
}

// Function to handle the click event for the "momcom" span
function changeMomComText() {
    var momcomSpan = document.getElementById("momcom");
    var momcom = ["marigolds", "braiding technique", "acrylic nails", "casseroles"]; // Add more activities as needed

    // Find the current text in the array
    var currentIndex = momcom.indexOf(momcomSpan.innerHTML);

    // Get the next momact title
    var nextIndex = (currentIndex + 1) % momcom.length;
    var nextMomcom = momcom[nextIndex];

    // Set the text to the next momact title
    momcomSpan.innerHTML = nextMomcom;
}


// Function to handle the click event for the "nerd" span
function changeNerdText() {
    var nerdSpan = document.getElementById("nerd");
    var nerd = ["mathalons", "spelling bees", "science olympiad", "debate"]; // Add more activities as needed

    // Find the current text in the array
    var currentIndex = nerd.indexOf(nerdSpan.innerHTML);

    // Get the next momact title
    var nextIndex = (currentIndex + 1) % nerd.length;
    var nextNerd = nerd[nextIndex];

    // Set the text to the next momact title
    nerdSpan.innerHTML = nextNerd;
}

// Function to handle the click event for the "robot" span
function changeRobotText() {
    var RobotSpan = document.getElementById("robot");
    var robot = ["waves at people when they walk by", "shakes hand", "writes with pencil"]; // Add more activities as needed

    // Find the current text in the array
    var currentIndex = robot.indexOf(RobotSpan.innerHTML);

    // Get the next momact title
    var nextIndex = (currentIndex + 1) % robot.length;
    var nextRobot = robot[nextIndex];

    // Set the text to the next momact title
    RobotSpan.innerHTML = nextRobot;
}



// Function to handle the click event for the "sports" span
function changeSportsText() {
    var sportsSpan = document.getElementById("sports");
    var sports = ["soccer", "football", "basketball", "baseball", "volleyball"]; // Add more sports as needed

    // Find the current text in the array
    var currentIndex = sports.indexOf(sportsSpan.innerHTML);

    // Get the next sport
    var nextIndex = (currentIndex + 1) % sports.length;
    var nextSport = sports[nextIndex];

    // Set the text to the next sport
    sportsSpan.innerHTML = nextSport;
}

// Function to handle the click event for the "friend" span
function changeFriendText() {
    var friendSpan = document.getElementById("friend");
    var friend = ["jenny", "heather", "lexi", "hannah", "mary"]; // Add more sports as needed

    // Find the current text in the array
    var currentIndex = friend.indexOf(friendSpan.innerHTML);

    // Get the next sport
    var nextIndex = (currentIndex + 1) % friend.length;
    var nextFriend = friend[nextIndex];

    // Set the text to the next sport
    friendSpan.innerHTML = nextFriend;
}

// Function to handle the click event for the "pet" span
function changePetText() {
    var petSpan = document.getElementById("pet");
    var pet = ["dog", "cat", "bunny", "gecko", "parrot"]; // Add more sports as needed

    // Find the current text in the array
    var currentIndex = pet.indexOf(petSpan.innerHTML);

    // Get the next sport
    var nextIndex = (currentIndex + 1) % pet.length;
    var nextPet = pet[nextIndex];

    // Set the text to the next sport
    petSpan.innerHTML = nextPet;
}



// Function to attach click event listeners to the spans
function attachClickEvents() {
    // Array of span IDs
    var spanIds = ["job", "nerd", "robot", "sports", "friend", "pet", "momact", "momcom", "food", "friend"]; // Include "momact" in the array

    // Loop through each span ID and attach click event listener
    spanIds.forEach(function(id) {
        var spanElement = document.getElementById(id);
        if (id === "sports") {
            spanElement.addEventListener("click", changeSportsText);// Use changeMomActText for "sports" span
        } else if (id === "job") {
            spanElement.addEventListener("click", changeJobText);// Use changeMomActText for "jobs" span
        } else if (id === "momact") { 
            spanElement.addEventListener("click", changeMomActText); // Use changeMomActText for "momact" span
        } else if (id === "food") { 
            spanElement.addEventListener("click", changeFoodText); // Use changeMomActText for "food" span
        } else if (id === "momcom") { 
            spanElement.addEventListener("click", changeMomComText); // Use changeMomActText for "momcom" span
        } else if (id === "nerd") { 
            spanElement.addEventListener("click", changeNerdText); // Use changeMomActText for "momcom" span
        } else if (id === "robot") { 
            spanElement.addEventListener("click", changeRobotText); // Use changeMomActText for "momcom" span
        } else if (id === "friend") { 
            spanElement.addEventListener("click", changeFriendText); // Use changeMomActText for "momcom" span
        } else if (id === "pet") { 
            spanElement.addEventListener("click", changePetText); // Use changeMomActText for "momcom" span
        } else {
            spanElement.addEventListener("click", function() {
                changeText(id);
            });
        }
    });
}

// Call the function to attach click event listeners when the DOM is loaded
document.addEventListener("DOMContentLoaded", attachClickEvents);


// button that appears when you click the captical B
function author(){
    alert("What do you get from learning these secrets?");

}