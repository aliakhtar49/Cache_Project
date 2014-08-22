$(document).ready(function()
{


        function checkform()
        {
            var issue_name =$('#name_of_issue').val();
            if(issue_name == '')
            {
                return false;
            }
            else
            {
                return true;
            }
        }


    $.ajax
    ({
        url:'/Get_Current_User_Info',
        type:'POST',
        success:function(res)
        {
            $.ajax
            ({
                url:'/Get_User_Image',
                type:'POST',
                data:{email:res.email},
                success:function(Image)
                {

                    if(Image == "yes")
                    {


                        $("#ali").append("<img style='max-width:20px;height:20px;' src='/img/SignUpBackGround.jpg'/>");
                    }
                    else
                    {

                        var oImg1 = document.createElement("img");
                        oImg1.setAttribute('src', 'data:image/png;base64,' + Image);
                        oImg1.setAttribute('id', 'image');
                        oImg1.setAttribute('style','width:20px;height:20px')
                        $("#ali").append(oImg1);

                    }


                }
            })

        }
    })
});
