// JavaScript Variables
let calorieGoal = 0;
let totalCaloriesBurned = 0;

// Goal Form Submission
document.getElementById('goalForm').addEventListener('submit', function(event) {
  event.preventDefault();
  calorieGoal = parseInt(document.getElementById('calorieGoal').value);
  document.getElementById('goalMessage').textContent = `Goal set to burn ${calorieGoal} calories!`;
  document.getElementById('goalMessage').style.color = "green";
});

// Activity Form Submission
document.getElementById('activityForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const activityType = document.getElementById('activityType').value;
  const metric1 = parseInt(document.getElementById('metric1').value);
  const metric2 = parseInt(document.getElementById('metric2').value);
  const metric3 = parseInt(document.getElementById('metric3').value);

  let caloriesBurned = 0;

  // Different calorie burn formulas for each activity
  switch (activityType) {
    case 'walking':
      caloriesBurned = (metric1 * 0.05) + (metric2 * 0.2) + (metric3 * 0.1);
      break;
    case 'swimming':
      caloriesBurned = (metric1 * 0.1) + (metric2 * 0.3) + (metric3 * 0.2);
      break;
    case 'cycling':
      caloriesBurned = (metric1 * 0.1) + (metric2 * 0.25) + (metric3 * 0.15);
      break;
    case 'running':
      caloriesBurned = (metric1 * 0.15) + (metric2 * 0.3) + (metric3 * 0.2);
      break;
    case 'yoga':
      caloriesBurned = (metric1 * 0.05) + (metric2 * 0.1) + (metric3 * 0.1);
      break;
    case 'weightlifting':
      caloriesBurned = (metric1 * 0.2) + (metric2 * 0.15) + (metric3 * 0.1);
      break;
    default:
      caloriesBurned = 0;
  }

  totalCaloriesBurned += Math.round(caloriesBurned);

  // Add the recorded activity to the table
  addToProgressTable(activityType, metric1, metric2, metric3, Math.round(caloriesBurned));

  // Update Activity Message
  document.getElementById('activityMessage').textContent = 
    `${activityType.charAt(0).toUpperCase() + activityType.slice(1)} recorded. Calories burned: ${Math.round(caloriesBurned)}.`;
  document.getElementById('activityMessage').style.color = "blue";

  // Update Progress Display
  updateProgress();
});

// Function to add activity to the table
function addToProgressTable(activityType, metric1, metric2, metric3, caloriesBurned) {
  const table = document.getElementById('progressTable').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();

  newRow.innerHTML = `
    <td>${activityType}</td>
    <td>${metric1}</td>
    <td>${metric2}</td>
    <td>${metric3}</td>
    <td>${caloriesBurned}</td>
  `;
}

// Update Progress Function
function updateProgress() {
  const progressMessage = totalCaloriesBurned >= calorieGoal
    ? `🎉 Congratulations! You've achieved your goal of burning ${calorieGoal} calories! Total: ${totalCaloriesBurned} calories.`
    : `Progress: ${totalCaloriesBurned}/${calorieGoal} calories burned.`;

  document.getElementById('progressDisplay').textContent = progressMessage;
}
