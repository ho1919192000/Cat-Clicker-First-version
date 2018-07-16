$(function () {
    /*----model----*/
    let model = {
        currentCat: null,
        cats: [{
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
        }]
    }
    /*----octopus----*/
    var octopus = {
        init: function () {
            model.currentCat = model.cats[0];
            catView.init();
            catListView.init();

        },
        getCurrentCat: function () {
            return model.currentCat;
        },
        getCats: function () {
            return model.cats;
        },
        setCurrentCat: function (cat) {
            model.currentCat = cat;
        },
        incrementCount: function () {
            model.currentCat.likes++;
            catView.render();
        }

    }
    /*----view----*/
    var catListView = {

        init: function () {
            //----toggle btn----
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
            //----add cat list----
            /*
            this.catListElem = document.getElementById("cat-list");
            */
            this.catListElem = $('#cat-list')[0];

            this.render();
        },
        render: function () {
            this.catListElem.innerHTML = '';
            let cats = octopus.getCats();

            cats.forEach(function(cat){
                let item = document.createElement('li');
                item.textContent = cat.name;
                item.addEventListener('click', function() {
                    console.log(item);
                    octopus.setCurrentCat(cat);
                    catView.render()
                })

                this.catListElem.append(item);        
            }, this);        
            
            /*
            for (i = 0; i < cats.length; i++) {
                // this is the cat we're currently looping over
                cat = cats[i];

                // make a new cat list item and set its text
                elem = document.createElement('li');
                elem.textContent = cat.name;

                // on click, setCurrentCat and render the catView
                // (this uses our closure-in-a-loop trick to connect the value
                //  of the cat variable to the click event function)
                elem.addEventListener('click', (function (catCopy) {
                    return function () {
                        octopus.setCurrentCat(catCopy);
                        catView.render();
                    };
                })(cat));

                // finally, add the element to the list
                this.catListElem.appendChild(elem);
            }
            */
            /*

            cats.forEach(function (cat, index) {

                let sidebarHtmlSection = `<li class='sidebarItem'>${cat.name}</li>`;
                $('.list-unstyled').append(sidebarHtmlSection);
                $('.sidebarItem:last').click(function () {
                    octopus.setCurrentCat(cat);
                    catView.render();
                })

            })
            */
        }
    }
    var catView = {
        init: function () {
            this.catPic = $('#catPic');
            this.catName = $('#catName');
            this.catLikes = $('#catLikes');
            this.picHolder = $('#picHolder');

            this.picHolder.click(function () {
                octopus.incrementCount();
            });

            this.render();
        },
        render: function () {
            let currentCat = octopus.getCurrentCat();
            this.catPic.attr('src', currentCat.src);
            this.catName.text(currentCat.name);
            this.catLikes.text(currentCat.likes);
        }
    }

    octopus.init();


})