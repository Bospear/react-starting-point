export function CurrentUserPermmisionChange(user:any){

        let currentUser = user;
        currentUser.light_mode = false;
        
        if(currentUser.is_super_hr)
        {
            let canView_HomePage = true;
            let canView_Recruitment = true;
            let canView_CompanySection = true;
            let canView_CreateNewUser = true;
            let canView_InactiveEmployeeList = true;
            let canView_EmployeeListOptions = true;
            let canView_EmployeeList = !canView_EmployeeListOptions;
            let canView_TravelRequestList = true;
            let canView_TravelRequestForm = true;
            let canView_TravelRequestOptions = true;
            let canView_TravelRequest = !canView_TravelRequestOptions;
            let canView_PerformanceReviewCreateTemplate = true;
            
            currentUser.permissions = {canView_HomePage, canView_Recruitment, canView_CompanySection, canView_CreateNewUser,
                canView_InactiveEmployeeList, canView_EmployeeList,
                canView_EmployeeListOptions, canView_TravelRequestList, canView_TravelRequestForm, canView_TravelRequestOptions, canView_TravelRequest, 
                canView_PerformanceReviewCreateTemplate};
        }
        else
        if(currentUser.is_client)
        {
            let canView_HomePage = false
            let canView_Recruitment = false;
            let canView_CompanySection = false;
            let canView_CreateNewUser = false;
            let canView_InactiveEmployeeList = false;
            let canView_EmployeeListOptions = false;
            let canView_EmployeeList = !canView_EmployeeListOptions;
            let canView_TravelRequestList = false;
            let canView_TravelRequestForm = false;
            let canView_TravelRequestOptions = false;
            let canView_TravelRequest = !canView_TravelRequestOptions;
            let canView_PerformanceReviewCreateTemplate = true;
            
            currentUser.permissions = {canView_HomePage, canView_Recruitment, canView_CompanySection, canView_CreateNewUser,
                canView_InactiveEmployeeList, canView_EmployeeList,
                canView_EmployeeListOptions, canView_TravelRequestList, canView_TravelRequestForm, canView_TravelRequestOptions, canView_TravelRequest, 
                canView_PerformanceReviewCreateTemplate};
        }
        return currentUser;
    }
