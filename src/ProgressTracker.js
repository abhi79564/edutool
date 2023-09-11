import React, { useState } from 'react';

const ProgressTracker = () => {
  const [coursesCompleted, setCoursesCompleted] = useState(0);
  const [lessonsCompleted, setLessonsCompleted] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0); // in minutes

  const updateProgress = (courses, lessons, time) => {
    setCoursesCompleted(courses);
    setLessonsCompleted(lessons);
    setTimeSpent(time);
  };

  return (
    <div className='container mt-4'>
      <h1 className='text-center mb-4 display-4'>Your Progress</h1>
      <div className='card text-center'>
        <div className='card-body'>
          <p className='card-text fs-5'>
            Courses Completed: {coursesCompleted} <br />
            Lessons Completed: {lessonsCompleted} <br />
            Time Spent Learning: {timeSpent} minutes
          </p>
          <button
            className='btn btn-primary'
            onClick={() => updateProgress(1, 5, 60)}
          >
            Update Progress
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
