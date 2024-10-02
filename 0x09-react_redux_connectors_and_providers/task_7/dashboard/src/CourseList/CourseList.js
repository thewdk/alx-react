import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import { getCoursesList } from '../selectors/courseSelector';
import CourseListRow from './CourseListRow';

/**
 * CourseList component to display a list of courses.
 * This component connects to the Redux store to fetch and manage course data.
 */
const CourseList = ({ courses, fetchCourses, selectCourse, unSelectCourse }) => {

    // useEffect hook to fetch courses when the component mounts or fetchCourses function changes
    useEffect(() => {
        fetchCourses();
    }, [fetchCourses]);

    // Function to handle row selection/unselection
    const onChangeRow = (id, checked) => {
        if (checked) {
            selectCourse(id);
        } else {
            unSelectCourse(id);
        }
    };

    // Render the course list table
    return (
        <table>
            <thead>
                <tr>
                    <th>Course Name</th>
                    <th>Is Selected</th>
                </tr>
            </thead>
            <tbody>
                {courses.map(course => (
                    <CourseListRow
                        key={course.id}
                        course={course}
                        onChangeRow={onChangeRow}
                        isChecked={course.isSelected}
                    />
                ))}
            </tbody>
        </table>
    );
};

// Map state to props
const mapStateToProps = (state) => ({
    courses: getCoursesList(state)
});

// Map dispatch to props
const mapDispatchToProps = {
    fetchCourses,
    selectCourse,
    unSelectCourse
};

// Connect CourseList component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(CourseList);