/*Student Life*/
$(document).ready(function(){ 
    var malepercentage = parseInt($('.distribution-breakdown__percentage span').text());
    var femalepercentage = 100 - malepercentage;
    
    var male = '<span class="icon people-male"><img src="assets/demo/demo5/media/img/male.svg"></span>';
    var female = '<span class="icon people-female"><img src="assets/demo/demo5/media/img/female.svg"></span>';
    var divs = $(".distribution-breakdown__visual"); 
    for(var i = 0; i < malepercentage; i++) { 
        divs.append( male);
    } 
    for(var i = 0; i < femalepercentage; i++) { 
        divs.append(female );
    }
    }); 
    
    /*Copy to clipboard button*/
    
    $('.cont_share_button div').on('click', function() {
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val($("#copy2clip").val()).select();
            document.execCommand("copy");
            $temp.remove();
        });
        
        
    $(function () {
    var chart = new Highcharts.chart('scatterchart2', {
    
        chart: {
            type: 'column'
        },
    
        title: {
            text: ' '
        },
    
        xAxis: {
            allowHTML: true,
            categories: ['6.0 - IELTS<br>60-78 TOEFL', '6.5 - IELTS<br>79-93 TOEFL', '7.0 - IELTS<br>94-101 TOEFL', '7.5 - IELTS<br>102-109 TOEFL', '8.0 - IELTS<br>110-114 TOEFL', '8.5 - IELTS<br>115-117 TOEFL', '9.0 - IELTS<br>118-120 TOEFL']
        },
    
        yAxis: {
            allowDecimals: false,
            min: 0,
    
           title: {
                text: ''
            }
        },
         legend: {
            enabled: false,
        },
        tooltip: {
             formatter: function() {
                                    var tip = '<b>'+ this.x ;
                                    var stackSelected = this.point.series.options.stack;
                                    var categorySelected = this.point.category;
    
                                    tip += '<br/>'+stackSelected+'</b>';
                                    tip += '<br/>';
    
                                    var index = 0;
                                    $.each(this.series.chart.series, function(i, s) {
                                        if(s.options.stack == stackSelected){
    
                                            $.each(s.data, function(j, point){
                                                if(point.category == categorySelected)
                                                    tip += '<b  style="border-left: 4px solid '+point.color+'; padding-left: 5px;">'+s.name+' : </b>'+point.y+'<br>';
                                            });
    
                                        }
    
                                    });
    
                                    return tip;
                                    },
                                     useHTML: true,
                                     padding: 10,
                    
        
        },
    
        plotOptions: {
            column: {
                stacking: 'normal',
                
            },
            
        },
         
    
        series: [
        {
            name: '2.49 or below',
            data: [0, 0, 2, 3, 5, 6, 7],
            stack: 'Accepted'
        }, {
            name: '2.50 - 2.99',
            data: [2, 2, 5, 4, 8, 10, 10],
            stack: 'Accepted'
        }, {
            name: '3.00 - 3.24',
            data: [5, 5, 6, 6, 10, 15, 10],
            stack: 'Accepted'
        }, {
            name: '3.25 - 3.49',
            data: [20, 25, 25, 25, 25, 30, 30],
            stack: 'Accepted'
        }, {
            name: '3.50 - 3.74',
            data: [25, 30, 30, 30, 35, 30, 30],
            stack: 'Accepted'
        }, {
            name: '3.75 or Higher',
            data: [70, 60, 38, 41, 37, 27, 31],
            stack: 'Accepted'
        },{
            name: '2.49 or below',
            data: [70, 60, 38, 41, 37, 27, 31],
            stack: 'Rejected'
        }, {
            name: '2.50 - 2.99',
            data: [35, 30, 40, 50, 45, 50, 40],
            stack: 'Rejected'
        }, {
            name: '3.00 - 3.24',
            data: [20, 25, 35, 21, 28, 20, 20],
            stack: 'Rejected'
        }, {
            name: '3.25 - 3.49',
            data: [5, 5, 15, 30, 20, 15, 10],
            stack: 'Rejected'
        },  {
            name: '3.50 - 3.74',
            data: [40, 20, 15, 10, 30, 20, 20],
            stack: 'Rejected'
        },	{
            name: '3.75 or Higher',
            data: [0, 0, 12, 10, 5, 10, 5],
            stack: 'Rejected'
        } ]
        
    });
    
    });
    
    $(function () {
    var chart = new Highcharts.chart('scatterchart', {
    
        chart: {
            type: 'column'
        },
    
        title: {
            text: ' '
        },
    
        xAxis: {
            allowHTML: true,
            categories: ['6.0 - IELTS<br>60-78 TOEFL', '6.5 - IELTS<br>79-93 TOEFL', '7.0 - IELTS<br>94-101 TOEFL', '7.5 - IELTS<br>102-109 TOEFL', '8.0 - IELTS<br>110-114 TOEFL', '8.5 - IELTS<br>115-117 TOEFL', '9.0 - IELTS<br>118-120 TOEFL']
        },
    
        yAxis: {
            allowDecimals: false,
            min: 0,
            max: 100,
           title: {
                text: ''
            }
        },
         legend: {
            enabled: false,
        },
        tooltip: {
             formatter: function() {
                                    var tip = '<b>'+ this.x ;
                                    var stackSelected = this.point.series.options.stack;
                                    var categorySelected = this.point.category;
    
                                    tip += '<br/>'+stackSelected+'</b>';
                                    tip += '<br/>';
    
                                    var index = 0;
                                    $.each(this.series.chart.series, function(i, s) {
                                        if(s.options.stack == stackSelected){
    
                                            $.each(s.data, function(j, point){
                                                if(point.category == categorySelected)
                                                    tip += '<b  style="border-left: 4px solid '+point.color+'; padding-left: 5px;">'+s.name+' : </b>'+point.y+'%<br>';
                                            });
    
                                        }
    
                                    });
    
                                    return tip;
                                    },
                                     useHTML: true,
                                     padding: 10,
                    
        
        },
    
        plotOptions: {
            column: {
                stacking: 'percent',
                
            },
            
        },
         
    
        series: [
        {
            name: '2.49 or below',
            data: [0, 0, 12, 10, 5, 6, 7],
            stack: 'Accepted'
        }, {
            name: '2.50 - 2.99',
            data: [0, 0, 5, 4, 8, 12, 12],
            stack: 'Accepted'
        }, {
            name: '3.00 - 3.24',
            data: [5, 5, 10, 10, 10, 15, 10],
            stack: 'Accepted'
        }, {
            name: '3.25 - 3.49',
            data: [10, 15, 15, 15, 15, 20, 20],
            stack: 'Accepted'
        }, {
            name: '3.50 - 3.74',
            data: [15, 20, 20, 20, 25, 20, 20],
            stack: 'Accepted'
        }, {
            name: '3.75 or Higher',
            data: [70, 60, 38, 41, 37, 27, 31],
            stack: 'Accepted'
        },{
            name: '2.49 or below',
            data: [70, 60, 38, 41, 37, 27, 31],
            stack: 'Rejected'
        }, {
            name: '2.50 - 2.99',
            data: [15, 20, 20, 20, 25, 20, 20],
            stack: 'Rejected'
        }, {
            name: '3.00 - 3.24',
            data: [10, 15, 15, 15, 15, 20, 20],
            stack: 'Rejected'
        }, {
            name: '3.25 - 3.49',
            data: [5, 5, 10, 10, 10, 15, 10],
            stack: 'Rejected'
        },  {
            name: '3.50 - 3.74',
            data: [0, 0, 5, 4, 8, 12, 12],
            stack: 'Rejected'
        },	{
            name: '3.75 or Higher',
            data: [0, 0, 12, 10, 5, 6, 7],
            stack: 'Rejected'
        } ]
        
    });
    $('.legend').on('click', function() {
            var elemId = $(this).attr('id');
            $.each(chart.series, function (k, v) {
            if (v.options.stack == elemId) { //elemId is the string to compare
            chart.series[k].show();
            } else {
            chart.series[k].hide();
            }
            });
        });
    });
    
      
        
    $(function () { 
        
        
        var categoryLinks = {
            'Fuqua': '<a href="http://gmatclub.com/forum/fuqua-193/" target="_blank" style=""><img style="max-width: 45px; height: 32px;" src="https://gmatclub.com/forum/schools/logo/Fuqua_(Duke) copy.png"><img><br>Fuqua</a>',
            'Ross': '<a href="http://gmatclub.com/forum/ross-196/" target="_blank" style=""><img style="max-width: 45px; height: 32px;" src="https://gmatclub.com/forum/schools/logo/michigan-ross-mba.png"><img><br>Ross</a>',
            'Kellogg': '<a href="http://gmatclub.com/forum/kellogg-191/" target="_blank" style=""><img style="max-width: 45px; height: 32px;" src="https://gmatclub.com/forum/schools/logo/Northwestern_University_Kellogg.png"><img><br>Kellogg</a>',
            'Tuck': '<a href="http://gmatclub.com/forum/tuck-194/" target="_blank" style=""><img style="max-width: 45px; height: 32px;" src="https://gmatclub.com/forum/schools/logo/Tuck_School_of_Business_logo.png"><img><br>Tuck</a>',
            'CBS': '<a href="http://gmatclub.com/forum/columbia-190/" target="_blank" style=""><img style="max-width: 45px; height: 32px;" src="https://gmatclub.com/forum/schools/logo/Columbia_Business_School_logo.png"><img><br>CBS</a>',
            'Stern': '<a href="http://gmatclub.com/forum/stern-199/" target="_blank" style=""><img style="max-width: 45px; height: 32px;" src="https://gmatclub.com/forum/schools/logo/stern-2016-logo.png"><img><br>Stern</a>',
            'Tepper': '<a href="http://gmatclub.com/forum/tepper-205/" target="_blank" style=""><img style="max-width: 45px; height: 32px;" src="https://gmatclub.com/forum/schools/logo/Tepperlogo1 100 by 100.png"><img><br>Tepper</a>',
            'Booth': '<a href="http://gmatclub.com/forum/booth-189/" target="_blank" style=""><img style="max-width: 45px; height: 32px;" src="https://gmatclub.com/forum/schools/logo/University_of_Chicago_Booth_MBA_logo.png"><img><br>Booth</a>',
            'Kenan-Flagler': '<a href="http://gmatclub.com/forum/kenan-flagler-206/" target="_blank" style=""><img style="max-width: 45px; height: 32px;" src="https://gmatclub.com/forum/schools/logo/unc-mba-logo.png"><img><br>Kenan-Flagler</a>',
            'Yale': '<a href="http://gmatclub.com/forum/yale-200/" target="_blank" style=""><img style="max-width: 45px; height: 32px;" src="https://gmatclub.com/forum/schools/logo/yale-logo-mba2.png"><img><br>Yale</a>',
            'CEIBS': '<a href="http://gmatclub.com/forum/ceibs-260/" target="_blank" style=""><img style="max-width: 45px; height: 32px;" src="https://gmatclub.com/forum/schools/logo/CEIBS_(China_Europe_International_Business_School) copy.png"><img><br>CEIBS</a>',
            'Neeley': '<a href="http://gmatclub.com/forum/neeley-275/" target="_blank" style=""><img style="max-width: 45px; height: 32px;" src="https://gmatclub.com/forum/schools/logo/neely.png"><img><br>Neeley</a>',
            'Kogod': '<a href="http://gmatclub.com/forum/kogod-american-university-326/" target="_blank" style=""><img style="max-width: 45px; height: 32px;" src="https://gmatclub.com/forum/schools/logo/America-Kogod.png"><img><br>Kogod</a>',
            'IE': '<a href="http://gmatclub.com/forum/ie-mba-223/" target="_blank" style=""><img style="max-width: 45px; height: 32px;" src="https://gmatclub.com/forum/schools/logo/IE copy.png"><img><br>IE</a>',
            'Eller': '<a href="http://gmatclub.com/forum/Eller-University-of-Arizona-349/" target="_blank" style=""><img style="max-width: 45px; height: 32px;" src="https://gmatclub.com/forum/schools/logo/Eller_100_X_100.jpg"><img><br>Eller</a>',
            'MIT ZLOG': '<a href="http://gmatclub.com/forum/Smurfit-360/" target="_blank" style=""><img style="max-width: 45px; height: 32px;" src="https://gmatclub.com/forum/schools/logo/Zaragoza 100 by 100.jpg"><img><br>MIT ZLOG</a>',
            'Merage': '<a href="http://gmatclub.com/forum/merage-irvine-242/" target="_blank" style=""><img style="max-width: 45px; height: 32px;" src="https://gmatclub.com/forum/schools/logo/UC Irvine.png"><img><br>Merage</a>',
            'HEC Montreal': '<a href="http://gmatclub.com/forum/hec-montreal-270/" target="_blank" style=""><img style="max-width: 45px; height: 32px;" src="https://gmatclub.com/forum/schools/logo/HEC_Montreal copy.png"><img><br>HEC Montreal</a>',
            'Davis': '<a href="http://gmatclub.com/forum/uc-davis-mba-258/" target="_blank" style=""><img style="max-width: 45px; height: 32px;" src="https://gmatclub.com/forum/schools/logo/Davis_(University_of_California) copy.png"><img><br>Davis</a>',
            'Broad': '<a href="http://gmatclub.com/forum/broad-michigan-state-248/" target="_blank" style=""><img style="max-width: 45px; height: 32px;" src="https://gmatclub.com/forum/schools/logo/broad-mba-logo.jpg"><img><br>Broad</a>'
        };
        var colors = ['#f5892f', '#134985', '#31a6de', '#03b169', '#f0c40f', '#f5892f', '#134985', '#31a6de', '#03b169', '#f0c40f'];
        var myChart = Highcharts.chart('scatterchart3', {
            chart: {
                type: 'column'
            },
            
            xAxis: {
                categories: ['Fuqua', 'Ross', 'Kellogg', 'Tuck', 'CBS', 'Stern', 'Tepper', 'Booth', 'Kenan-Flagler', 'Yale', 'CEIBS', 'Neeley', 'Kogod', 'IE',
                'Eller', 'MIT ZLOG', 'Merage', 'HEC Montreal', 'Davis', 'Broad'],                
    
                labels: {
                    formatter: function () {
                        return categoryLinks[this.value]  ;
                    },
                    useHTML: true,
                   
                  
                }
            },
            
           
            
            yAxis:{
                title: {
                    text: 'Applicants'
                }
            },
                legend: {
                enabled: false
            },
           

            series: [{
                name: '',
                colorByPoint: true,
                data: [ {y:40,
                    color: colors[0]
                    },
                    {y:27,
                     color: colors[1]},
                    {y:23,
                        color: colors[2]},
                    {y:23,
                        color: colors[3]},
                    {y:22,
                        color: colors[4]},
                    {y:21,
                        color: colors[5]},
                    {y:19,
                        color: colors[6]},
                    {y:18,
                        color: colors[7]},
                    {y:17,
                        color: colors[8]},
                    {y:16,
                        color: colors[9]},
                    {y:1,
                        color: colors[0]},
                    {y:1,
                        color: colors[1]},
                    {y:1,
                        color: colors[2]},
                    {y:1,
                        color: colors[3]},
                    {y:1,
                        color: colors[4]},
                    {y:1,
                        color: colors[5]},
                    {y:1,
                        color: colors[6]},
                    {y:1,
                        color: colors[7]},
                    {y:1,
                        color: colors[8]},
                    {y:1,
                        color: colors[9]},
                   ]
            }],
            dataLabels: {
                enabled: true,
                color: '#000',
               
                format: '{point.y:.1f}', // one decimal
                
                style: {
                    fontSize: '13px',
                    
                },
            }    
        });
    });
            
    
    $(function () {
        "use strict"; 
     // ============================================================== 
        // Total revenue chart
        // ============================================================== 
        new Chartist.Bar('#pt1 .total-sales', {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
            , series: [
            [-10, -5, 0, 5, 12, 5, 10, 15, 20, 22, 5, -10]
            , [0, 5, 10, 18, 20, 20, 22, 25, 30, 32, 10, 0]
            
          ]
        }, {
            high: 60
            , low: -20
            , fullWidth: true
            , plugins: [
            Chartist.plugins.tooltip()]
            , stackBars: true
            , axisX: {
                showGrid: false
            }
            , axisY: {
                showGrid: true
            }
        }).on('draw', function (data) {
            if (data.type === 'bar') {
                data.element.attr({
                    style: 'stroke-width: 30px'
                });
            }
        });
    });
    $(function () {
        "use strict"; 
     // ============================================================== 
        // Total revenue chart
        // ============================================================== 
        new Chartist.Bar('#pt2 .total-sales', {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
            , series: [
            [-10, -5, 0, 5, 12, 5, 10, 15, 20, 22, 5, -10]
            , [0, 5, 10, 18, 20, 20, 22, 25, 30, 32, 10, 0]
            
          ]
        }, {
            high: 60
            , low: -20
            , fullWidth: true
            , plugins: [
            Chartist.plugins.tooltip()]
            , stackBars: true
            , axisX: {
                showGrid: false
            }
            , axisY: {
                showGrid: true
            }
        }).on('draw', function (data) {
            if (data.type === 'bar') {
                data.element.attr({
                    style: 'stroke-width: 30px'
                });
            }
        });
    });
    $(function () {
        "use strict"; 
     // ============================================================== 
        // Total revenue chart
        // ============================================================== 
        new Chartist.Bar('#pt3 .total-sales', {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
            , series: [
            [-10, -5, 0, 5, 12, 5, 10, 15, 20, 22, 5, -10]
            , [0, 5, 10, 18, 20, 20, 22, 25, 30, 32, 10, 0]
            
          ]
        }, {
            high: 60
            , low: -20
            , fullWidth: true
            , plugins: [
            Chartist.plugins.tooltip()]
            , stackBars: true
            , axisX: {
                showGrid: false
            }
            , axisY: {
                showGrid: true
            }
        }).on('draw', function (data) {
            if (data.type === 'bar') {
                data.element.attr({
                    style: 'stroke-width: 30px'
                });
            }
        });
    });
    $(function () {
        "use strict"; 
     // ============================================================== 
        // Total revenue chart
        // ============================================================== 
        new Chartist.Bar('#pt4 .total-sales', {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
            , series: [
            [-10, -5, 0, 5, 12, 5, 10, 15, 20, 22, 5, -10]
            , [0, 5, 10, 18, 20, 20, 22, 25, 30, 32, 10, 0]
            
          ]
        }, {
            high: 60
            , low: -20
            , fullWidth: true
            , plugins: [
            Chartist.plugins.tooltip()]
            , stackBars: true
            , axisX: {
                showGrid: false
            }
            , axisY: {
                showGrid: true
            }
        }).on('draw', function (data) {
            if (data.type === 'bar') {
                data.element.attr({
                    style: 'stroke-width: 30px'
                });
            }
        });
    });
    
    $(document).ready(function(){
        
        $('.program_total li').click(function(){
            var li_id = '#'+ $(this).attr('id');	
            $('.program_total li').removeClass('current');
            $('.pweather').removeClass('current');
            $('.prmap').removeClass('current');
            
    
            $(this).addClass('current');
            $(this).parents('.pr_map').find(".program_map").children(li_id).addClass('current');
            $(this).parents('.pr_map').find(".chart").children('.card-block').children(li_id).addClass('current');
        })
    
    });
    
    
    $(document).ready(function() {
     $(".authorwithbio .title_of_user").hover(
           function(){ $(this).parents('.authorwithbio').toggleClass('activelink')}
          
    )
    });
    
    $(document).ready(function(){
        $('#lightgallery').lightGallery(); 
    
    });	
    
    
    
    $('.gall_item_click').on('click', function() {
            $('.gall_item:nth-child(n+8)').trigger('click'); 
    }); 
    $(document).ready(function(){
        
        $('.program_detail .tabs_nav .nav-tabs li').click(function(){
            var tab_id = $(this).children('').attr('href');
        
            $('.program_detail .nav-tabs li').removeClass('current');
            $('.tab-content .tab-pane').removeClass('current');
    
            $(this).addClass('current');
            $(tab_id).addClass('current');
        })
    
    });
    
    
    $('.pe_icon').on('click', function() {
            if($(this).parents('.popular-entities-list-item').hasClass('opened')){
                $(this).parents('.program_desc').children('.about__button--more').removeClass('expand');
                $(this).parents('.program_desc').removeClass('about__summary-wrapper--open');
                $(this).parents('.popular-entities-list-item').removeClass('opened');
            }
            else{
                $('.popular-entities-list-item').removeClass('opened');
                $(this).parents('.program_desc').children('.about__button--more').addClass('expand');
                $(this).parents('.program_desc').addClass('about__summary-wrapper--open');
                $(this).parents('.popular-entities-list-item').addClass('opened');
            }
            
    });
    
    $('.about__button--more').on('click', function() {
            $(this).toggleClass('expand'); 
            $(this).parents('.program_desc').toggleClass('about__summary-wrapper--open'); 
    }); 
    
    
    
    $('.tabs_nav .nav-tabs li a').click(function(event) {
                event.preventDefault();
                var href=$(this).attr('href');
                var target=$(href);
                var top=target.offset().top;
                $('html,body').stop();
    });
    
    
    $('.secondary-nav-dropdown__trigger').on('click', function() {
            $(this).parents('.secondary-nav-dropdown').children('.secondary-nav-dropdown-menu').toggle();
    });
    var cbpHorizontalMenu = (function() {
    
        var $listItems = $( '#cbp-hrmenu > ul > li' ),
            $menuItems = $listItems.children( 'a' ),
            $body = $( 'body' ),
            current = -1;
    
        function init() {
            $menuItems.on( 'click', open );
            $listItems.on( 'click', function( event ) { event.stopPropagation(); } );
        }
    
        function open( event ) {
            $('.secondary-nav-dropdown-menu').hide();
            if( current !== -1 ) {
                $listItems.eq( current ).removeClass( 'cbp-hropen' );
            }
    
            var $item = $( event.currentTarget ).parent( 'li' ),
                idx = $item.index();
    
            if( current === idx ) {
                $item.removeClass( 'cbp-hropen' );
                current = -1;
            }
            else {
                $item.addClass( 'cbp-hropen' );
                current = idx;
                $body.off( 'click' ).on( 'click', close );
            }
    
            return false;
    
        }
    
        function close( event ) {
            $listItems.eq( current ).removeClass( 'cbp-hropen' );
            current = -1;
        }
    
        return { init : init };
    
    })();
    
    $(function() {
                    cbpHorizontalMenu.init();
    });