import AdminLessonForm from "@/components/admin/lesson/lessonForm/lessonForm";

export default function AdminSubLessons(){

    return(
        <div className="container-fluid vh-100 overflow-auto">
            <h3 className="pt-3 text-center">MANAGE SUB LESSONS</h3>
            <AdminLessonForm/>
        </div>
    )
}