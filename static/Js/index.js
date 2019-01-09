// 获取图片数组
// 开启定时器，切换下标获取图片，空值隐藏于显示
// window.onload = function () {
//     var imgIndex = 0;
//     var imgs = document.getElementsById('banner').child;
//     setInterval(function () {
//         // 越界判断
//         imgIndex++;
//         imgs[imgIndex].style.display = block;
//         imgs[imgIndex].siblings().style.display = none;
//     },1000);
//
//     $('#banner img');
// };


$(function () {
        // 下拉菜单，添加点击时间，传值显示
        $(".select li").each(function () {
           $(this).click(function () {
               $('.currentAddress').html($(this).html());
           })
        });

        // 图片轮播
        let imgIndex = 0;
        let timerId = setInterval(autoPlay,1000);
        function autoPlay() {
            let $imgs = $('#banner img');
            $imgs.each(function () {
                    $(this).css('display','none');
                });
            imgIndex = ++imgIndex === $imgs.length ? 0 : imgIndex++;
            // 根据下标去元素;
            $imgs.eq(imgIndex).css('display','block');

            // 图标
            let $li = $('#banner li');
            $li.each(function () {
                $(this).css('background','#64a131');
            });
            $li.eq(imgIndex).css('background','red');
        }
        $('#banner').bind("mouseover", function () {
            clearInterval(timerId);
            $('#banner img').each(function () {
                $(this).removeAttr('display');
            })
        }).mouseout(function () {
            // 鼠标移出，重启定时器
            timerId = setInterval(autoPlay,1000);
        })
    });

function createXhr() {
    let xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest()
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    return xhr
}

// function check_pwd1() {
//     //创建xhr对象
//     let xhr = createXhr();
//     //创建请求
//     xhr.open('get', '/checkrepeat_email', true);
//     //设置回调函数
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             document.getElementById('check_eml').innerHTML=xhr.responseText;
//         }
//     };
//     //发送请求
//     xhr.send(null);
// }


function check_name(name) {
    let xhr = createXhr();
    let input = document.getElementsByName(name)[0].value;
    xhr.open('get', '/check?' + name + '=' + input + '&tag=' + name, true);
    // console.log(name, input);
    xhr.onreadystatechange = function () {
        let rep = null;
        if (name === 'uemail') {
            if (xhr.readyState === 4 && xhr.status === 200) {
                rep = xhr.responseText;
                document.getElementById("check_email").innerHTML = rep;
            } else {
                rep = "email异常";
                document.getElementById("check_email").innerHTML = rep;
            }
        } else if (name === 'nickname') {
            if (xhr.readyState === 4 && xhr.status === 200) {
                rep = xhr.responseText;
                document.getElementById("check_nickname").innerHTML = rep;
            } else {
                rep = "nickname异常";
                document.getElementById("check_nickname").innerHTML = rep;
            }
        }else if (name === 'uphone') {
            if (xhr.readyState === 4 && xhr.status === 200) {
                rep = xhr.responseText;
                document.getElementById("check_phone").innerHTML = rep;
            } else {
                rep = "phone异常";
                document.getElementById("check_phone").innerHTML = rep;
            }
        }
    };
    xhr.send(null)
}


function check_pwd_same() {
    let p1 = document.getElementsByName('upwd1').value;
    let p2 = document.getElementsByName('upwd2').value;
    console.log(p1, p2);
    if (p1 === p2){
        console.log('我们不一样');
        // todo 无法验证重复
        this.style = 'background-color: red';
        this.setAttribute('placeholder','两次输入不一致')
    }
}
