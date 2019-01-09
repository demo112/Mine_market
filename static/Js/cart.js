function yichu(obj) {
    // 移除商品
    obj.parent().parent().remove()
}
// all price
function countItem() {
    var sum = 0;
    var sumPrice = 0;
    // get goods been chosen
    $('[name=check]:checked').each(function () {
        sum += Number($(this).parents('.g-item').find('.count input').val());
        sumPrice += Number($(this).parents('.g-item').find('.sum b').html().substring(1));
    });
    $('.content .submit-count span').html(sum);
    $('.content .submit-price span').html("&yen;" + sumPrice);
}


$(function () {
    countItem();
    // 提前封装
    // 全选和取消
    var isChecked = false;
    $('#checkAll').click(function () {
            console.log($(this));
            isChecked = !isChecked;
            if(isChecked) {
                $('[name=check]').prop('checked','true');
            }else {
                $('[name=check]').removeAttr('checked');
            }
            countItem();
        });
    // 反选
    $('[name=check]').change(function () {
        // onchange监听按钮状态改变
        // 商品按照牛如果全选中，修改全选钮
        // 只要有一个没选上，全选也不能选中
        // 未被全选的按钮数量大于零
        if($('[name=check]').not('input:checked').size() === 0) {
            // 全选
            $('#checkAll').prop('checked','true');
            isChecked = true;
        }else {
            $('#checkAll').removeAttr('checked');
            isChecked = false
        }
        countItem();
    });
    // 数量加减
    $('.add').click(function () {
        var value = $(this).prev().val();
        console.log(value);
        $(this).prev().val(++value);
        // 价格联动
        // 取单价
        var price_str = $(this).parent().prev().html();
        // 数值字符串
        var price = Number(price_str.substring(1));
        // 小计
        $(this).parent().next().html("<b>&yen" + value*price + "</b>");
        console.log(value);
        countItem();
    });
    $('.minus').click(function () {
        var value = $(this).next().val();
        console.log(value);
        if(value > 1){
            $(this).next().val(--value);
            // 价格联动
            // 取单价
            var price_str = $(this).parent().prev().html();
            // 数值字符串
            var price = Number(price_str.substring(1));
            // 小计
            $(this).parent().next().html("<b>&yen" + value*price + "</b>");
            console.log(value);
        }else {
            if (confirm("是否移除改商品")){
                // 移除商品
                yichu($(this))
            }
        }
        console.log(value);
        countItem();
    });
    $('.count input').blur(function () {
        // get value
        var value = Number($(this).val());
        $(this).prev().val(++value);
        var price_str = $(this).parent().prev().html();
        // 数值字符串
        var price = Number(price_str.substring(1));
        // 小计
        $(this).parent().next().html("<b>&yen" + value*price + "</b>");
        console.log(value);
        countItem();
    });
    // remove goods
    $('.g-item .action').click(function () {
        $(this).parent().remove();
        countItem();
    });

});