class Exercise {
    constructor(title, muscle, sets, reps, compound, img) {
        this.title = title;
        this.muscle = muscle;
        this.sets = sets;
        this.reps = reps;
        this.compound = compound;
        this.img = img;
    }

    get item() {
        const itemSection = document.createElement("section");
        itemSection.classList.add("exercise");
        const title = document.createElement("h3");
        title.innerHTML = this.title;
        itemSection.append(title);
        const image = document.createElement("img");
        image.src = this.img;
        itemSection.append(image);
        itemSection.onclick = () => displayExerciseDescription(this);
        return itemSection;
    }
}

const displayExerciseDescription = (exercise) => {
    const descBox = document.getElementById("description");
    descBox.innerHTML = "";
    const p1 = document.createElement("p");
    const close = document.createElement("span");
    p1.id = "close";
    close.innerHTML = "&#10006;";
    p1.append(close);
    descBox.append(p1);
    close.onclick = () => {
        document.getElementById("description").classList.toggle("hidden");
    }
    const h3 = document.createElement("h3");
    h3.innerHTML = exercise.title;
    descBox.append(h3);
    const p2 = document.createElement("p");
    p2.innerHTML = "Compound: " + exercise.compound;
    descBox.append(p2);
    const p3 = document.createElement("p");
    p3.innerHTML = "Muscle Group: " + exercise.muscle;
    descBox.append(p3);
    const p4 = document.createElement("p");
    p4.innerHTML = "# Sets: " + exercise.sets;
    descBox.append(p4);
    const p5 = document.createElement("p");
    p5.innerHTML = "# Repetitions: " + exercise.reps;
    descBox.append(p5);
    const img = document.createElement("img");
    img.src = exercise.img;
    descBox.append(img);

    document.getElementById("description").classList.toggle("hidden");
}

window.onload = () => {
    let exercises = [];
    const items = document.getElementById("items");
    exercises.push(new Exercise("Bench Press", "Chest", "3", "6-10", "True", "images/bench.jpg"));
    exercises.push(new Exercise("Squat", "Legs", "3", "6-8", "True", "images/squat.jpg"));
    exercises.push(new Exercise("Deadlift", "Legs, Back", "2", "4-6", "True", "images/deadlift.jpg"));
    exercises.push(new Exercise("Pull-Up", "Back", "4", "8-12", "True", "images/pullup.jpg"));
    exercises.push(new Exercise("Crunch", "Abdominal", "4", "12-16", "True", "images/crunch.jpg"));
    for(let i in exercises) {
        items.append(exercises[i].item);
    }
}
