$(function(){
    $("#lop_phu_sp").hide(); // ẩn form 

    
    $("#btn-them").click(function() {
        $("#lop_phu_sp").fadeToggle(); // Hiển thị form 
        $('body').addClass('lock-scroll');  // Thêm class để khóa cuộn
    });


    $("#lop_phu_sp").click(function(event) {
        if (event.target.id ) { //id của #lop_phu_login
            $("#lop_phu_sp").fadeOut(); // Ẩn lớp phủ và form đăng nhập
            $('body').removeClass('lock-scroll');  // Thêm class để khóa cuộn
        }
    });
    
    $("#close-sp").click(function(){
        $("#lop_phu_sp").fadeOut(); // ẩn form   
        $('body').removeClass('lock-scroll');  
    })

});

