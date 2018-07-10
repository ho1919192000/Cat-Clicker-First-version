$(function () {
    let model = {
        data: [{
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/220px-Cat03.jpg',
            name: 'John',
            likes: 0
        }, {
            src: 'https://pbs.twimg.com/profile_images/875671244791840768/rUzo7sDc_400x400.jpg',
            name: 'Chewie',
            likes: 0
        }, {
            src: 'http://www.loc8tor.com/pets/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/l/i/lifestyle-1-600x600.jpg',
            name: 'Jill',
            likes: 0
        }, {
            src: 'https://i.pinimg.com/736x/c3/0e/9b/c30e9bbaef3532e9b5b8964024f25a71--princess-cat-princess-aurora.jpg',
            name: 'Mr.Nice',
            likes: 0
        }, {
            src: 'https://information-upload.s3.amazonaws.com/images/DRPaEs9WVivHAC0e3IlUDBqirJDtBzAQzMgpNlu0.jpeg',
            name: 'WTF',
            likes: 0
        }],
        getAllCats: function () {
            return this.data;
        },
        getOneCat: function (index) {
            return this.data[index];
        }
    };

    let octopus = {
        getCats: function () {
            return model.getAllCats();
        },
        getCat: function (id) {
            let index = id - 1;
            return model.getOneCat(index); //index start with 0
        },
        countLikes: function (id) {
            let index = id - 1;
            model.data[index].likes++;
            let like = model.getOneCat(index).likes;
            view2.updateLikes(like);
        },
        init: function () {
            view1.init();
            view2.init();
        }
    }

    let view1 = {
        init: function () {
            //----toggle btn----
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
            //----add event listener----
            let cats = octopus.getCats();
            cats.forEach(function (cat, index) {
                let sidebarHtmlSection = `<li class='sidebarItem'>${cat.name}</li>`;
                $('.list-unstyled').append(sidebarHtmlSection);
                $('.sidebarItem:last').click(function () {
                    view2.displayCat(index+1);
                })
            })
        }
    }
    let view2 = { //increase likes
        init: function () {
            $('#picHolder').click(function () {
                let id = parseInt($('#catId').text());
                octopus.countLikes(id);
            })
            this.catPic = $('#catPic');
            this.catName = $('#catName');
            this.catLikes = $('#catLikes');
            this.catId = $('#catId'); 
            this.displayCat(1);
        },
        displayCat: function (id) {
            let cat = octopus.getCat(id);
            this.catPic.attr('src', cat.src);
            this.catName.text(cat.name);
            this.catLikes.text(cat.likes);
            this.catId.text(id);
        },
        updateLikes: function(like) {
            $('#catLikes').text(like);
        }
    }
    
    octopus.init();
})