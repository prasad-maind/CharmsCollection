var prductId = window.location.search.split("=")[1]

$.ajax({
    type:"get",
    url : "https://5f844e4d6b97440016f4f452.mockapi.io/ShopingWebSit/"+prductId,
    success:getdetails,
    error:function(request){
        console.log(request.status)
    }
})



function getdetails(responsarr){
    var product_preview_div = $("#product-preview").attr("src",responsarr.ProductImages[0])
    var product_tital_div = $("#product_tital").text(responsarr.ProductName)
    var product_brand_div = $("#product_brand").text(responsarr.ProductBrandName)
    var product_brand_div = $("#product-price").text(responsarr.ProductPrice)
    var description_div = $("#description").text(responsarr.ProductDiscription)
    
    var photos  = responsarr.ProductImages
    var product_images_div = $("#product-images")
    for(i=0;i<photos.length;i++){
        var imges = $("<img>").attr("src",photos[i])
        product_images_div.append(imges)
    }

    $("img").click(function(){
        $('.active-img').removeClass('active-img');
        $(this).addClass("active-img");
        $("#product-preview").attr("src",this.src)
    })
  
}


var id = localStorage.getItem("id")
function addToCartBtnClicked(element){
    

    $.ajax({
        type:"get",
        url : "https://5ef88b09ae8ccb0016fd725b.mockapi.io/CartDataForShopeLAne/"+id,
        success:function(responsarr){
            var cart= responsarr.Cart
            postaction(cart,id)
        },
        error:function(request){
            console.log(request.status)
        }
        }
    )


}
