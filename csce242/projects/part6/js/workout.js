const getWorkouts = async() => {
    const url = "https://logan-df.github.io/csce242/projects/part6/json/workouts.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error) {
        console.log(error);
    }
};

const showWorkouts = async() => {
    const workouts = await getWorkouts();
    const chestSection = document.getElementById("chest");
    const backSection = document.getElementById("back");
    const legsSection = document.getElementById("legs");

    workouts.forEach((workout)=>{
        const workoutSection = document.createElement("section");
        workoutSection.classList.add("content");
        if(workout.muscle == "chest") {
            chestSection.append(workoutSection);
        }
        if(workout.muscle == "back") {
            backSection.append(workoutSection);
        }
        if(workout.muscle == "legs") {
            legsSection.append(workoutSection);
        }
        const img = document.createElement("img");
        img.src = workout.image;
        workoutSection.append(img);
        const h3 = document.createElement("h3");
        h3.innerHTML = workout.name;
        workoutSection.append(h3);
    });
}

showWorkouts();