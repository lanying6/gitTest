var checkConfig = {
    /*按钮文字*/
    finalBtnText: '开始浏览',
    /*每一步各状态描述*/
    checkList: [
        {
            'unchecked':'检测本页面状况',
            'checking':'本页面分辨率...',
            'checked':'本页面分辨率为1920*1080'
        },
    ],
    /*是否显示按钮*/
    isShowFinalBtn: true,
    /*执行结束后的回调函数*/
    callback: function () {
       
    },
    /*是否自动执行回调函数*/
    isAutoRunCallback: false,
    /*每一步的时间间隔*/
    timeGap: 1000

};
AutoCheck.run(checkConfig);