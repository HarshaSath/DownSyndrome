import AdminUserTable from "@/components/admin/user-accounts/user-table/user-table";

export default function AdminUsers(){

    return(
        <div className="container-fluid vh-100">
            <h3 className="pt-3 text-center">User Accounts</h3>
            <AdminUserTable/>
        </div>
    )
}