var storage = sessionStorage;
function doFirst(){
    if(storage['addItemList'] == null){
        storage['addItemList'] = '';
    }
    // list Json陣列
    var list = document.querySelector('.addButton');

    for( var i=0; i<list.length; i++){
        list[i].addEventListener('click',function(){
            var itemInfo = document.querySelector('#'+this.id+' input').value;
            addItem(this.id, itemInfo);
        },false);
    }


    function addItem(itemId,itemValue){
        var image = document.createElement('img');
        image.src = 'imgs/'+itemValue.split('|')[1];
        image.id = 'imageSelect';

        var title = document.createElement('span');
        title.innerText = itemValue.split('|')[0];

        var price = document.createElement('span');
        price.innerText = parseInt(itemValue.split('|')[2]);

        var newItem = document.getElementById('newItem');

        if(newItem.hasChildNodes()){
            while(newItem.childNodes.length >= 1){
                newItem.removeChild(newItem.firstChild);
            }
        }
        newItem.appendChild(image);
        newItem.appendChild(title);
        newItem.appendChild(price);

        // 存入storage
        if(storage[itemId]){
            alert('已選取');
        }else{
            storage['addItemList'] += itemId + ', ';
            storage[itemId] = itemValue;
        }

        var itemString = storage['addItemList'];
        var items = itemString.substr(0,itemString.length-2).split(', ');

        var subtotal = 0;
        for(var key in items){
            var itemInfo = storage[items[key]]; // itemInfo = storage.getItem(items[key])
            var itemPrice = parseInt(itemInfo.split('|')[2]);

            subtotal += itemPrice;
        }
        document.getElementById('itemCount').innerText = item.length;
        document.getElementById('subtotal').innerText = subtotal;

    }

    var itemString = storage['addItemList'];
    var items = itemString.substr(0,itemString.length-2).split(', ');

    newItem = document.createElement('section');
    newTable = document.createElement('table');

    for(var key in items){
        var itemInfo = storage[items[key]];
        createCartList(items[key],itemInfo);
    }

    newItem.appendChild(newTable);
    document.getElementById('cartList').appendChild(newItem);

    // subtitle
// 不加var 做全域宣告！

     subtotal = 0;
    for (var key in items){
        var itemValue = storage [item[key]];
        var itemPrice = parseInt(itemValue.split('|')[2]);

        subtotal += itemPrice;
    }

    document.getElementById('subtotal').innerText = subtotal;

}
function createCartList(itemId,itemValue){

    var itemTitle = itemValue.split('|')[0];
    var itemImage = 'imgs/'+itemValue.split('|')[1] ;
    var itemPrice = parseInt(itemValue.split('|')[2]);

    // 建立品項清單的區域

    var trItemList = document.createElement('tr');
    trItemList.className = 'item';

    newTable.appendChild(trItemList);
    // 建立商品圖片第一個

    var tdImage =  document.createElement('td');
    tdImage.style.width = '200px';

    var image = document.createElement('img');
    image.src = itemImage;
    image.width = 80;

    tdImage.appendChild(image);
    trItemList.appendChild(tdImage);
    // 建立名稱和刪除按鈕第二個

    var tdTitle = document.createElement('td');
    tdTitle.style.width = '280px';
    tdTitle.id = itemId;

    var pTitle = document.createElement('p');

    pTitle.innerText = itemTitle;

    var button = document.createElement('button');
    button.innerText = 'Delete';
    button.addEventListener('click',deleteItem,false);

    tdTitle.appendChild(pTitle);
    tdTitle.appendChild(button);
    trItemList.appendChild(tdTitle);
    // 商品價格第三個
    var tdPrice = document.createElement('td');
    tdPrice.style.width = '170px';
    tdPrice.innerText = itemPrice;

    trItemList.appendChild(tdPrice);

    // 商品數量第四個
    var tdItemCount = document.createElement('td');
    tdItemCount.style.width = '60px';

    var itemCount = document.createElement('input');
    itemCount.type = 'number';
    itemCount.min = 0;
    itemCount.value = 1;
    itemCount.addEventListener('input',changeItemCount,false);


    tdItemCount.appendChild(itemCount);
    trItemList.appendChild(tdItemCount);


}
function deleteItem(){
    var itemId = this.parentNode.getAttribute('id');
    // 刪除該筆前扣除金額

    var itemValue = storage[itemId];
    subtotal -= parseInt(itemValue.split('|')[2]);

    document.getElementById('subtitle').innerText = subtotal;


    //清除storage 資料
    storage.removeItem(itemId);
    storage['addItemList'] = storage['addItemList'].replace(itemId+', ','');


    //最後將該筆tr刪除, 找table 刪除，從button (this) 找

    this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
}
function changeItemCount(){
    // alert('hi');
}

window.addEventListener('load',doFirst,false);
