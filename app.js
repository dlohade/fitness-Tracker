function logExercise() {
    const exerciseName = document.getElementById('exerciseName').value;
    const exerciseDuration = document.getElementById('exerciseDuration').value;

    if (exerciseName && exerciseDuration) {
        const exerciseItem = document.createElement('li');
        exerciseItem.textContent = `${exerciseName} - ${exerciseDuration} minutes`;

        const recentExercises = document.getElementById('recentExercises');
        recentExercises.appendChild(exerciseItem);
    }
}