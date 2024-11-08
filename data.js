
//Storing the https://drive.google.com/file/d/1fOadeM1liwbUK38z92F0XYugk2jwqK2r/view?usp=share_link Json data to our local file to use it.
const data = [
        {
            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            "images": [
                "https://netrinoimages.s3.eu-west-2.amazonaws.com/2017/05/28/453344/208023/apple_iphone_9_all_colors_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_2192858_o.jpg",
                "https://netrinoimages.s3.eu-west-2.amazonaws.com/2017/05/28/453344/208023/apple_iphone_9_all_colors_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_2192865.jpg",
                "https://netrinoimages.s3.eu-west-2.amazonaws.com/2017/05/28/453344/208023/apple_iphone_9_all_colors_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_2192863.jpg",
                "https://netrinoimages.s3.eu-west-2.amazonaws.com/2017/05/28/453344/208023/apple_iphone_9_all_colors_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_2192864.jpg",
                "https://netrinoimages.s3.eu-west-2.amazonaws.com/2017/05/28/453344/208023/apple_iphone_9_all_colors_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_2192866.jpg"
            ]
        },
        {
            "id": 2,
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 899,
            "discountPercentage": 17.94,
            "rating": 4.44,
            "stock": 34,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
            "images": [
                "https://controlz.world/cdn/shop/files/iPhoneX-Grey1_60529524-9695-4d98-a5d4-78c4c983f624.webp?v=1718102709",
                "https://www.digiaura.fi/media/iphone-x-white.webp",
                "https://i.guim.co.uk/img/media/91bc1db10420830da8e99ef7df362fbbbfd96dac/1_0_4277_2567/master/4277.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=327873b2b9c6af4135195848e7a574df",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6MwKlRoWt0m91TelAGh2F9wDAGini2q2d4g&s"
            ]
        },
        {
            "id": 3,
            "title": "Samsung Universe 9",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "price": 1249,
            "discountPercentage": 15.46,
            "rating": 4.09,
            "stock": 36,
            "brand": "Samsung",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
            "images": [
                "https://admin.hyperce.io/assets/thumbnail__12__preview.jpg?w=800"
            ]
        },
        {
            "id": 4,
            "title": "OPPOF19",
            "description": "OPPO F19 is officially announced on April 2021.",
            "price": 280,
            "discountPercentage": 17.91,
            "rating": 4.3,
            "stock": 123,
            "brand": "OPPO",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
            "images": [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbuAWQj59Yw3h9314APmZPHzQxdp8NmGM1EQ&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStZ0HUn_P6RLOIrvEYAC1j5aO8vTcuPjpBDQvJnY_-eHjISvA5oXjl2dHw71RwZLa5gik&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoV2tx2rF2HmIGZNAs3yJV7I7pt9QdBK3xyR1fnT_qWyOCbpeJAC7ndAiS26sfQhiJpoc&usqp=CAU",
                "https://sell.gameloot.in/wp-content/uploads/sites/4/2023/06/OPPO-F19-Pro-Plus-5G-GB-RAM-128GB-Storage.jpg",
                "https://www.xparts.in/wp-content/uploads/2024/04/Oppo-F19-Pro-Plus-Back-Housing.png"
            ]
        },
        {
            "id": 5,
            "title": "Huawei P30",
            "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            "price": 499,
            "discountPercentage": 10.58,
            "rating": 4.09,
            "stock": 32,
            "brand": "Huawei",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
            "images": [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_NB6sSJR4ETNhv6g1wutp5Y2spCmWzIIEmfJfZxQaapqgG4RxJa2dmEr_FRqWDw7JNiM&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy8xHuvtkQqeaSKWUg0xvk6YnebFkGAgbgEUZ0Yx_cP-lQW8LYJuMsOP5D5BMoL2AqMNA&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-EwtjlLGgsdzEqjl0yY2Y-w-RAlNNv-4f0axp1btl-Ajv_-zk7ZSlIoF78VOn-tP7njw&usqp=CAU"
            ]
        }
];

export {data};