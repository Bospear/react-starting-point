import Swal from "sweetalert2";

const Inverted = Swal.mixin({
    
    toast: true,
    position: 'bottom-left',
    width: "100%",
    color: "#E12031",
    background:'white',
    iconColor: "#E12031",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true
  })

const Regular = Swal.mixin({
    
    position: 'top',
    width: "100%",
    toast: true,
    color: 'white',
    background:"#E12031",
    iconColor: 'white',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true
    })


const ErrorAlertMobile = (message:any, inverted:boolean) => {
    if(inverted)
    {
        Inverted.fire({
            icon: 'error',
            title: message,
        })
    }
    else{
        Regular.fire({
            icon: 'error',
            title: message,
        })
    }
}

export default  ErrorAlertMobile;