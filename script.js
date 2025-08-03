document.addEventListener('DOMContentLoaded', function() {

    // ข้อมูลเมนูอาหาร (สามารถเพิ่มเมนูใหม่ได้ที่นี่)
    const menuItems = [
        {
            name: "ส้มตำไทย",
            description: "ส้มตำรสชาติจัดจ้าน เปรี้ยว เค็ม หวาน ลงตัว",
            price: "60 บาท",
            image: "111.jfif" // URL ของรูปภาพ
        },
        {
            name: "ผัดไทยกุ้งสด",
            description: "ผัดไทยเส้นจันท์เหนียวนุ่ม ผัดกับกุ้งสดตัวโต",
            price: "85 บาท",
            image: "111.jfif"
        },
        {
            name: "ข้าวผัดสับปะรด",
            description: "ข้าวผัดหอมกลิ่นสับปะรดและเครื่องเทศ เสิร์ฟในลูกสับปะรด",
            price: "120 บาท",
            image: "111.jfif"
        },
        {
            name: "ต้มยำกุ้ง",
            description: "ต้มยำกุ้งน้ำข้น รสเข้มข้น จัดจ้านถึงใจ",
            price: "150 บาท",
            image: "111.jfif"
        }
    ];

    const menuContainer = document.getElementById('menu-container');

    // ฟังก์ชันสำหรับสร้างเมนูแต่ละชิ้น
    function createMenuItem(item) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const itemImage = document.createElement('img');
        itemImage.src = item.image;
        itemImage.alt = item.name;

        const itemDetails = document.createElement('div');
        itemDetails.classList.add('item-details');

        const itemName = document.createElement('h3');
        itemName.textContent = item.name;

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;

        const itemPrice = document.createElement('p');
        itemPrice.classList.add('price');
        itemPrice.textContent = item.price;

        itemDetails.appendChild(itemName);
        itemDetails.appendChild(itemDescription);
        itemDetails.appendChild(itemPrice);
        menuItem.appendChild(itemImage);
        menuItem.appendChild(itemDetails);

        return menuItem;
    }

    // ลูปเพื่อสร้างเมนูทั้งหมดและนำไปใส่ในหน้าเว็บ
    menuItems.forEach(item => {
        const menuItemElement = createMenuItem(item);
        menuContainer.appendChild(menuItemElement);
    });
});