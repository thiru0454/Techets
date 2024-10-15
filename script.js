function filterCourse() {
    const selectedCourse = document.getElementById('course-filter').value;

    fetch('/filter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ course: selectedCourse }),
    })
    .then(response => response.json())
    .then(data => {
        // Clear the current course container
        const courseContainer = document.getElementById('course-container');
        courseContainer.innerHTML = '';

        // Render filtered courses
        data.forEach(course => {
            const courseBox = document.createElement('div');
            courseBox.className = 'course-box';
            courseBox.setAttribute('data-course', course.id);
            courseBox.innerHTML = `
                <div class="course-content">
                    <img src="images/${course.id.charAt(0).toUpperCase() + course.id.slice(1)}.png" alt="${course.title}">
                    <div class="course-details">
                        <h3>${course.title}</h3>
                        <p>Description for ${course.title}.</p>
                    </div>
                </div>
            `;
            courseContainer.appendChild(courseBox);
        });
    })
    .catch(error => console.error('Error:', error));
}
