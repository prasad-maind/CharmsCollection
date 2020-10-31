
var productInfo = window.location.search.split("=")[1]


$.ajax({
    type:"get",
    url:"https://5f844e4d6b97440016f4f452.mockapi.io/ShopingWebSit",
    success:handelresonse,
    error:function(request){
        console.log(request.status)
    }
})

function handelresonse(responseArrr){
    const isClotingMen = responseArrr.filter(responseArrr => responseArrr.ProductCatagoryMenOrWomen == "Men" && responseArrr.ProductType =="Clothing")
    const isWatchesMen = responseArrr.filter(responseArrr => responseArrr.ProductCatagoryMenOrWomen == "Men" && responseArrr.ProductType =="Watches")
    const isSneeker = responseArrr.filter(responseArrr => responseArrr.ProductType =="Shoes")
    const isSunglasses = responseArrr.filter(responseArrr => responseArrr.ProductType =="Sunglasses")
    const isAcessories = responseArrr.filter(responseArrr => responseArrr.ProductType =="Accessories")
      var clothingAll_grid_div = $("#accessories_grid_allproduct")
      switch(productInfo) {
        case "clothing_grid":
          // code block
          craeteAllProductgrid(isClotingMen.reverse(),clothingAll_grid_div)
          break;
        case "sneekerGrid_grid":
          // code block
          craeteAllProductgrid(isSneeker.reverse(),clothingAll_grid_div)
          break;
        case "watches_grid":
          // code block
          craeteAllProductgrid(isWatchesMen.reverse(),clothingAll_grid_div)
          break;
        case "sunglasess_grid":
          // code block
          craeteAllProductgrid(isSunglasses.reverse(),clothingAll_grid_div)
          break;
        case "accessories_grid":
          // code block
        craeteAllProductgrid(isAcessories.reverse(),clothingAll_grid_div)
          break;
        default:
          // code block
      }
      
    
    
}


function craeteAllProductgrid(array,grid){
    for(i=0;i<array.length;i++){
        var product_grid_div = $("<div>").attr("class","product_grid")
        var ancorTag = $("<a>").attr("href","details.html?productid="+array[i].id).append($("<img>").attr({"class":"product_img","src":array[i].ProductImages[0]}))
        product_grid_div.append(ancorTag)
        var product_met_div = $("<div>").attr("class","product-meta")
        var h4_tag = $("<h4>").text(array[i].ProductName)
        var h5_tag = $("<h5>").text(array[i].ProductBrandName)
        var p_tag = $("<p>").text("RS - "+array[i].ProductPrice)
        product_met_div.append(h4_tag,h5_tag,p_tag)
        product_grid_div.append(product_met_div)
        grid.append(product_grid_div)   
    }
}
