$(function(){
    $("#lop_phu_sp").hide(); // ẩn form 

    
    $("#btn-them").click(function() {
        $("#lop_phu_sp").fadeToggle(); // Hiển thị form 
        $('body').addClass('lock-scroll');  // Thêm class để khóa cuộn
    });

    // Khi người dùng bấm vào lớp phủ bên ngoài để đóng
    $("#close-sp").click(function(event) {
            $("#lop_phu_sp").fadeOut(); // Ẩn lớp phủ và form đăng nhập
            $('body').removeClass('lock-scroll');  // Thêm class để khóa cuộn
    });
    
    $("#close-sp").click(function(){
        $("#lop_phu_sp").fadeOut(); // ẩn form   
        $('body').removeClass('lock-scroll');  
    })

});

