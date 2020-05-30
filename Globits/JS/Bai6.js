//Sự kiện khi nhấn nút "Đăng nhập hệ thống"
function DangNhap(){
    //Ẩn nút "Đăng nhập hệ thống"
    //Hiện phần đăng nhập
    var dangNhap = document.getElementById('dangnhap');
    var formDangNhap = document.getElementById('login-form');

    dangNhap.style.display = 'block';
    formDangNhap.style.display = 'block';
}

//Nhấn Forgot Password
function ForgotPassWord(){
    var id = document.getElementById('id');
    var pass = document.getElementById('password');
    var icon = document.getElementById('icon');
    var wrong = document.getElementById('wrong');
    var loginForm = document.getElementById('login-form');
    var changePass = document.getElementById('change-password');

    loginForm.style.display = 'none';
    changePass.style.display = 'block';

    id.style.border = 'solid 1px #c0c0c0';
    pass.style.border = 'solid 1px #c0c0c0';

    icon.style.display = 'none';
    wrong.style.display = 'none';
}

var username = 'admin';
var password = 'admin';
//Sự kiện khi ấn nút Save
function Luu(){
    var user = document.getElementById('oldpass');
    var pass = document.getElementById('newpass');
    var oldInfo = document.getElementById('oldpass-info');
    var passInfo = document.getElementById('newpass-info');
    var success = document.getElementById('success');
    var loginForm = document.getElementById('login-form');
    var changePass = document.getElementById('change-password');
    var userInfo = document.getElementById('username-info');
    var passwordInfo = document.getElementById('password-info');

    //Nếu OldPassword không bằng pass trước
    if(user.value == '' || pass.value == ''){
        user.style.border = 'solid 1px red';
        pass.style.border = 'solid 1px red';

        oldInfo.style.display = 'block';
        passInfo.style.display = 'block';

        return false;
    }

    //Nếu OldPassword không bằng pass trước
    if(user.value != password){
        oldInfo.innerHTML = 'Password không đúng';
        oldInfo.style.display = 'block';
        user.style.border = 'solid 1px red';
        passInfo.style.display = 'none';
        pass.style.border = 'solid 1px #c0c0c0';
        return false;
        //Nếu OldPassword bằng pass trước
    } else if(user.value == password){
        user.style.border = 'solid 1px #c0c0c0';
        success.style.display = 'block';
        oldInfo.style.display = 'none';
        loginForm.style.display = 'block';
        changePass.style.display = 'none';

        userInfo.style.display = 'none';
        passwordInfo.style.display = 'none';

        password = pass.value;  //Gán password bằng NewPassword
        return true;
    }  
}

//Kiểm tra username và password
function CheckIdAndPass(){
    var user = document.getElementById('id');
    var pass = document.getElementById('password');
    var userInfo = document.getElementById('username-info');
    var passInfo = document.getElementById('password-info');
    var login = document.getElementById('login');

    var wrong = document.getElementById('wrong');

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
        login.innerHTML = '<i class="fa fa-spinner" aria-hidden="true" id="icon"></i>';
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