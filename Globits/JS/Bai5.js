//Sự kiện khi nhấn nút "Đăng nhập hệ thống"
function DangNhap(){
    //Ẩn nút "Đăng nhập hệ thống"
    //Hiện phần đăng nhập
    var dangNhap = document.getElementById('dangnhap');
    var formDangNhap = document.getElementById('login-form');

    dangNhap.style.display = 'block';
    formDangNhap.style.display = 'block';
}

var username = 'admin';
var password = 'admin';
//Kiểm tra username và password
function CheckIdAndPass(idUsername, idPassword){
    var user = document.getElementById(idUsername);
    var pass = document.getElementById(idPassword);
    var userInfo = document.getElementById('username-info');
    var passInfo = document.getElementById('password-info');
    var login = document.getElementById('login');
    var wrong = document.getElementById('wrong');

    login.innerHTML = '<i class="fa fa-spinner" aria-hidden="true" id="icon"></i>';

    if(user.value == '' || pass.value == ''){
        user.style.border = 'solid 1px red';
        pass.style.border = 'solid 1px red';

        userInfo.style.display = 'block';
        passInfo.style.display = 'block';
        wrong.style.display = 'none';
        return false;
    }

    if(user.value.match(username) && pass.value.match(password)){
        wrong.style.display = 'none';   
        document.getElementById('dangnhap').value = 'Đăng nhập thành công';

        userInfo.style.display = 'none';
        passInfo.style.display = 'none';

        user.style.border = 'solid 1px #c0c0c0';
        pass.style.border = 'solid 1px #c0c0c0';
        return true;

    } else if(!user.value.match(username) && !pass.value.match(password) && user.value != '' || pass.value != ''){
        wrong.style.display = 'block';
        userInfo.style.display = 'none';
        passInfo.style.display = 'none';

        user.style.border = 'solid 1px red';
        pass.style.border = 'solid 1px red';
        return false;
    }
}
