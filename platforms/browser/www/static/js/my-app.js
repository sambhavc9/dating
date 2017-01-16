
var $$ = Dom7;
var url = 'http://127.0.0.1:9000/api'
var myApp = new Framework7({
    modalTitle: 'FRIENDZZZ',
    pushState: false,
     template7Pages: true,
    hideNavbarOnPageScroll:true,
    hideToolbarOnPageScroll:false,
    smartSelectOpenIn:'picker',
    material:true,
    onAjaxStart: function (xhr) {
        myApp.showIndicator();
    },
    onAjaxComplete: function (xhr) {
        myApp.hideIndicator();
    },
    appInit:function(){
        console.log('hello');
    }
}); 
var mainView = myApp.addView('.view-main');
mainView.router.loadPage({url:'configC.html',animatePages:false, reload: false});
var storage = window.localStorage;

function simulateLoading(container,data) {
    setTimeout(function () {
        var progressBefore = data;
        var progress = data + Math.random() * 25;
        myApp.setProgressbar(container, progress);
        if (progressBefore < 100) {
            simulateLoading(container,progress);
        }
        else {
            userid = window.localStorage.getItem("userid");
            password = window.localStorage.getItem("password");
            console.log(userid);
            console.log(password);
            if(userid != null && password != null){
                //login(userid,password);
            }else{
                mainView.router.loadPage({url:'started.html',animatePages:true, reload: false});
            }
        }
    }, Math.random() * 200 + 200);
}

var options = {
    description: 'Credits towards consultation',
    image: 'https://i.imgur.com/3g7nmJC.png',
    currency: 'INR',
    key: 'rzp_test_1DP5mmOlF5G5ag',
    amount: '5000',
    name: 'foo',
    prefill: {
        email: 'test@razorpay.com',
        contact: '0000000000',
        name: 'Test user'
    },
    theme: {
        color: '#E91E63'
    }
}
var successCallback = function(payment_id) {
    alert('payment_id: ' + payment_id);
}
var cancelCallback = function(error) {
    alert(error.description + ' (Error '+error.code+')');
}


$$(document).on('pageInit', function (e) {
    
    var page = e.detail.page;
    
    if (page.url === 'index.html') {
        var container = $$('.initializeStudySpot .progressbar');
        var progress = 0;
        simulateLoading(container,progress);
        $$('#changeSetting').on('click',function() {
            mainView.router.loadPage({url:'setting.html',animatePages:true, reload: false});
        });
        $$('#changeMembership').on('click',function() {
            mainView.router.loadPage({url:'membership.html',animatePages:true, reload: false});
        });
        $$('#changeLicense').on('click',function() {
            mainView.router.loadPage({url:'license.html',animatePages:true, reload: false});
        });
        $$('#changeDashboard').on('click',function() {
            mainView.router.loadPage({url:'dashboard.html',animatePages:true, reload: false});
        });
        $$('#changeNotification').on('click',function(){
            mainView.router.loadPage({url:'notification.html',animatePages:true, reload: false});
        });
    }if(page.url === 'setting.html'){
        var myPhotoBrowserDark = myApp.photoBrowser({
            photos : [
                'static/img/_1.jpg',
                'static/img/_3.jpg',
                'static/img/_4.jpg',
            ],
            theme: 'dark'
        });
        var mySwiper1 = myApp.swiper('.swiper-1', {
            pagination:'.swiper-1 .swiper-pagination',
            spaceBetween: 20
        });
        $('._numberonly').on('keydown',function(e){
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                // Allow: Ctrl+A
                (e.keyCode == 65 && e.ctrlKey === true) ||
                // Allow: Ctrl+C
                (e.keyCode == 67 && e.ctrlKey === true) ||
                // Allow: Ctrl+X
                (e.keyCode == 88 && e.ctrlKey === true) ||
                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                    // let it happen, don't do anything
                    return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            } 
        });
        $$('#viewMyPics').on('click',function(){
            myPhotoBrowserDark.open();
        });
    }
    if (page.url === 'started.html') {
        $$('#btnStartedAccept').on('click',function() {
            AcceptTerms(true);
            mainView.router.loadPage({url:'configA.html',animatePages:true, reload: false});
        });
        $('._numberonly').on('keydown',function(e){
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                // Allow: Ctrl+A
                (e.keyCode == 65 && e.ctrlKey === true) ||
                // Allow: Ctrl+C
                (e.keyCode == 67 && e.ctrlKey === true) ||
                // Allow: Ctrl+X
                (e.keyCode == 88 && e.ctrlKey === true) ||
                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                    // let it happen, don't do anything
                    return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            } 
        });
    }
    if(page.url === 'configA.html'){
        
         $$('#btnConfigAAccept').on('click',function() {
            mainView.router.loadPage({url:'configB.html',animatePages:true, reload: false});
        });
    }if(page.url === 'configB.html'){
       $$('#btnConfigBAccept').on('click',function() {
            mainView.router.loadPage({url:'configC.html',animatePages:true, reload: false});
        });
    }if(page.url === 'configC.html'){
       $$('#btnFinish').on('click',function() {
            mainView.router.loadPage({url:'dashboard.html',animatePages:true, reload: false});
        });
        
        $$('#btnGetPremium').on('click',function() {
            
            //RazorpayCheckout.open(options, successCallback, cancelCallback)
            //mainView.router.loadPage({url:'membershipPREMIUM.html',animatePages:true, reload: false});
        });
    }if(page.url === 'membershipPREMIUM.html'){
       $$('#btnMemberAccept').on('click',function() {
            mainView.router.loadPage({url:'dashboard.html',animatePages:true, reload: false});
        });
    }if(page.url === 'dashboard.html'){
       $$('._premium li').on('click',function(event) {
           var target = $( event.target );
           if(target.is("span")){
               return true;
           }else{
                mainView.router.loadPage({url:'chat.html',animatePages:true, reload: false});
           }
        });
        $$('._live li').on('click',function() {
            mainView.router.loadPage({url:'livefeed.html',animatePages:true, reload: false});
        });
        $$('._inbox li').on('click',function() {
            mainView.router.loadPage({url:'meeting.html',animatePages:true, reload: false});
        });
    }if(page.url === 'meeting.html'){
       $$('.fa-times-circle').on('click',function() {
            myApp.addNotification({
                message: 'Meeting details deleted successfully!',
                button: {
                    text: '<span class="fa fa-remove fa-2x"></span>',
                    color: 'white'
                }
            });
            
        });
    }if(page.url === 'livefeed.html'){
        var myPhotoBrowserDark = myApp.photoBrowser({
            photos : [
                'static/img/promo/1.jpg',
                'static/img/promo/2.jpg',
                'static/img/promo/3.jpg',
                'static/img/promo/4.jpg',
                'static/img/promo/5.jpg',
                'static/img/promo/6.jpg',
            ],
            theme: 'dark'
        });
        $$('#openLiveFeedImages').on('click', function () {
            myPhotoBrowserDark.open();
        });
    }if(page.url === 'chat.html'){
        var myPhotoBrowserDark = myApp.photoBrowser({
            photos : [
                'static/img/promo/1.jpg',
                'static/img/promo/2.jpg',
                'static/img/promo/3.jpg',
                'static/img/promo/4.jpg',
                'static/img/promo/5.jpg',
                'static/img/promo/6.jpg',
            ],
            theme: 'dark'
        });
       $$('#askForMeet').on('click',function(){
            mainView.router.loadPage({url:'meeting.html',animatePages:true, reload: false});
       });
       $$('#ViewImages').on('click',function(){
           myPhotoBrowserDark.open();
       });  
       $$('#messagetyper').on('click',function(event){
             placeCaretAtEnd($('#messagetyper').get(0));
        });
       $$('#ProfileViewer').on('click',function(){
            mainView.router.loadPage({url:'livefeed.html',animatePages:true, reload: false});
       });
       var myMessages = myApp.messages('.messages', {
            autoLayout: true
        }); 
        var conversationStarted = false;
       //emoicontainer
       $$('#loadEmoji').on('click', function () {
            $('.emoicontainer').toggle();
        });
        $$('#sendChat').on('click', function (event) {
            $('.emoicontainer').css({'display':'none'});
             var messageText = $('#messagetyper').html();
              var messageType = (['sent', 'received'])[Math.round(Math.random())];
              var avatar, name;
                if(messageType === 'received') {
                    avatar = 'static/img/_g.jpg';
                    name = 'Kate';
                }
                 // Add message
                myMessages.addMessage({
                    // Message text
                    text: messageText,
                    // Random message type
                    type: messageType,
                    // Avatar and name:
                    avatar: avatar,
                    name: name,
                    // Day
                    day: !conversationStarted ? 'Today' : false,
                    time: !conversationStarted ? (new Date()).getHours() + ':' + (new Date()).getMinutes() : false
                })
                
                // Update conversation flag
                conversationStarted = true;
        });
        $$('.emoicontainer i').on('click', function () {
            var emo = $(this).attr('class');
            $('#messagetyper').focus();
            placeCaretAtEnd($('#messagetyper').get(0));
            pasteHtmlAtCaret('<i class="'+emo+'" ></i> &nbsp;');
            placeCaretAtEnd($('#messagetyper').get(0));
            //$('#messagetyper').append(this);
        });
    }
});
function placeCaretAtEnd(el) {
    el.focus();
    if (typeof window.getSelection != "undefined"
            && typeof document.createRange != "undefined") {
        var range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (typeof document.body.createTextRange != "undefined") {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.collapse(false);
        textRange.select();
    }
}

function pasteHtmlAtCaret(html) {
    var sel, range;
    if (window.getSelection) {
        // IE9 and non-IE
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();

            // Range.createContextualFragment() would be useful here but is
            // non-standard and not supported in all browsers (IE9, for one)
            var el = document.createElement("div");
            el.innerHTML = html;
            var frag = document.createDocumentFragment(), node, lastNode;
            while ( (node = el.firstChild) ) {
                lastNode = frag.appendChild(node);
            }
            range.insertNode(frag);
            
            // Preserve the selection
            if (lastNode) {
                range = range.cloneRange();
                range.setStartAfter(lastNode);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
    } else if (document.selection && document.selection.type != "Control") {
        // IE < 9
        document.selection.createRange().pasteHTML(html);
    }
}

function AcceptTerms(value){
    window.localStorage.setItem("terms", value);
}



