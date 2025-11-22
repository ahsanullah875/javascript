// 1. Speed Limit Warning
// Given a speed, print:

// "Too slow" if below 30
// "Safe speed" if between 30 and 60
// "Speeding" if between 61 and 100
// "Dangerously fast" if over 100

// let speed = 100;
// if (speed < 30) {
//     console.log("Too slow");
// } else if (speed >= 30 && speed <= 60) {
//     console.log("Safe speed");
// } else if (speed >= 61 && speed <= 100) {
//     console.log("Speeding");
// } else {
//     console.log("Dangerously fast");
// }

// 2. Library Book Return Fine
// Given number of late days, calculate the fine:

// 0 days: $0
// 1–5 days: $1 per day
// 6–10 days: $2 per day
// 11+ days: $5 per day


// let lateDays = 17;

// if(lateDays === 0){
//     console.log("No late charges");
    
// }else if(lateDays <= 5) {
//     console.log("$1 per day " , lateDays * 1);
    
// } else if(lateDays <= 10) {
//     console.log("$2 per day " , lateDays * 2);
    
// } else {
//     console.log("$5 per day " , lateDays * 5);

// }

// 3. Event Entry Eligibility
// Check if a person (with age and ticket) can enter:

// Must be 18 or older
// Must have a valid ticket

// let age = 20;
// let eventPass = true;


// if(age > 18 && eventPass){
//     console.log("Welcome to my event.");
    
// }else {
//     console.log("You are not eligible.");
    
// }

// 4. Smartphone Battery Status
// Given battery percentage, print:

// 80–100: "Fully charged"
// 50–79: "Good battery"
// 20–49: "Low battery"
// Below 20: "Charge now!"

// let currentBattery = 99;
// if(currentBattery >= 80){
//     console.log("Fully charged"); 
// } else if(currentBattery >= 50 && currentBattery <=79) {
//     console.log("Good battery");
// } else if(currentBattery >= 20 && currentBattery <= 49){
//     console.log("Low battery");
// } else {
//     console.log("Charge Now.");
// }


// 5. Discount Eligibility
// Given customer type and age, apply discount:

// Student: 20%
// Senior (60+): 30%
// Others: 0%

// let student = false;
// let age = 31;
// if (student){
//     console.log("20% discount milaiga");  
// } else if(age > 60){
//     console.log("senior 30% discount");
// }else {
//     console.log("no discount ");
// }

// 6. Clothing Recommendation
// Based on temperature (°C), suggest clothing:

// Below 10: "Heavy jacket"
// 10–20: "Sweater"
// 21–30: "T-shirt"
// Above 30: "Light clothes"

// let temperature = 15;
// if(temperature < 10){
//     console.log("Heavy jacket");
// } else if(temperature >= 10 && temperature <=20){
//     console.log("Sweater");
// } else if(temperature >= 21 && temperature <=30){
//     console.log("T-shirt");
// } else {
//     console.log("Light clothes");
// }

// 7. Water Intake Reminder
// Based on activity level, suggest water intake:

// Sedentary: 2L
// Moderate: 2.5L
// Active: 3L+

// let activityLevel = "Sedentary";
// if(activityLevel === "Sedentary"){
//     console.log("2L water");
// }else if(activityLevel === "Moderate"){
//         console.log("2.5L water");
// }else {
//         console.log("3L+ water");
// }

// . Exam Result Evaluation
// Given three subject marks, print:

// "Pass" if all marks are 40 or above
// "Fail" if any mark is below 40

// let subject1 = 50;
// let subject2 = 70;
// let subject3 = 30;
// if(subject1 >= 40 && subject2 >= 40 && subject3 >= 40){
//     console.log("Pass");
// } else {
//     console.log("Fail");
// }

// 9. App Theme Selection
// Based on time of day (0–23), select theme:

// 6–17: Light Mode
// Otherwise: Dark Mode

// let timeOfDay = 11;
// if(timeOfDay >= 6 && timeOfDay <=17){
//     console.log("Light Mode");
// } else {
//     console.log("Dark Mode");
// }

// 10. Meal Type Identifier
// Based on time of day (0–23), identify meal:

// 6–10: Breakfast
// 12–14: Lunch
// 18–21: Dinner
// Any other time: Snack

// let timeOfDay = 66;
// if(timeOfDay >= 6 && timeOfDay <=10){
//     console.log("Breakfast");
// } else if(timeOfDay >= 12 && timeOfDay <=14){
//     console.log("Lunch");
// } else if(timeOfDay >= 18 && timeOfDay <=21){
//     console.log("Dinner");
// } else {
//     console.log("Snack");
// }