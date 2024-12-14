function enviarCorreo(){
    var nombre = $("#nombre").val();
    var emailT = $("#correo").val();
    var telefono = $("#telefono").val();
    var mensaje = $("#mensaje").val();

    if(nombre == "" || emailT == "" || mensaje == "" || telefono == ""){
        alert("Faltan campos por llenar");
    }else{

        $.ajax({
            type: "POST",
            url: 'email.php',
            dataType:'json',
            data: {
                nombre: nombre,
                emailT: emailT,
                telefono: telefono,
                mensaje: mensaje
            },
            success: function(response)
            {
                // var jsonData = JSON.parse(response);
                var jsonData = JSON.parse(JSON.stringify(response));

                // user is logged in successfully in the back-end
                // let's redirect
                if (jsonData.success = "1")
                {
                    // location.href = 'my_profile.php';
                    Swal.fire({
                        icon: 'success',
                        title: 'Enviado',
                        text: 'Envío de correo correctamente',
                        confirmButtonColor: '#3085d6',
                        footer: 'BORJE'
                    });

                }
                
                else
                {
                    // alert('Invalid Credentials!');
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'No se envió el correo',
                        confirmButtonColor: '#3085d6',
                        footer: 'BORJE'
                    });
                    
                }

                document.getElementById('name').value = "";
                document.getElementById('email').value = "";
                document.getElementById('message').value = "";
            }
        });
    }
}