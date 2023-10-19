import AdminLessonForm from "@/components/admin/lesson/lessonForm/lessonForm";

export default function AdminLessons(){

    return(
        <div className="container-fluid vh-100 overflow-auto">
            <h3 className="pt-3 text-center">MANAGE LESSONS</h3>
            <AdminLessonForm/>
        </div>
    )
}