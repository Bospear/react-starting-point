import Swal from "sweetalert2";
const Inverted = Swal.mixin({
    
    toast: true,
    position: 'bottom-left',
    width: 430,
    background:'white',
    color: '#E12031',
    iconColor: '#E12031',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true
  })

const Regular = Swal.mixin({
    toast: true,
    position: 'bottom-left',
    width: 430,
    color: 'white',
    background:"#E12031",
    iconColor: 'white',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true
    })


const ErrorAlert = (message:any, inverted:boolean) => {
   
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
            title: message
        })
    }
}

export default  ErrorAlert;