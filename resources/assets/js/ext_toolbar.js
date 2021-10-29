
function ext_toolbar(editor) {

    /* menu */
    editor.ui.registry.addMenuItem('加法减法', {
        text: '加法减法',
        onAction: function () {
            var _url = "basicOp.aspx?id="+editor.id+"&op=" + "加法减法";
            if (IsMobile()) {
                openMobile(_url, "加法减法");
            }
            else {
                openPC(_url, "加法减法");
            }
        }
    });

    editor.ui.registry.addMenuItem('乘法除法', {
        text: '乘法除法',
        onAction: function () {
            var _url = "basicOp.aspx?id=" + editor.id + "&op=" + "乘法除法";
            if (IsMobile()) {
                openMobile(_url, "乘法除法");
            }
            else {
                openPC(_url, "乘法除法");
            }
        }
    });

    editor.ui.registry.addMenuItem('括号运算', {
        text: '括号运算',
        onAction: function () {
            var _url = "basicOp.aspx?id=" + editor.id + "&op=" + "括号运算";
            if (IsMobile()) {
                openMobile(_url, "括号运算");
            }
            else {
                openPC(_url, "括号运算");
            }
        }
    });

    editor.ui.registry.addMenuItem('乘方', {
        text: '乘方',
        onAction: function () {
            var _url = "basicOp.aspx?id=" + editor.id + "&op=" + "乘方";
            if (IsMobile()) {
                openMobile(_url, "乘方");
            }
            else {
                openPC(_url, "乘方");
            }
        }
    });

    editor.ui.registry.addMenuItem('开方', {
        text: '开方',
        onAction: function () {
            var _url = "basicOp.aspx?id=" + editor.id + "&op=" + "开方";
            if (IsMobile()) {
                openMobile(_url, "开方");
            }
            else {
                openPC(_url, "开方");
            }
        }
    });

    editor.ui.registry.addMenuItem('二次方程根', {
        text: '二次方程根',
        onAction: function () {
            var _url = "basicOp.aspx?id=" + editor.id + "&op=" + "二次方程根";
            if (IsMobile()) {
                openMobile(_url, "二次方程根");
            }
            else {
                openPC(_url, "二次方程根");
            }
        }
    });

    editor.ui.registry.addMenuItem('指数对数', {
        text: '指数对数',
        onAction: function () {
            var _url = "basicOp.aspx?id=" + editor.id + "&op=" + "指数对数";
            if (IsMobile()) {
                openMobile(_url, "指数对数");
            }
            else {
                openPC(_url, "指数对数");
            }
        }
    });

    editor.ui.registry.addMenuItem('等差求和', {
        text: '等差求和',
        onAction: function () {
            var _url = "basicOp.aspx?id=" + editor.id + "&op=" + "等差求和";
            if (IsMobile()) {
                openMobile(_url, "等差求和");
            }
            else {
                openPC(_url, "等差求和");
            }
        }
    });

    editor.ui.registry.addMenuItem('标准差', {
        text: '标准差',
        onAction: function () {
            var _url = "basicOp.aspx?id=" + editor.id + "&op=" + "标准差";
            if (IsMobile()) {
                openMobile(_url, "标准差");
            }
            else {
                openPC(_url, "标准差");
            }
        }
    });

    editor.ui.registry.addMenuItem('极限', {
        text: '极限',
        onAction: function () {
            var _url = "basicOp.aspx?id=" + editor.id + "&op=" + "极限";
            if (IsMobile()) {
                openMobile(_url, "极限");
            }
            else {
                openPC(_url, "极限");
            }
        }
    });

    editor.ui.registry.addMenuItem('导数', {
        text: '导数',
        onAction: function () {
            var _url = "basicOp.aspx?id=" + editor.id + "&op=" + "导数";
            if (IsMobile()) {
                openMobile(_url, "导数");
            }
            else {
                openPC(_url, "导数");
            }
        }
    });

    editor.ui.registry.addMenuItem('偏分方程', {
        text: '偏分方程',
        onAction: function () {
            var _url = "basicOp.aspx?id=" + editor.id + "&op=" + "偏分方程";
            if (IsMobile()) {
                openMobile(_url, "偏分方程");
            }
            else {
                openPC(_url, "偏分方程");
            }
        }
    });

    editor.ui.registry.addMenuItem('不定积分', {
        text: '不定积分',
        onAction: function () {
            var _url = "basicOp.aspx?id=" + editor.id + "&op=" + "不定积分";
            if (IsMobile()) {
                openMobile(_url, "不定积分");
            }
            else {
                openPC(_url, "不定积分");
            }
        }
    });

    editor.ui.registry.addMenuItem('定积分', {
        text: '定积分',
        onAction: function () {
            var _url = "basicOp.aspx?id=" + editor.id + "&op=" + "定积分";
            if (IsMobile()) {
                openMobile(_url, "定积分");
            }
            else {
                openPC(_url, "定积分");
            }
        }
    });

    editor.ui.registry.addMenuItem('二重积分', {
        text: '二重积分',
        onAction: function () {
            var _url = "basicOp.aspx?id=" + editor.id + "&op=" + "二重积分";
            if (IsMobile()) {
                openMobile(_url, "二重积分");
            }
            else {
                openPC(_url, "二重积分");
            }
        }
    });

    editor.ui.registry.addMenuItem('贝叶斯定理', {
        text: '贝叶斯定理',
        onAction: function () {
            var _url = "basicOp.aspx?id=" + editor.id + "&op=" + "贝叶斯定理";
            if (IsMobile()) {
                openMobile(_url, "贝叶斯定理");
            }
            else {
                openPC(_url, "贝叶斯定理");
            }
        }
    });

    editor.ui.registry.addMenuItem('正态分布', {
        text: '正态分布',
        onAction: function () {
            var _url = "basicOp.aspx?id=" + editor.id + "&op=" + "正态分布";
            if (IsMobile()) {
                openMobile(_url, "正态分布");
            }
            else {
                openPC(_url, "正态分布");
            }
        }
    });

    editor.ui.registry.addMenuItem('泊松分布', {
        text: '泊松分布',
        onAction: function () {
            var _url = "basicOp.aspx?id=" + editor.id + "&op=" + "泊松分布";
            if (IsMobile()) {
                openMobile(_url, "泊松分布");
            }
            else {
                openPC(_url, "泊松分布");
            }
        }
    });

    editor.ui.registry.addMenuItem('三阶行列式', {
        text: '三阶行列式',
        onAction: function () {
            var _url = "basicOp.aspx?id=" + editor.id + "&op=" + "三阶行列式";
            if (IsMobile()) {
                openMobile(_url, "三阶行列式");
            }
            else {
                openPC(_url, "三阶行列式");
            }
        }
    });

    editor.ui.registry.addMenuItem('矩阵', {
        text: '矩阵',
        onAction: function () {
            var _url = "basicOp.aspx?id=" + editor.id + "&op=" + "矩阵";
            if (IsMobile()) {
                openMobile(_url, "矩阵");
            }
            else {
                openPC(_url, "矩阵");
            }
        }
    });

    editor.ui.registry.addMenuItem('余子式', {
        text: '余子式',
        onAction: function () {
            var _url = "basicOp.aspx?id=" + editor.id + "&op=" + "余子式";
            if (IsMobile()) {
                openMobile(_url, "余子式");
            }
            else {
                openPC(_url, "余子式");
            }
        }
    });

    editor.ui.registry.addMenuItem('正弦余弦', {
        text: '正弦余弦',
        onAction: function () {
            var _url = "basicOp.aspx?id=" + editor.id + "&op=" + "正弦余弦";
            if (IsMobile()) {
                openMobile(_url, "正弦余弦");
            }
            else {
                openPC(_url, "正弦余弦");
            }
        }
    });

    editor.ui.registry.addMenuItem('正切余切', {
        text: '正切余切',
        onAction: function () {
            var _url = "basicOp.aspx?id=" + editor.id + "&op=" + "正切余切";
            if (IsMobile()) {
                openMobile(_url, "正切余切");
            }
            else {
                openPC(_url, "正切余切");
            }
        }
    });

    editor.ui.registry.addMenuItem('正割余割', {
        text: '正割余割',
        onAction: function () {
            var _url = "basicOp.aspx?id=" + editor.id + "&op=" + "正割余割";
            if (IsMobile()) {
                openMobile(_url, "正割余割");
            }
            else {
                openPC(_url, "正割余割");
            }
        }
    });

    editor.ui.registry.addMenuItem('抛物线', {
        text: '抛物线',
        onAction: function () {
            var _url = "basicOp.aspx?id=" + editor.id + "&op=" + "抛物线";
            if (IsMobile()) {
                openMobile(_url, "抛物线");
            }
            else {
                openPC(_url, "抛物线");
            }
        }
    });

    editor.ui.registry.addMenuItem('圆', {
        text: '圆',
        onAction: function () {
            var _url = "basicOp.aspx?id=" + editor.id + "&op=" + "圆";
            if (IsMobile()) {
                openMobile(_url, "圆");
            }
            else {
                openPC(_url, "圆");
            }
        }
    });

    editor.ui.registry.addMenuItem('椭圆', {
        text: '椭圆',
        onAction: function () {
            var _url = "basicOp.aspx?id=" + editor.id + "&op=" + "椭圆";
            if (IsMobile()) {
                openMobile(_url, "椭圆");
            }
            else {
                openPC(_url, "椭圆");
            }
        }
    });

    editor.ui.registry.addMenuItem('双曲线', {
        text: '双曲线',
        onAction: function () {
            var _url = "basicOp.aspx?id=" + editor.id + "&op=" + "双曲线";
            if (IsMobile()) {
                openMobile(_url, "双曲线");
            }
            else {
                openPC(_url, "双曲线");
            }
        }
    });

    editor.ui.registry.addMenuItem('球的体积', {
        text: '球的体积',
        onAction: function () {
            var _url = "basicOp.aspx?id=" + editor.id + "&op=" + "球的体积";
            if (IsMobile()) {
                openMobile(_url, "球的体积");
            }
            else {
                openPC(_url, "球的体积");
            }
        }
    });

    /* toolbar */
    editor.ui.registry.addButton('手写公式', {
        text: '手写公式',
        onAction: function (_) {
            var _url = "https://webdemo.myscript.com/views/math/index.html";
            if (IsMobile()) {
                openMobile(_url, "手写公式");
            }
            else {
                openPC2(_url, "手写公式");
            }
        }
    });

    editor.ui.registry.addButton('LaTex符号', {
        text: 'LaTex符号',
        onAction: function (_) {
            var _url="/admin/tinymce-mathjax/math-symbol?id="+editor.id;
            if (IsMobile()) {
                openMobile(_url, "LaTex符号");
            }
            else {
                openPC2(_url, "LaTex符号");
            }
        }
    });

    editor.ui.registry.addButton('上传图片', {
        text: '上传图片',
        onAction: function (_) {
            var _url = '../SimlpeUploadFile.aspx?t=img&id=' + editor.id;
            if (IsMobile()) {
                openMobile(_url, "上传图片");
            }
            else {
                openPC(_url, "上传图片");
            }
        }
    });

    editor.ui.registry.addButton('三角函数', {
        text: '三角函数',
        onAction: function (_) {
            var _url = '../formula/math/三角函数.aspx';
            if (IsMobile()) {
                openMobile(_url, "三角函数");
            }
            else {
                openPC2(_url, "三角函数");
            }
        }
    });

    editor.ui.registry.addButton('微分表', {
        text: '微分表',
        onAction: function (_) {
            var _url = '../formula/math/微分表.aspx';
            if (IsMobile()) {
                openMobile(_url, "微分表");
            }
            else {
                openPC2(_url, "微分表");
            }
        }
    });

    editor.ui.registry.addButton('积分表', {
        text: '积分表',
        onAction: function (_) {
            var _url = '../formula/math/积分表.aspx';
            if (IsMobile()) {
                openMobile(_url, "积分表");
            }
            else {
                openPC2(_url, "积分表");
            }
        }
    });

    editor.ui.registry.addButton('平面几何', {
        text: '平面几何',
        onAction: function (_) {
            var _url = '../formula/math/平面几何.aspx';
            if (IsMobile()) {
                openMobile(_url, "平面几何");
            }
            else {
                openPC2(_url, "平面几何");
            }
        }
    });
}
