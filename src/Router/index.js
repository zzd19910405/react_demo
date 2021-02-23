//路由文件
import Home from '../Pages/Home/Home'
import User from '../Pages/User/user'
import Mine from '../Pages/Mine/Mine'
import CourseAdd from '../Pages/Course/CourseAdd'
import CourseList from '../Pages/Course/CourseList'
import CourseCatgory from '../Pages/Course/CourseCatgory'
import CourseTopic from '../Pages/Course/CourseTopic'

let routes = [
    {path: '/', component: Home, exact: true},
    {path: '/user', component: User},
    {path: '/mine', component: Mine},
    {path: '/courseAdd', component: CourseAdd},
    {path: '/courseList', component: CourseList},
    {path: '/sourseCatgory', component: CourseCatgory},
    {path: '/sourseTopic', component: CourseTopic}
]

export default routes;