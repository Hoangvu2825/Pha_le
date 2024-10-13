$(function(){
    $("#lop_phu_login").hide(); // ẩn form 

    
    $("#btnlogin").click(function() {
        $("#lop_phu_login").fadeToggle(); // Hiển thị form 
    });

    // Khi người dùng bấm vào lớp phủ bên ngoài để đóng
    $("#lop_phu_login, #btnlogin").click(function(event) {
        if (event.target.id ) { //id của #lop_phu_login
            $(this).fadeOut(); // Ẩn lớp phủ và form đăng nhập
        }
    });
    
    $(".nut_login").click(function(){
        $("#lop_phu_login").fadeOut(); // ẩn form   
    })

});

