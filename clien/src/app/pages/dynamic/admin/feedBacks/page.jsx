import AdminFeedBackTable from "@/components/admin/user-feedbacks/user-feedback-table/user-feedback-table";

export default function AdminFeedBacks(){
    return(
        <div className="container-fluid vh-100">
            <h3 className="pt-3 text-center">User FeedBacks</h3>
            <AdminFeedBackTable/>
        </div>
    )
}