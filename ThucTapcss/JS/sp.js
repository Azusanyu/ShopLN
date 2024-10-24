// let sp={ma:"SP001", ten:"Thế giới Otomegame thật khắc nghiệt với nhân vật quần chúng", hinh:"2-rdvetzz.thumb_500x.jpg",gia:"148000"};
const arrSP=[
    {ma:"SP001", ten:"Thế giới Otomegame thật khắc nghiệt với nhân vật quần chúng Vol.8",
        hinh:["2-rdvetzz.thumb_500x.jpg","th_ng-tin-ph_t-h_nh-s_ch-th_-gi_i-otome-game...-6b_a_1.jpg"],gia:"148000"},

    {ma:"SP002", ten:"Arya bàn bên thỉnh thoảng lại trêu ghẹo tôi bằng tiếng Nga Vol.5", 
    hinh:["ffwjjbvuoaidtzr.thumb_500x.jpg","u3855-8b76feb7-5eff-49e9-a379-5c20d2fd7468.jpg","vTn3gcG.jpeg"],gia:"148000"},

    {ma:"SP003", ten:"Thiên sứ nhà bên (Manga) Vol.1 ", 
        hinh:["JP-Manga-Vol1-Cover.jpg","JP-Manga-Vol2-Cover.jpg"],gia:"148000"},

    {ma:"SP004", ten:"Thiên sứ nhà bên (Manga) Vol.2 ", 
        hinh:["JP-Manga-Vol2-Cover.jpg","JP-Manga-Vol1-Cover.jpg"],gia:"148000"},

    {ma:"SP005", ten:"Vợ trong game của tôi là một Idol nổi tiếng ngoài đời thực Vol.1 ",
        hinh:["th_ng-tin-xu_t-b_n-v_-trong-game_b_a1.jpg","images.jpg","vol3.thumb_500x.jpg",,"vn-11134201-23030-f6equfq0ptov60.jpg","vn-11134201-23030-f02706r0ptov07.jpg"],gia:"148000"},

    {ma:"SP006", ten:"Arya bàn bên thỉnh thoảng lại trêu ghẹo tôi bằng tiếng Nga Vol.3", 
        hinh:["u3855-8b76feb7-5eff-49e9-a379-5c20d2fd7468.jpg","vTn3gcG.jpeg","ffwjjbvuoaidtzr.thumb_500x.jpg",],gia:"148000"},

    {ma:"SP007", ten:"Vợ trong game của tôi là một Idol nổi tiếng ngoài đời thực Vol.3", 
        hinh:["vol3.thumb_500x.jpg","images.jpg","th_ng-tin-xu_t-b_n-v_-trong-game_b_a1.jpg","vn-11134201-23030-f6equfq0ptov60.jpg","vn-11134201-23030-f02706r0ptov07.jpg"],gia:"148000"},

    {ma:"SP008", ten:"Arya bàn bên thỉnh thoảng lại trêu ghẹo tôi bằng tiếng Nga Vol.4", 
        hinh:["vTn3gcG.jpeg","ffwjjbvuoaidtzr.thumb_500x.jpg","u3855-8b76feb7-5eff-49e9-a379-5c20d2fd7468.jpg",],gia:"148000"},

    {ma:"SP009", ten:"Thế giới Otomegame thật khắc nghiệt với nhân vật quần chúng Vol.6",
        hinh:["th_ng-tin-ph_t-h_nh-s_ch-th_-gi_i-otome-game...-6b_a_1.jpg","2-rdvetzz.thumb_500x.jpg"],gia:"148000"},

    {ma:"SP010", ten:"Vợ trong game của tôi là một Idol nổi tiếng ngoài đời thực Vol.2", 
        hinh:["images.jpg","vol3.thumb_500x.jpg","th_ng-tin-xu_t-b_n-v_-trong-game_b_a1.jpg","vn-11134201-23030-f6equfq0ptov60.jpg","vn-11134201-23030-f02706r0ptov07.jpg"],gia:"148000"},
]
// demo sản phẩm từ for 
function displayProducts() {
    const productContainer = document.querySelector(".dsSP");
    let sps = "";
    for(let i=0; i < arrSP.length;i++){
        var obj=JSON.stringify(arrSP[i]);
        sps +=`<div class="column">
            <div class="sanpham">
                <img src="ThucTapcss/media/sp/${arrSP[i].hinh[0]}" alt="">
                <div class="ten">${arrSP[i].ten}</div>
                <div class="gia">
                <del>250.000 VNĐ</del> 148.000 VNĐ
                </div>
            </div>
            <button class="btn btnDetail" onclick=\'showsp(\`${obj}\`)\'>Thông tin sản phẩm</button>
            <button class="btn btnaddCart" onclick=\'them(\`${obj}\`)\'>Thêm vào giỏ hàng</button>
        </div>`;
    };
document.querySelector(".dsSP").innerHTML=sps;
}
window.onload = displayProducts;

// let soluong = localStorage.getItem("totalQty");
// if(soluong == null){
//     soluong=0;
// }
// document.querySelector(".shop").innerText = soluong;

// let arrCart = localStorage.getItem("myCart");
// if(arrCart == null){
//     arrCart= [];
// }else{
//     arrCart = JSON.parse(localStorage.getItem("myCart"));
// }
// // console.log(soluong)
// // console.log(arrCart)
// function them(objSP){
//     objSP=JSON.parse(objSP);
//     // console.log(objSP)
//     var item;
//     var qtyitem=0;
//     var flag = false;
//     // for(let i=0; i<arrSP.length;i++){
//     //     if(arrSP[i].ma==ma){
//     //         item = arrSP[i];
//     //         sluong = 1;
//     //         break;
//     //     }
//     // }
//     console.log("cur"+objSP.ma);
//     for(let i=0; i<arrCart.length;i++){
//         console.log("spi"+arrCart[i].sp.ma);
//         if(arrCart[i].sp.ma== objSP.ma){
//             arrCart[i].qty ++;
//             flag = true;
//             break;
//         }
//     }
//     if (flag == false){
//         let cartitem={sp:objSP,qty:1};
//         arrCart.push(cartitem);
//     }
//     soluong++
//     // console.log(arrCart);
//     document.querySelector(".shop").innerText = soluong;
//     localStorage.setItem("myCart",JSON.stringify(arrCart));
//     localStorage.setItem("totalQty",soluong+"");

// }

// function showsp(objSP){
//     console.log(objSP);
//     window.localStorage.clear();
//     window.localStorage.setItem("sanpham", objSP);
//     location.href="detail.html"
// }