var $=document.querySelector.bind(document)
var $$=document.querySelectorAll.bind(document)
var mai=$$('.missvote-header_selection')
//animation cho các cái kéo tới mà hình á nề
document.onscroll=function()
{
    var thien1=370
    var thien11=310
    var thien2=950
    var thien22=1030
    var thien3=500
    var thien4=1900
    var thien44=2020
    var thien5=2000
    var thien55=2200
    var thien6=3300
    var thien66=3450
    var thien7=3200
    var thien77=3300
    var thien8=200
    var thien88=250
    var thien= scrollY
    //cái chữ với phông nền
    if(thien>thien1)
    {
        $('.missvote-body_content_detail').classList.remove('hien1')
        $('.missvote-body_content_detail').classList.add('hien')
    }
    if (thien < thien11)
    {
        $('.missvote-body_content_detail').classList.remove('hien')
        $('.missvote-body_content_detail').classList.add('hien1')
    }
    //ảnh bà tiên
    if(thien>thien3)
    {
        $('.anhtien').classList.remove('hien2')
        $('.anhtien').classList.add('hien')
    }
    if(thien<thien3)
    {
        $('.anhtien').classList.remove('hien')
        $('.anhtien').classList.add('hien2')
    }
    //hoạt động gần đây
    if(thien>thien2)
    {
        $('.hoatdongganday').classList.remove('hien3')
        $('.hoatdongganday').classList.add('hien')
    }
    if(thien < thien22)
    {
        $('.hoatdongganday').classList.remove('hien')
        $('.hoatdongganday').classList.add('hien3')
    }
    //phần 3
    if(thien > thien4)
    {
        $('.phanbadau').classList.remove('hien3')
        $('.phanbadau').classList.add('hien')
    }
    if(thien < thien44)
    {
        $('.phanbadau').classList.remove('hien')
        $('.phanbadau').classList.add('hien3')
    }
    //ảnh
    if(thien > thien5)
    {
        $('.phanbathisinh').classList.remove('hien4')
        $('.phanbathisinh').classList.add('hien11')
    }
    if(thien < thien55)
    {
        $('.phanbathisinh').classList.remove('hien11')
        $('.phanbathisinh').classList.add('hien4')
    }
    //phanchan
    if(thien > thien6)
    {
        $('.khoa').classList.remove('hien5')
        $('.khoa').classList.add('hien11')
    }
    if(thien < thien66)
    {
        $('.khoa').classList.remove('hien11')
        $('.khoa').classList.add('hien5')
    }
    //ảnh logo
    if(thien > thien7)
    {
        $('.anhlogo').classList.remove('hien5')
        $('.anhlogo').classList.add('hien11')
    }
    if(thien < thien77)
    {
        $('.anhlogo').classList.remove('hien11')
        $('.anhlogo').classList.add('hien5')
    }
    // thanhluachon
    if(thien > thien8)
    {
        $('.missvote-header').classList.add('hien6')
        mai.forEach((tinh) =>
        {
        tinh.classList.add('hien7')
        })
    }
    if(thien < thien88)
    {
        $('.missvote-header').classList.remove('hien6')
        mai.forEach((tinh) =>
        {
        tinh.classList.remove('hien7')
        })
    }

}
//chuyển chức năng nề
var thien9= $$('.missvote-header_selection')
thien9.forEach((thien9s,index)=>
{
    thien9s.onclick=function()
    {
        $('.chinh').classList.remove('chinh')
        thien9s.classList.add('chinh')
        $('.chucnang').classList.remove('chucnang')
        $$('.missvote-body_content')[index].classList.add('chucnang')
    }
})